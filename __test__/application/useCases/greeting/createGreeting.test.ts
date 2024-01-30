import { Test } from '@nestjs/testing';
import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { CreateGreeting } from '@application/useCases/greeting/createGreeting';
import { FakeGreetingDto } from '../../../mocks/data/greeting.dummies';
import { createMock } from '@golevelup/ts-jest';
import { GreetingRepository } from '@infrastructure/repository/greeting/greetingRepository';

describe('CreateGreeting', () => {
  let createGreeting: CreateGreeting;

  const mockMapper = {
    map: jest.fn().mockImplementation((payload) => payload),
  };

  const mockGreetingRepository = createMock<GreetingRepository>();

  mockGreetingRepository.create = jest
    .fn()
    .mockImplementation((payload) => payload);

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CreateGreeting,
        {
          provide: 'automapper:nestjs:default',
          useValue: mockMapper,
        },
        {
          provide: 'GreetingRepository',
          useValue: mockGreetingRepository,
        },
      ],
    }).compile();

    createGreeting = moduleRef.get<CreateGreeting>(CreateGreeting);
  });

  it('should return a GreetingResponseDto', async () => {
    const greetingRequestDto: GreetingRequestDto = {
      ...FakeGreetingDto,
    };

    const expectedResponse: GreetingResponseDto = {
      ...FakeGreetingDto,
    };

    const result = await createGreeting.handle(greetingRequestDto);

    expect(result).toEqual(expectedResponse);

    expect(mockMapper.map).toHaveBeenCalledWith(
      greetingRequestDto,
      GreetingRequestDto,
      Greeting,
    );
    expect(mockGreetingRepository.create).toHaveBeenCalledWith(
      greetingRequestDto,
    );
    expect(mockMapper.map).toHaveBeenCalledWith(
      greetingRequestDto,
      Greeting,
      GreetingResponseDto,
    );
  });
});
