import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { ConvertArrayInterface } from '@domain/interfaces/application/mapper/convertArrayInterface';

/**
 * Class that implements the ConvertArrayInterface to convert between Greeting objects and GreetingResponseDto objects.
 */
@Injectable()
export class GreetingConvertArray
  implements ConvertArrayInterface<Greeting, GreetingResponseDto>
{
  /**
   * @constructor
   * @param _mapper
   */
  constructor(@InjectMapper() private readonly _mapper: Mapper) {}

  /**
   * Converts an array of GreetingResponseDto objects to an array of Greeting objects.
   * @param data The array of GreetingResponseDto objects to convert.
   * @returns The converted array of Greeting objects.
   */
  fromDto(data: GreetingResponseDto[]): Greeting[] {
    return this._mapper.mapArray(data, GreetingResponseDto, Greeting);
  }

  /**
   * Converts an array of Greeting objects to an array of GreetingResponseDto objects.
   * @param data The array of Greeting objects to convert.
   * @returns The converted array of GreetingResponseDto objects.
   */
  fromEntity(data: Greeting[]): GreetingResponseDto[] {
    return this._mapper.mapArray(data, Greeting, GreetingResponseDto);
  }
}
