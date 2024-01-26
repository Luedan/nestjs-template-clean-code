import { GreetingMultipleConverter } from '@application/mapper/greeting/greetingMultipleConverter';
import { GreetingProfile } from '@application/mapper/greeting/greetingProfile';
import { MapperInjection } from '@application/mapper/mapper';
import {
  FakeGreeting,
  FakeGreetingArray,
  FakeGreetingDto,
  FakeGreetingDtoArray,
} from '@domain/dummies/greeting.dummies';
import { Test } from '@nestjs/testing';

// This is a test for the GreetingMultipleConverter class.
describe('GreetingMultipleConverter', () => {
  // The GreetingMultipleConverter instance.
  let _greetingMultipleConvert: GreetingMultipleConverter;

  beforeEach(async () => {
    /**
     * The module reference for testing.
     */
    const appRef = await Test.createTestingModule({
      imports: [MapperInjection],
      providers: [GreetingProfile, GreetingMultipleConverter],
    }).compile();

    _greetingMultipleConvert = appRef.get<GreetingMultipleConverter>(
      GreetingMultipleConverter,
    );
  });

  it('should convert a greeting from an entity', () => {
    const greeting = _greetingMultipleConvert.fromEntity(FakeGreeting);

    expect(greeting).toEqual(FakeGreetingDto);
  });

  it('should convert a greeting from a Dto', () => {
    const greeting = _greetingMultipleConvert.fromDto(FakeGreetingDto);

    expect(greeting).toEqual(FakeGreeting);
  });

  it('should convert a greeting from an entity array', () => {
    const greetingArray =
      _greetingMultipleConvert.fromEntityArray(FakeGreetingArray);

    expect(greetingArray).toEqual(FakeGreetingDtoArray);
  });

  it('should convert a greeting from a Dto array', () => {
    const greetingArray =
      _greetingMultipleConvert.fromDtoArray(FakeGreetingDtoArray);

    expect(greetingArray).toEqual(FakeGreetingArray);
  });
});
