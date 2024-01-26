import { GreetingConvertArray } from '@application/mapper/greeting/greetingConverterArray';
import { GreetingProfile } from '@application/mapper/greeting/greetingProfile';
import { MapperInjection } from '@application/mapper/mapper';
import {
  FakeGreetingArray,
  FakeGreetingDtoArray,
} from '@domain/dummies/greeting.dummies';
import { Test } from '@nestjs/testing';

// This is a test for the GreetingConvertArray class.
describe('GreetingConvertArray', () => {
  // The GreetingConvertArray instance.
  let _greetingConvertArray: GreetingConvertArray;
  beforeEach(async () => {
    /**
     * The module reference for testing.
     */
    const appRef = await Test.createTestingModule({
      imports: [MapperInjection],
      providers: [GreetingProfile, GreetingConvertArray],
    }).compile();

    _greetingConvertArray =
      appRef.get<GreetingConvertArray>(GreetingConvertArray);
  });

  it('should convert a greeting from an entity array', () => {
    const greetingArray = _greetingConvertArray.fromEntity(FakeGreetingArray);

    expect(greetingArray).toEqual(FakeGreetingDtoArray);
  });

  it('should convert a greeting from a Dto array', () => {
    const greetingArray = _greetingConvertArray.fromDto(FakeGreetingDtoArray);

    expect(greetingArray).toEqual(FakeGreetingArray);
  });
});
