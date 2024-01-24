import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';

/**
 * @export GetHelloForInterface
 * @interface GetHelloForInterface
 */
export interface GetHelloForInterface {
  /**
   * @return {string}
   * @memberof GetHelloForInterface
   * @method handle
   * @description This method returns a string.
   */
  handle(name: string): Promise<GreetingResponseDto>;
}
