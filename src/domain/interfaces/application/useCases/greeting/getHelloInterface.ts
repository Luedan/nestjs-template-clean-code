import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';

/**
 * @export GetHelloInterface
 * @interface GetHelloInterface
 */
export interface GetHelloInterface {
  /**
   * @return {string}
   * @memberof GetHelloInterface
   * @method handle
   * @description This method returns a string.
   */
  handle(): Promise<GreetingResponseDto>;
}
