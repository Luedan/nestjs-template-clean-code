import { Module } from '@nestjs/common';
import { controllers } from '@/presentation/controllers/index';
import { ApplicationDependencyInjection } from './application.module';

/**
 * Module for dependency injection in the presentation layer.
 * DON'T MODIFY THIS FILE IF IT'S NOT NECESSARY
 */
@Module({
  imports: [ApplicationDependencyInjection],
  controllers,
})
export class PresentationDependencyInjection {}
