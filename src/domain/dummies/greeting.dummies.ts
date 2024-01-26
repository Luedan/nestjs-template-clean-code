import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';

export const FakeGreeting: Greeting = { greeting: 'Hello World' };

export const FakeGreetingArray = [FakeGreeting];

export const FakeGreetingDto: GreetingResponseDto = { greeting: 'Hello World' };

export const FakeGreetingDtoArray = [FakeGreetingDto];
