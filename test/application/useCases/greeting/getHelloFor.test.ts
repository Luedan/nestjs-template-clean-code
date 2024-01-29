import { GetHelloFor } from '@application/useCases/greeting/getHelloFor';
import { Mapper } from '@automapper/core';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';

jest.mock('@automapper/core');

describe('GetHelloFor', () => {
  let getHelloFor: GetHelloFor;
  const mockMapper = {
    map: jest.fn().mockImplementation((payload) => payload),
  } as unknown as Mapper;

  beforeEach(() => {
    getHelloFor = new GetHelloFor(mockMapper);
  });

  it('should return a GreetingResponseDto with the mapped greeting', async () => {
    const name = 'John Doe';
    const expectedResponse: GreetingResponseDto = {
      id: 1,
      state: 1,
      greeting: `Hello World with ${name}!`,
    };

    const result = await getHelloFor.handle(name);

    expect(result.greeting).toEqual(expectedResponse.greeting);
    expect(mockMapper.map).toHaveBeenCalledWith(
      expectedResponse,
      Greeting,
      GreetingResponseDto,
    );
  });
});
