import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { GetHello } from '@application/useCases/greeting/getHello';
import { FakeGreetingDto } from '../../../mocks/data/greeting.dummies';
import { Test } from '@nestjs/testing';

describe('GetHello', () => {
  const res = {
    ...FakeGreetingDto,
    greeting: 'Hello World!',
  };
  let getHello: GetHello;

  const mockMapper = {
    map: jest.fn().mockImplementation(() => res),
  };

  beforeEach(async () => {
    const appRef = await Test.createTestingModule({
      providers: [
        GetHello,
        {
          provide: 'automapper:nestjs:default',
          useValue: mockMapper,
        },
      ],
    }).compile();

    getHello = await appRef.get<GetHello>(GetHello);
  });

  it('should return a GreetingResponseDto with the mapped greeting', async () => {
    const expectedResponse: GreetingResponseDto = {
      ...FakeGreetingDto,
      greeting: 'Hello World!',
    };

    const result = await getHello.handle();

    expect(result.greeting).toEqual(expectedResponse.greeting);
    expect(mockMapper.map).toHaveBeenCalledWith(
      expect.objectContaining({
        greeting: 'Hello World!',
        state: 1,
        id: 1,
      }),
      Greeting,
      GreetingResponseDto,
    );
  });

  afterEach(() => jest.clearAllMocks());
});
