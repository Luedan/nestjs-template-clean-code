import { Provider } from '@nestjs/common';
import { Context } from './persistence/context';
import { GreetingRepository } from './persistence/repository/greeting/greetingRepository';

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
