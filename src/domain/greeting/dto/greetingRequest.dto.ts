import { AutoMap } from '@automapper/classes';
import { IsString } from 'class-validator';

/**
 * Represents the request data for the Greeting.
 */
export class GreetingRequestDto {
  /**
   * The greeting message.
   */
  @AutoMap()
  @IsString()
  greeting: string;
}
