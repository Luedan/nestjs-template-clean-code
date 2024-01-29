import { AutoMap } from '@automapper/classes';
import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    type: Number,
    description: 'The identifier of the greeting.',
  })
  id: number;

  /**
   * The greeting message.
   */
  @AutoMap()
  @IsString()
  @ApiProperty({
    type: String,
    description: 'The greeting message.',
  })
  greeting: string;

  /**
   * The state of the greeting.
   */
  @AutoMap()
  @IsNumber()
  @ApiProperty({
    type: Number,
    description: 'The state of the greeting.',
  })
  state: number;
}
