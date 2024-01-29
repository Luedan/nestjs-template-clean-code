import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Inject, Injectable } from '@nestjs/common';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { GetHelloInterface } from '@domain/interfaces/application/useCases/greeting/getHelloInterface';
import { AbstractMapper } from '@domain/interfaces/application/mapper/abstractMapper';

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
  constructor(
    @InjectMapper() private _mapper: Mapper,
    @Inject('MapperContext') private readonly _mapperContext: AbstractMapper,
  ) {}

  /**
   * @return {string}
   * @memberof GetHello
   * @method handle
   * @description This method returns a string.
   */
  async handle(): Promise<GreetingResponseDto> {
    try {
      const data = {
        greeting: 'Hello World!',
        state: 1,
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
      };
      // test con mapper normal
      const response = this._mapper.map(data, Greeting, GreetingResponseDto);
      console.log(this._mapperContext.greetingResponse.toDto(data));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
