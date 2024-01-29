import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { AbstractRepository } from './abstractRepository';

/**
 * Represents an abstract context.
 */
export abstract class AbstractContext {
  /**
   * The greeting repository.
   * @abstract greeting
   */
  abstract greeting: AbstractRepository<Greeting>;
}
