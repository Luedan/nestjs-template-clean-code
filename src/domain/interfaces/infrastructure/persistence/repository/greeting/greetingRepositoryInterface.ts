import { Greeting } from '@domain/greeting/entity/greeting.entity';
import {
  DeleteCriteriaType,
  FindAllCriteriaType,
  FindOneCriteriaType,
  UpdateCriteriaType,
} from '../types';

/**
 * Represents the interface for a greeting repository.
 * @template Greeting The type of entity.
 */
export interface GreetingRepositoryInterface {
  /**
   * Retrieves all entities.
   * @returns A promise that resolves to an array of entities.
   */
  findAll(options?: FindAllCriteriaType<Greeting>): Promise<Greeting[]>;

  /**
   * Retrieves a single entity by its ID.
   * @param id - The ID of the entity.
   * @returns A promise that resolves to the found entity.
   */
  findOne(criteria: FindOneCriteriaType<Greeting>): Promise<Greeting>;

  /**
   * Creates a new entity.
   * @param entity - The entity to create.
   * @returns the created entity.
   */
  create(entity: Greeting): Promise<Greeting>;

  /**
   * Updates an existing entity.
   * @param id - The ID of the entity to update.
   * @param entity - The updated entity.
   * @returns A promise that resolves to the updated entity.
   */
  update(
    criteria: UpdateCriteriaType<Greeting>,
    entity: Greeting,
  ): Promise<Greeting>;

  /**
   * Deletes an entity by its ID.
   * @param id - The ID of the entity to delete.
   * @returns A promise that resolves to the deleted entity.
   */
  delete(criteria: DeleteCriteriaType<Greeting>): Promise<Greeting>;
}
