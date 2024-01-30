import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { GetAllGreetingInterface } from '@domain/interfaces/application/useCases/greeting/getAllGreetingnterface';
import { GreetingRepositoryInterface } from '@domain/interfaces/infrastructure/persistence/repository/greeting/greetingRepositoryInterface';
import { Inject, Injectable } from '@nestjs/common';

/**
 * Represents a use case for getting all greetings.
 */
@Injectable()
export class GetAllGreetings implements GetAllGreetingInterface {
  /**
   * Initializes a new instance of the class.
   * @param _mapper - The object mapper.
   * @param _greetingRepository - The greeting repository.
   */
  constructor(
    @InjectMapper() private readonly _mapper: Mapper,
    @Inject('GreetingRepository')
    private readonly _greetingRepository: GreetingRepositoryInterface,
  ) {}

  /**
   * Handles the request to get all greetings.
   * @returns A promise that resolves to an array of GreetingResponseDto objects representing the greetings.
   */
  async handle(): Promise<GreetingResponseDto[]> {
    try {
      const data = await this._greetingRepository.findAll();

      const greetings = this._mapper.mapArray(
        data,
        Greeting,
        GreetingResponseDto,
      );

      return greetings;
    } catch (error) {}
  }
}
