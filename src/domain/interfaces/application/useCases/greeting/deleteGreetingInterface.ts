import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';

/**
 * Interface for the deleteGreeting use case.
 */
export interface deleteGreetingInterface {
  /**
   * Handles the deletion of a greeting by its ID.
   * @param id - The ID of the greeting to be deleted.
   * @returns A promise that resolves to a GreetingResponseDto.
   */
  handle(id: number): Promise<GreetingResponseDto>;
}
