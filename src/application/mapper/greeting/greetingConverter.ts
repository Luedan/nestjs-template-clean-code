import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { ConvertInterface } from '@domain/interfaces/application/mapper/convertInterface';
import { Injectable } from '@nestjs/common';

/**
 * Class responsible for converting between the Greeting data model and the GreetingResponseDto DTO.
 */
@Injectable()
export class GreetingConvert
  implements ConvertInterface<Greeting, GreetingResponseDto>
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
}
