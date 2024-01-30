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
  ObjectId,
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
  public async find(options?: FindManyOptions<E>): Promise<E[]> {
    const response = await this._repository.find(options);

    return response;
  }

  /**
   * @method findOne Get one document object.
   */
  public async findOne(options: FindOneOptions<E>): Promise<E | null> {
    const response = await this._repository.findOne(options);

    return response;
  }

  /**
   * @method create insert a document object.
   */
  public async create(entity: E): Promise<InsertResult> {
    const response = await this._repository.insert({
      ...entity,
    });

    return response;
  }

  /**
   * @method update update a document object.
   */
  public async update(
    criteria:
      | string
      | number
      | Date
      | string[]
      | number[]
      | Date[]
      | FindOptionsWhere<E>
      | ObjectId
      | ObjectId[],
    partialEntity: E,
  ): Promise<UpdateResult> {
    const response = await this._repository.update(criteria, {
      ...partialEntity,
    });
    return response;
  }

  /**
   * @method delete delete a document object.
   */
  public async delete(
    criteria:
      | string
      | number
      | Date
      | string[]
      | number[]
      | Date[]
      | FindOptionsWhere<E>
      | ObjectId
      | ObjectId[],
  ): Promise<UpdateResult> {
    const response = await this._repository.softDelete(criteria);

    return response;
  }
}
