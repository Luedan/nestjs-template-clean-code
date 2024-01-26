import { Provider } from '@nestjs/common';
import { GreetingProfile } from './greeting/greetingProfile';
import { GreetingConvert } from './greeting/greetingConverter';
import { GreetingConvertArray } from './greeting/greetingConverterArray';
import { GreetingMultipleConverter } from './greeting/greetingMultipleConverter';

/**
 * @description This constant is used to export the mapper profiles.
 */
export const MapperProfiles: Provider[] = [
  GreetingProfile,
  // convert injection ways
  GreetingConvert,
  GreetingConvertArray,
  GreetingMultipleConverter,
  {
    provide: 'GreetingConvert',
    useClass: GreetingConvert,
  },
  {
    provide: 'GreetingConvertArray',
    useClass: GreetingConvertArray,
  },
  {
    provide: 'GreetingMultipleConverter',
    useClass: GreetingMultipleConverter,
  },
];
