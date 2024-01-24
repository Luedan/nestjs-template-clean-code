import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';

/**
 * Interface for creating a greeting.
 */
export interface CreateGreetingInterface {
  /**
   * Handles the creation of a greeting.
   * @param request The greeting request data.
   * @returns {Promise<GreetingResponseDto>} A promise that resolves to the greeting response data.
   */
  handle(request: GreetingRequestDto): Promise<GreetingResponseDto>;
}
