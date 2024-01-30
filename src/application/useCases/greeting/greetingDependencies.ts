import { Provider } from '@nestjs/common';
import { GetHello } from './getHello';
import { GetHelloFor } from './getHelloFor';
import { CreateGreeting } from './createGreeting';
import { GetAllGreetings } from './getAllGreetings';
import { GetOneGreeting } from './getOneGreeting';
import { UpdateGreeting } from './updateGreeting';
import { DeleteGreeting } from './deleteGreeting';

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
  {
    provide: 'GetAllGreetings',
    useClass: GetAllGreetings,
  },
  {
    provide: 'GetOneGreeting',
    useClass: GetOneGreeting,
  },
  {
    provide: 'UpdateGreeting',
    useClass: UpdateGreeting,
  },
  {
    provide: 'DeleteGreeting',
    useClass: DeleteGreeting,
  },
];
