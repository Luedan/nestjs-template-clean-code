import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { GetOneGreetingInterface } from '@domain/interfaces/application/useCases/greeting/getOneGreeting';
import { GreetingRepository } from '@infrastructure/repository/greeting/greetingRepository';
import { Inject, Injectable } from '@nestjs/common';

/**
 * Represents the use case for retrieving a single greeting.
 */
@Injectable()
export class GetOneGreeting implements GetOneGreetingInterface {
  /**
   * Initializes a new instance of the class.
   * @param _mapper - The object mapper.
   * @param _greetingRepository - The greeting repository.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    @Inject('GreetingRepository')
    private readonly _greetingRepository: GreetingRepository,
  ) {}

  /**
   * Handles the retrieval of a single greeting.
   * @param id - The ID of the greeting to retrieve.
   * @returns A promise that resolves to the retrieved greeting.
   */
  async handle(id: number): Promise<GreetingResponseDto> {
    try {
      const data = await this._greetingRepository.findOne({ where: { id } });

      const greeting = await this._mapper.map(
        data,
        Greeting,
        GreetingResponseDto,
      );

      return greeting;
    } catch (error) {}
  }
}
