import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { CreateGreetingInterface } from '@domain/interfaces/application/useCases/greeting/createGreetingInterface';
import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';

/**
 * @export CreateGreeting
 * @class CreateGreeting
 * @implements {CreateGreetingInterface}
 */
@Injectable()
export class CreateGreeting implements CreateGreetingInterface {
  /**
   * Creates an instance of CreateGreeting.
   * @param {Mapper} _mapper
   * @memberof CreateGreeting
   */
  constructor(@InjectMapper() private _mapper: Mapper) {}

  /**
   * @return {string}
   * @memberof CreateGreeting
   * @method handle
   * @description This method returns a string.
   */
  async handle(request: GreetingRequestDto): Promise<GreetingResponseDto> {
    try {
      const data = this._mapper.map(request, GreetingRequestDto, Greeting);

      const response = this._mapper.map(data, Greeting, GreetingResponseDto);

      return response;
    } catch (error) {}
  }
}
