import { AutoMap } from '@automapper/classes';

/**
 * Represents the response data for the Greeting.
 */
export class GreetingResponseDto {
  /**
   * The identifier of the greeting.
   */
  @AutoMap()
  id: number;

  /**
   * The greeting message.
   */
  @AutoMap()
  greeting: string;

  /**
   * The state of the greeting.
   */
  @AutoMap()
  state: number;
}
