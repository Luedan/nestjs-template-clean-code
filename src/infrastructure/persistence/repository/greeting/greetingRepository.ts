import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { AbstractContext } from '@domain/interfaces/infrastructure/persistence/context/abstractContext';
import { GreetingRepositoryInterface } from '@domain/interfaces/infrastructure/persistence/repository/greeting/greetingRepositoryInterface';
import {
  DeleteCriteriaType,
  FindAllCriteriaType,
  FindOneCriteriaType,
  UpdateCriteriaType,
} from '@domain/interfaces/infrastructure/persistence/repository/types';
import { HttpException, Inject, Injectable } from '@nestjs/common';

/**
 * Repository class for managing greetings.
 */
@Injectable()
export class GreetingRepository implements GreetingRepositoryInterface {
  /**
   * Initializes a new instance of the class.
   * @param _context - The context to use.
   */
  constructor(@Inject('Context') private readonly _context: AbstractContext) {}

  /**
   * Retrieves all greetings.
   * @returns A promise that resolves to an array of greetings.
   * @throws {HttpException} If an error occurs while retrieving the greetings.
   */
  async findAll(options?: FindAllCriteriaType<Greeting>): Promise<Greeting[]> {
    try {
      const response = await this._context.greeting.find(options);
      return response;
    } catch (error) {
      throw new HttpException(
        `Error encontrando todos los greeting: ${error?.message}`,
        error.status || 500,
      );
    }
  }

  /**
   * Retrieves a greeting by its ID.
   * @param id - The ID of the greeting to retrieve.
   * @returns A promise that resolves to the retrieved greeting.
   * @throws {HttpException} If an error occurs while retrieving the greeting.
   */
  async findOne(criteria: FindOneCriteriaType<Greeting>): Promise<Greeting> {
    try {
      const response = await this._context.greeting.findOne(criteria);
      return response;
    } catch (error) {
      throw new HttpException(
        `Error al encontrar un greeting: ${error?.message}`,
        error.status || 500,
      );
    }
  }

  /**
   * Creates a new greeting.
   * @param entity - The greeting entity to create.
   * @returns A promise that resolves to the created greeting.
   * @throws {HttpException} If an error occurs while creating the greeting.
   */
  async create(entity: Greeting): Promise<Greeting> {
    try {
      const response = await this._context.greeting.create(entity);
      return { ...entity, ...response.raw[0] };
    } catch (error) {
      throw new HttpException(
        `Error creando un greeting: ${error.message}`,
        error.status || 500,
      );
    }
  }

  /**
   * Updates a greeting by its ID.
   * @param id - The ID of the greeting to update.
   * @param entity - The updated greeting entity.
   * @returns A promise that resolves to the updated greeting.
   * @throws {HttpException} If an error occurs while updating the greeting.
   */
  async update(
    criteria: UpdateCriteriaType<Greeting>,
    entity: Greeting,
  ): Promise<Greeting> {
    try {
      const response = await this._context.greeting.update(criteria, entity);
      return { ...entity, ...response.raw[0], ...response.generatedMaps[0] };
    } catch (error) {
      throw new HttpException(
        `Error actualizando greeting: ${error.message}`,
        error.status || 500,
      );
    }
  }

  /**
   * Deletes a greeting by its ID.
   * @param id - The ID of the greeting to delete.
   * @returns A promise that resolves to the deleted greeting.
   * @throws {HttpException} If an error occurs while deleting the greeting.
   */
  async delete(criteria: DeleteCriteriaType<Greeting>): Promise<Greeting> {
    try {
      const response = await this._context.greeting.delete(criteria);
      return { ...response?.raw[0], ...response?.generatedMaps[0] };
    } catch (error) {
      throw new HttpException(
        `Error eliminando greeting: ${error.message}`,
        error.status || 500,
      );
    }
  }
}
