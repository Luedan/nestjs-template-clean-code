import { Provider } from '@nestjs/common';
import { GetHello } from './getHello';
import { GetHelloFor } from './getHelloFor';
import { CreateGreeting } from './createGreeting';

/**
 * @description This constant is used to export the greetings providers.
 */
export const GreetingProviders: Provider[] = [
  {
    provide: 'GetHelloInterface',
    useClass: GetHello,
  },
  {
    provide: 'GetHelloForInterface',
    useClass: GetHelloFor,
  },
  {
    provide: 'CreateGreetingInterface',
    useClass: CreateGreeting,
  },
];
