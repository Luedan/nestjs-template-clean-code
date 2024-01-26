import { GreetingConvert } from '@application/mapper/greeting/greetingConverter';
import { GreetingProfile } from '@application/mapper/greeting/greetingProfile';
import { MapperInjection } from '@application/mapper/mapper';
import {
  FakeGreeting,
  FakeGreetingDto,
} from '@domain/dummies/greeting.dummies';
import { Test } from '@nestjs/testing';

// This is a test for the GreetingConvert class.
describe('GreetingConvert', () => {
  // The GreetingConvert instance.
  let _greetingConvert: GreetingConvert;
  beforeEach(async () => {
    /**
     * The module reference for testing.
     */
    const appRef = await Test.createTestingModule({
      imports: [MapperInjection],
      providers: [GreetingProfile, GreetingConvert],
    }).compile();

    _greetingConvert = appRef.get<GreetingConvert>(GreetingConvert);
  });

  it('should convert a greeting from an entity', () => {
    const greeting = _greetingConvert.fromEntity(FakeGreeting);

    expect(greeting).toEqual(FakeGreetingDto);
  });

  it('should convert a greeting from a Dto', () => {
    const greeting = _greetingConvert.fromDto(FakeGreetingDto);

    expect(greeting).toEqual(FakeGreeting);
  });
});
