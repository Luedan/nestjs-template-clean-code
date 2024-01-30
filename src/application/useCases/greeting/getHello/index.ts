import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { GetHelloInterface } from '@domain/interfaces/application/useCases/greeting/getHelloInterface';

/**
 * @export GetHello
 * @class GetHello
 * @implements {GetHelloInterface}
 */
@Injectable()
export class GetHello implements GetHelloInterface {
  /**
   * Creates an instance of GetHello.
   * @param {Mapper} _mapper
   * @memberof GetHello
   */
  constructor(@InjectMapper() private _mapper: Mapper) {}

  /**
   * @return {string}
   * @memberof GetHello
   * @method handle
   * @description This method returns a string.
   */
  async handle(): Promise<GreetingResponseDto> {
    try {
      const data: Greeting = {
        greeting: 'Hello World!',
        state: 1,
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
      };
      // test con mapper normal
      const response = this._mapper.map(data, Greeting, GreetingResponseDto);

      return response;
    } catch (error) {
      throw error;
    }
  }
}
