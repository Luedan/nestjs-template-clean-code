import { ApplicationProviders } from '@application/useCases';
import { Module } from '@nestjs/common';
import { InfrastructureDependencyInjection } from './infrastructure.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { MapperProfiles } from '@application/mapper';
import { PackageDependencies } from '@/package/index ';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    InfrastructureDependencyInjection,
  ],
  providers: [
    ...ApplicationProviders,
    ...MapperProfiles,
    ...PackageDependencies,
  ],
  exports: [...ApplicationProviders, ...PackageDependencies],
})
export class ApplicationDependencyInjection {}
