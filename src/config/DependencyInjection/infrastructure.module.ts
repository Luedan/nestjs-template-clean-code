import { InfrastructureLayerDependencies } from '@infrastructure/dependencies';
import { Module } from '@nestjs/common';

/**
 * Module for infrastructure dependency injection.
 * DON'T MODIFY THIS FILE IF IT'S NOT NECESSARY
 */
@Module({
  imports: [],
  providers: [...InfrastructureLayerDependencies],
  exports: [...InfrastructureLayerDependencies],
})
export class InfrastructureDependencyInjection {}
