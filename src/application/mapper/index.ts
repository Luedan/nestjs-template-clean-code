import { Provider } from '@nestjs/common';
import { GreetingProfile } from './greeting/greetingProfile';
import { MapperContext } from './mapperContext';

/**
 * @description This constant is used to export the mapper profiles.
 */
export const MapperProfiles: Provider[] = [
  GreetingProfile,
  { provide: 'MapperContext', useClass: MapperContext },
];
