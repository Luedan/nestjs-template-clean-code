import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { MultipleConvertInterface } from '@domain/interfaces/application/mapper/multipleConvertInterface';
import { Injectable } from '@nestjs/common';

/**
 * Converts between Greeting and GreetingResponseDto objects.
 */
@Injectable()
export class GreetingMultipleConverter
  implements MultipleConvertInterface<Greeting, GreetingResponseDto>
{
  /**
   * @constructor
   * @param _mapper
   */
  constructor(@InjectMapper() private readonly _mapper: Mapper) {}

  /**
   * Converts a GreetingResponseDto object to a Greeting object.
   * @param data The GreetingResponseDto object to convert.
   * @returns The converted Greeting object.
   */
  fromDto(data: GreetingResponseDto): Greeting {
    return this._mapper.map(data, GreetingResponseDto, Greeting);
  }

  /**
   * Converts a Greeting object to a GreetingResponseDto object.
   * @param data The Greeting object to convert.
   * @returns The converted GreetingResponseDto object.
   */
  fromEntity(data: Greeting): GreetingResponseDto {
    return this._mapper.map(data, Greeting, GreetingResponseDto);
  }

  /**
   * Converts an array of GreetingResponseDto objects to an array of Greeting objects.
   * @param data The array of GreetingResponseDto objects to convert.
   * @returns The converted array of Greeting objects.
   */
  fromDtoArray(data: GreetingResponseDto[]): Greeting[] {
    return this._mapper.mapArray(data, GreetingResponseDto, Greeting);
  }

  /**
   * Converts an array of Greeting objects to an array of GreetingResponseDto objects.
   * @param data The array of Greeting objects to convert.
   * @returns The converted array of GreetingResponseDto objects.
   */
  fromEntityArray(data: Greeting[]): GreetingResponseDto[] {
    return this._mapper.mapArray(data, Greeting, GreetingResponseDto);
  }
}
