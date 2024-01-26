import { Mapper, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { Injectable } from '@nestjs/common';

/**
 * Profile for mapping Greeting entities and DTOs using AutoMapper.
 */
@Injectable()
export class GreetingProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Overrides the profile property to define the mapping configurations.
   * @param mapper - The AutoMapper instance.
   */
  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, Greeting, GreetingResponseDto);
      createMap(mapper, GreetingResponseDto, Greeting);
      createMap(mapper, GreetingRequestDto, Greeting);
    };
  }
}
