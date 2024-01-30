import { Test } from '@nestjs/testing';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { GetOneGreeting } from '@application/useCases/greeting/getOneGreeting';
import { createMock } from '@golevelup/ts-jest';
import { GreetingRepository } from '@infrastructure/persistence/repository/greeting/greetingRepository';
import { FakeGreetingDto } from '../../../mocks/data/greeting.dummies';
import { NotFoundException } from '@nestjs/common';

describe('GetOneGreeting', () => {
  let getOneGreeting: GetOneGreeting;

  const _mapperMock = {
    map: jest.fn().mockImplementation(() => FakeGreetingDto),
  };

  const _greetingRepositoryMock = createMock<GreetingRepository>();

  _greetingRepositoryMock.findOne = jest
    .fn()
    .mockImplementation(() => FakeGreetingDto);

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        GetOneGreeting,
        {
          provide: 'automapper:nestjs:default',
          useValue: _mapperMock,
        },
        {
          provide: 'GreetingRepository',
          useValue: _greetingRepositoryMock,
        },
      ],
    }).compile();

    getOneGreeting = moduleRef.get<GetOneGreeting>(GetOneGreeting);
  });

  it('should return a GreetingResponseDto', async () => {
    const id = 1;
    const fakeGreetingResponseDto = FakeGreetingDto;

    const result = await getOneGreeting.handle(id);

    expect(result).toEqual(fakeGreetingResponseDto);
    expect(_greetingRepositoryMock.findOne).toHaveBeenCalledWith({
      where: { id },
    });
    expect(_mapperMock.map).toHaveBeenCalledWith(
      fakeGreetingResponseDto,
      Greeting,
      GreetingResponseDto,
    );
  });

  it('should handle errors', async () => {
    const id = 1;
    const fakeError = new NotFoundException();

    _greetingRepositoryMock.findOne = jest.fn().mockRejectedValue(fakeError);

    _greetingRepositoryMock.findOne.mockRejectedValue(fakeError);

    await expect(getOneGreeting.handle(id)).rejects.toThrow(fakeError);
    expect(_greetingRepositoryMock.findOne).toHaveBeenCalledWith({
      where: { id },
    });
  });
});
