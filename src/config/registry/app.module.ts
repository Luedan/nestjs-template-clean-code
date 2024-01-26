import { Module } from '@nestjs/common';
import { PresentationDependencyInjection } from './presentation.module';

/**
 * Represents the main module of the application.
 * DON'T MODIFY THIS FILE IF IT'S NOT NECESSARY
 */
@Module({
  imports: [PresentationDependencyInjection],
})
export class AppModule {}
