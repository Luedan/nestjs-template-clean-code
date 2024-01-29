import {
  FindManyOptions,
  InsertResult,
  UpdateResult,
  FindOneOptions,
  FindOptionsWhere,
  ObjectLiteral,
} from 'typeorm';

/**
 * Represents an abstract repository for data persistence.
 * @template E - The entity type.
 */
export abstract class AbstractRepository<E extends ObjectLiteral> {
  /**
   * Finds multiple entities based on the provided options.
   * @param options - The find options.
   * @returns A promise that resolves to an array of entities.
   */
  abstract find(options?: FindManyOptions<E>): Promise<E[]>;

  /**
   * Finds a single entity based on the provided options.
   * @param options - The find options.
   * @returns A promise that resolves to the found entity or null if not found.
   */
  abstract findOne(options: FindOneOptions<E>): Promise<E | null>;

  /**
   * Creates a new entity.
   * @param entity - The entity to create.
   * @returns A promise that resolves to the insert result.
   */
  abstract create(entity: E): Promise<InsertResult>;

  /**
   * Updates entities based on the provided criteria and partial entity.
   * @param criteria - The criteria to match entities.
   * @param partialEntity - The partial entity with updated values.
   * @returns A promise that resolves to the update result.
   */
  abstract update(
    criteria:
      | string
      | number
      | string[]
      | Date
      | number[]
      | Date[]
      | FindOptionsWhere<E>,
    partialEntity: E,
  ): Promise<UpdateResult>;

  /**
   * Deletes entities based on the provided criteria.
   * @param criteria - The criteria to match entities.
   * @returns A promise that resolves to the update result.
   */
  abstract delete(
    criteria:
      | string
      | number
      | string[]
      | Date
      | number[]
      | Date[]
      | FindOptionsWhere<E>,
  ): Promise<UpdateResult>;
}
