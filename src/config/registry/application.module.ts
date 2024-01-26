import { ApplicationLayerDependencies } from '@application/useCases';
import { Module } from '@nestjs/common';
import { MapperProfiles } from '@application/mapper';
import { PackageDependencies } from '@/package/index ';
import { MapperInjection } from '@application/mapper/mapper';

/**
 * Module for dependency injection in the application layer.
 * DON'T MODIFY THIS FILE IF IT'S NOT NECESSARY
 */
@Module({
  imports: [MapperInjection],
  providers: [
    ...ApplicationLayerDependencies,
    ...MapperProfiles,
    ...PackageDependencies,
  ],
  exports: [...ApplicationLayerDependencies, ...PackageDependencies],
})
export class ApplicationDependencyInjection {}
