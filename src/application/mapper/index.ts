import { Provider } from '@nestjs/common';
import { GreetingProfile } from './greeting/greetingProfile';

/**
 * @description This constant is used to export the mapper profiles.
 */
export const MapperProfiles: Provider[] = [GreetingProfile];
