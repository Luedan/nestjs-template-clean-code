import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { AbstractConverter } from '@domain/interfaces/application/mapper/abstractConverter';
import { AbstractMapper } from '@domain/interfaces/application/mapper/abstractMapper';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { GenericConverter } from './genericConverter';

/**
 * Represents a Converter class that implements the AbstractMapper and OnApplicationBootstrap interfaces.
 */
@Injectable()
export class MapperContext implements AbstractMapper, OnApplicationBootstrap {
  /**
   * Converts between Greeting Entity and Greeting Response Dto.
   */
  greetingResponse: AbstractConverter<Greeting, GreetingResponseDto>;

  /**
   * Converts between Greeting Entity and Greeting Request Dto.
   */
  greetingRequest: AbstractConverter<Greeting, GreetingRequestDto>;

  /**
   * Creates an instance of Converter.
   * @param _mapper - The mapper instance.
   */
  constructor(@InjectMapper() public readonly _mapper: Mapper) {}

  /**
   * Lifecycle hook method that is called when the application has fully started.
   */
  onApplicationBootstrap() {
    this.greetingRequest = new GenericConverter(
      this._mapper,
      Greeting,
      GreetingRequestDto,
    );

    this.greetingResponse = new GenericConverter(
      this._mapper,
      Greeting,
      GreetingResponseDto,
    );
  }
}
