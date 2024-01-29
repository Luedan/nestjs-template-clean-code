import { Greeting } from '@domain/greeting/entity/greeting.entity';
import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { GenericRepository } from './genericRepository';
import { AbstractContext } from '@domain/interfaces/infrastructure/persistence/context/abstractContext';
import { AbstractRepository } from '@domain/interfaces/infrastructure/persistence/context/abstractRepository';

/**
 * Represents the context of the application.
 */
@Injectable()
export class Context implements AbstractContext, OnApplicationBootstrap {
  // Greeting repository
  greeting: AbstractRepository<Greeting>;

  /**
   * Initializes a new instance of the Context class.
   * @param _dataSource - The data source for the context.
   */
  constructor(
    @Inject('PgDataSource') private readonly _pgDataSource: DataSource,
  ) {}

  /**
   * Lifecycle hook that is called after the application has fully started.
   */
  onApplicationBootstrap() {
    this.greeting = new GenericRepository(Greeting, this._pgDataSource);
  }
}
