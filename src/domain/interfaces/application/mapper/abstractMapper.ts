import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { AbstractConverter } from './abstractConverter';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';

/**
 * Represents an abstract mapper class.
 */
export abstract class AbstractMapper {
  /**
   * Converts between Greeting Entity and Greeting Response Dto.
   */
  abstract greetingResponse: AbstractConverter<Greeting, GreetingResponseDto>;

  /**
   * Converts between Greeting Entity and Greeting Request Dto.
   */
  abstract greetingRequest: AbstractConverter<Greeting, GreetingRequestDto>;
}
