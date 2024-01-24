import { AutoMap } from '@automapper/classes';

/**
 * Represents the response data for the Greeting.
 */
export class GreetingResponseDto {
  /**
   * The greeting message.
   */
  @AutoMap()
  greeting: string;
}
