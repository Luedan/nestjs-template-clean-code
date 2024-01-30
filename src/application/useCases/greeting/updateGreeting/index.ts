import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { GreetingRequestDto } from '@domain/greeting/dto/greetingRequest.dto';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { UpdateGreetingInterface } from '@domain/interfaces/application/useCases/greeting/updateGreetingInterface';
import { GreetingRepository } from '@infrastructure/repository/greeting/greetingRepository';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';

/**
 * Represents the use case for updating a greeting.
 */
@Injectable()
export class UpdateGreeting implements UpdateGreetingInterface {
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
   * Handles the update greeting request.
   * @param id - The ID of the greeting to update.
   * @param greeting - The updated greeting data.
   * @returns A promise that resolves to the updated greeting response.
   * @throws NotFoundException if the greeting with the specified ID does not exist.
   */
  async handle(
    id: number,
    greeting: GreetingRequestDto,
  ): Promise<GreetingResponseDto> {
    try {
      const greetingPayload = this._mapper.map(
        greeting,
        GreetingRequestDto,
        Greeting,
      );

      const exist = await this._greetingRepository.findOne({ where: { id } });

      if (!exist) {
        throw new NotFoundException();
      }

      await this._greetingRepository.update(id, greetingPayload);

      const response = this._mapper.map(
        { ...exist, ...greeting },
        Greeting,
        GreetingResponseDto,
      );

      return response;
    } catch (error) {}
  }
}
