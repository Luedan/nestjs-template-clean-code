import { GetAllGreetings } from '@application/useCases/greeting/getAllGreetings';
import {
  FakeGreeting,
  FakeGreetingDto,
} from '../../../mocks/data/greeting.dummies';
import { Test } from '@nestjs/testing';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { createMock } from '@golevelup/ts-jest';
import { GreetingRepository } from '@infrastructure/persistence/repository/greeting/greetingRepository';

describe('Get All Greetings use case', () => {
  const expectedGreeting = [FakeGreeting];

  const expectedGreetingResponse = [FakeGreetingDto];

  let _getAllGreetings: GetAllGreetings;

  const _mapperMock = {
    mapArray: jest.fn().mockImplementation(() => expectedGreetingResponse),
  };

  const _greetingRepositoryMock = createMock<GreetingRepository>();

  _greetingRepositoryMock.findAll = jest
    .fn()
    .mockImplementation(() => expectedGreeting);

  beforeEach(async () => {
    const appRef = await Test.createTestingModule({
      providers: [
        GetAllGreetings,
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

    _getAllGreetings = appRef.get<GetAllGreetings>(GetAllGreetings);
  });

  it('should return a GreetingResponseDto', async () => {
    const result = await _getAllGreetings.handle();

    expect(result).toEqual(expectedGreetingResponse);

    expect(_greetingRepositoryMock.findAll).toHaveBeenCalled();

    expect(_mapperMock.mapArray).toHaveBeenCalledWith(
      expectedGreeting,
      Greeting,
      GreetingResponseDto,
    );
  });
});
