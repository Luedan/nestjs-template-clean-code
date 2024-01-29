import { Global, Module } from '@nestjs/common';
import { MapperProfiles } from '@application/mapper';
import { MapperInjection } from '@application/mapper/mapper';
import { ApplicationLayerDependencies } from '@application/useCases/dependencies';
import { InfrastructureDependencyInjection } from './infrastructure.module';

/**
 * Module for dependency injection in the application layer.
 * DON'T MODIFY THIS FILE IF IT'S NOT NECESSARY
 */
@Module({
  imports: [MapperInjection, InfrastructureDependencyInjection],
  providers: [...ApplicationLayerDependencies, ...MapperProfiles],
  exports: [...ApplicationLayerDependencies],
})
@Global()
export class ApplicationDependencyInjection {}
