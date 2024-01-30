import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { GreetingResponseDto } from '@domain/greeting/dto/greetingResponse.dto';
import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { deleteGreetingInterface } from '@domain/interfaces/application/useCases/greeting/deleteGreetingInterface';
import { GreetingRepository } from '@infrastructure/repository/greeting/greetingRepository';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';

/**
 * Represents the use case for deleting a greeting.
 */
@Injectable()
export class DeleteGreeting implements deleteGreetingInterface {
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
   * Handles the deletion of a greeting.
   * @param id - The ID of the greeting to delete.
   * @returns A promise that resolves to the deleted greeting response DTO.
   * @throws NotFoundException if the greeting with the specified ID does not exist.
   */
  async handle(id: number): Promise<GreetingResponseDto> {
    try {
      const exist = await this._greetingRepository.findOne({ where: { id } });

      if (!exist) {
        throw new NotFoundException();
      }

      await this._greetingRepository.delete(id);

      const response = this._mapper.map(exist, Greeting, GreetingResponseDto);

      return response;
    } catch (error) {}
  }
}
