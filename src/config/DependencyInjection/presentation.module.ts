import { Module } from '@nestjs/common';
import { ApplicationDependencyInjection } from './application.module';
import { Controllers } from '../../presentation/controllers/controllers.module';

/**
 * Module for dependency injection in the presentation layer.
 * DON'T MODIFY THIS FILE IF IT'S NOT NECESSARY
 */
@Module({
  imports: [Controllers, ApplicationDependencyInjection],
})
export class PresentationDependencyInjection {}
