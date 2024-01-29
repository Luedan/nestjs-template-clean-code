import { Module } from '@nestjs/common';
import { PresentationDependencyInjection } from './presentation.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseDependencyInjection } from '../db';
import { PackageDependencyInjection } from './package.module';

/**
 * Represents the main module of the application.
 * DON'T MODIFY THIS FILE IF IT'S NOT NECESSARY
 */
@Module({
  imports: [
    PresentationDependencyInjection,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseDependencyInjection,
    PackageDependencyInjection,
  ],
})
export class AppInjection {}
