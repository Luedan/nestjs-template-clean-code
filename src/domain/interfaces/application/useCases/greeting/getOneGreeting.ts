import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';

/**
 * Interface for getting a single greeting.
 */
export interface GetOneGreetingInterface {
  /**
   * Handles the request to get a single greeting.
   * @param id - The ID of the greeting to get.
   * @returns A promise that resolves to a GreetingResponseDto.
   */
  handle(id: number): Promise<GreetingResponseDto>;
}
