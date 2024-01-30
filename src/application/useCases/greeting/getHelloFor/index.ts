import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { GetHelloForInterface } from '@domain/interfaces/application/useCases/greeting/getHelloForInterface';

/**
 * @export GetHelloFor
 * @class GetHelloFor
 * @implements {GetHelloForInterface}
 */
@Injectable()
export class GetHelloFor implements GetHelloForInterface {
  /**
   * Creates an instance of GetHelloFor.
   * @param {Mapper} _mapper
   * @memberof GetHelloFor
   */
  constructor(@InjectMapper() private _mapper: Mapper) {}

  /**
   * @return {string}
   * @memberof GetHelloFor
   * @method handle
   * @description This method returns a string.
   */
  async handle(name: string): Promise<GreetingResponseDto> {
    try {
      const data = { greeting: `Hello World with ${name}!`, id: 1, state: 1 };

      const response = this._mapper.map(data, Greeting, GreetingResponseDto);

      return response;
    } catch (error) {
      throw error;
    }
  }
}
