import { Entities } from '@domain/entities';
import { Global, Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

/**
 * Represents the configuration for the database.
 */
@Module({
  providers: [
    {
      provide: 'PgDataSource',
      useFactory: async () => {
        const dataSource = new DataSource({
          type: 'postgres',
          host: process.env.DB_HOST || 'localhost',
          port: Number(process.env.DB_PORT),
          password: process.env.DB_PASSWORD,
          username: process.env.DB_USER,
          entities: [...Entities],
          database: process.env.DB_NAME,
          synchronize: true,
          logging: true,
        });

        return dataSource.initialize();
      },
    },
  ],
  exports: ['PgDataSource'],
})
@Global()
export class DatabaseDependencyInjection {}
