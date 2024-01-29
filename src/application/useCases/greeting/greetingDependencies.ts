import { Provider } from '@nestjs/common';
import { GetHello } from './getHello';
import { GetHelloFor } from './getHelloFor';
import { CreateGreeting } from './createGreeting';

/**
 * @description This constant is used to export the greetings providers.
 */
export const GreetingProviders: Provider[] = [
  {
    provide: 'GetHello',
    useClass: GetHello,
  },
  {
    provide: 'GetHelloFor',
    useClass: GetHelloFor,
  },
  {
    provide: 'CreateGreeting',
    useClass: CreateGreeting,
  },
];
