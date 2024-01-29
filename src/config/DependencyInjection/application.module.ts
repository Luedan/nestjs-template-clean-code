import { Global, Module } from '@nestjs/common';
import { MapperProfiles } from '@application/mapper';
import { ApplicationLayerDependencies } from '@application/useCases/dependencies';
import { InfrastructureDependencyInjection } from './infrastructure.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

/**
 * Module for dependency injection in the application layer.
 * DON'T MODIFY THIS FILE IF IT'S NOT NECESSARY
 */
@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    InfrastructureDependencyInjection,
  ],
  providers: [...ApplicationLayerDependencies, ...MapperProfiles],
  exports: [...ApplicationLayerDependencies],
})
@Global()
export class ApplicationDependencyInjection {}
