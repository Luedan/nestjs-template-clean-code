import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { GetHello } from '@application/useCases/greeting/getHello';
import { FakeGreetingDto } from '../../../mocks/data/greeting.dummies';
import { Mapper } from '@automapper/core';

describe('GetHello', () => {
  let getHello: GetHello;

  const mockMapper = {
    map: jest.fn().mockImplementation((payload) => payload),
  } as unknown as Mapper;

  beforeEach(() => {
    getHello = new GetHello(mockMapper);
  });

  it('should return a GreetingResponseDto with the mapped greeting', async () => {
    const expectedResponse: GreetingResponseDto = {
      ...FakeGreetingDto,
      greeting: 'Hello World!',
    };

    const result = await getHello.handle();

    expect(result.greeting).toEqual(expectedResponse.greeting);
    expect(mockMapper.map).toHaveBeenCalledWith(
      expectedResponse,
      Greeting,
      GreetingResponseDto,
    );
  });
});
