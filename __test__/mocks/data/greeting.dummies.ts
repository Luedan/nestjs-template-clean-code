import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';

export const FakeGreeting: Greeting = {
  id: 1,
  greeting: 'Hello World',
  state: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null,
};

export const FakeGreetingArray = [FakeGreeting];

export const FakeGreetingDto: GreetingResponseDto = {
  greeting: 'Hello World',
  id: 1,
  state: 1,
};

export const FakeGreetingDtoArray = [FakeGreetingDto];
