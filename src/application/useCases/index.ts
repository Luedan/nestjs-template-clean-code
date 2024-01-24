import { Provider } from '@nestjs/common';
import { GreetingProviders } from './greeting/greetingDependencies';

/**
 * @description This constant is used to inject the application module.
 */
export const ApplicationProviders: Provider[] = [...GreetingProviders];
