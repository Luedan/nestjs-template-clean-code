import { AutoMap } from '@automapper/classes';

/**
 * Represents the entity data for the Greeting.
 */
export class Greeting {
  /**
   * The greeting message.
   */
  @AutoMap()
  greeting: string;
}
