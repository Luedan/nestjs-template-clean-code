import { AutoMap } from '@automapper/classes';
import { IsNumber, IsString } from 'class-validator';

/**
 * Represents the request data for the Greeting.
 */
export class GreetingRequestDto {
  /**
   * The identifier of the greeting.
   */
  @AutoMap()
  @IsNumber()
  id: number;

  /**
   * The greeting message.
   */
  @AutoMap()
  @IsString()
  greeting: string;

  /**
   * The state of the greeting.
   */
  @AutoMap()
  @IsNumber()
  state: number;
}
