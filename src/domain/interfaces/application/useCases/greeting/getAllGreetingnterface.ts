import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';

/**
 * Interface for getting all greetings.
 */
export interface GetAllGreetingInterface {
  /**
   * Handles the request to get all greetings.
   * @returns A promise that resolves to an array of GreetingResponseDto.
   */
  handle(): Promise<GreetingResponseDto[]>;
}
