import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { AbstractContext } from '@domain/interfaces/infrastructure/persistence/context/abstractContext';
import { GreetingRepositoryInterface } from '@domain/interfaces/infrastructure/persistence/repository/greeting/greetingRepositoryInterface';
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
  async findAll(): Promise<Greeting[]> {
    try {
      const response = await this._context.greeting.find();
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
  async findOne(id: number): Promise<Greeting> {
    try {
      const response = await this._context.greeting.findOne({ where: { id } });
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
      return { ...response?.generatedMaps[0], ...entity };
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
  async update(id: number, entity: Greeting): Promise<Greeting> {
    try {
      const exist = await this.findOne(id);

      if (!exist) {
        throw new HttpException(
          `No se encontró un greeting con el ID ${id}`,
          404,
        );
      }

      await this._context.greeting.update(id, entity);
      return { ...exist, ...entity };
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
  async delete(id: number): Promise<Greeting> {
    try {
      const entity = await this._context.greeting.findOne({ where: { id } });

      if (!entity) {
        throw new HttpException(
          `No se encontró un greeting con el ID ${id}`,
          404,
        );
      }

      await this._context.greeting.delete(id);
      return entity;
    } catch (error) {
      throw new HttpException(
        `Error eliminando greeting: ${error.message}`,
        error.status || 500,
      );
    }
  }
}
