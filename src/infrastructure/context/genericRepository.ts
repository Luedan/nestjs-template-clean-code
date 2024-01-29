import { AbstractRepository } from '@domain/interfaces/infrastructure/persistence/context/abstractRepository';
import {
  FindManyOptions,
  InsertResult,
  UpdateResult,
  ObjectLiteral,
  DataSource,
  Repository,
  FindOneOptions,
  FindOptionsWhere,
} from 'typeorm';

export class GenericRepository<E extends ObjectLiteral>
  implements AbstractRepository<E>
{
  /**
   * @private Repository
   */
  private _repository: Repository<E>;

  /**
   * @constructor class constructor
   */
  constructor(
    private readonly entity: new () => E,
    private readonly instance: DataSource,
  ) {
    this._repository = this.instance.getRepository(this.entity);
  }

  /**
   * @method find Get all document objects.
   */
  public find(options?: FindManyOptions<E>): Promise<E[]> {
    return this._repository.find(options);
  }

  /**
   * @method findOne Get one document object.
   */
  public findOne(options: FindOneOptions<E>): Promise<E | null> {
    return this._repository.findOne(options);
  }

  /**
   * @method create insert a document object.
   */
  public create(entity: E): Promise<InsertResult> {
    return this._repository.insert({
      ...entity,
    });
  }

  /**
   * @method update update a document object.
   */
  public update(criteria: any, partialEntity: E): Promise<UpdateResult> {
    return this._repository.update(criteria, {
      ...partialEntity,
    });
  }

  /**
   * @method delete delete a document object.
   */
  public delete(
    criteria:
      | string
      | number
      | string[]
      | Date
      | number[]
      | Date[]
      | FindOptionsWhere<E>,
  ): Promise<UpdateResult> {
    return this._repository.softDelete(criteria);
  }
}
