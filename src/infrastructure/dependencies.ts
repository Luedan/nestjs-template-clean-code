import { Provider } from '@nestjs/common';
import { Context } from './context';
import { GreetingRepository } from './repository/greeting/greetingRepository';

export const InfrastructureLayerDependencies: Provider[] = [
  {
    provide: 'Context',
    useClass: Context,
  },
  {
    provide: 'GreetingRepository',
    useClass: GreetingRepository,
  },
];
