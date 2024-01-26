import { MapperInjection } from '@application/mapper/mapper';
import { GetHello } from '@application/useCases/greeting/getHello';
import { FakeGreetingDto } from '@domain/dummies/greeting.dummies';
import { Test } from '@nestjs/testing';

describe('GetHello use case', () => {
  let _getHello: GetHello;

  beforeEach(async () => {
    const appRef = await Test.createTestingModule({
      imports: [MapperInjection],
      providers: [GetHello],
    }).compile();

    _getHello = appRef.get<GetHello>(GetHello);
  });

  it('should return a string', async () => {
    const result = FakeGreetingDto;

    jest.spyOn(_getHello, 'handle').mockImplementation(async () => result);

    expect(result).toEqual(FakeGreetingDto);
  });
});
