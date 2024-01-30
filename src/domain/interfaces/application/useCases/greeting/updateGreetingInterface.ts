import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';

/**
 * Interface for updating a greeting.
 */
export interface UpdateGreetingInterface {
  /**
   * Handles the update of a greeting.
   * @param id - The ID of the greeting to update.
   * @returns A promise that resolves to a GreetingResponseDto.
   */
  handle(
    id: number,
    greeting: GreetingRequestDto,
  ): Promise<GreetingResponseDto>;
}
