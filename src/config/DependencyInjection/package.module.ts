import { PackageDependencies } from '@/package/dependencies';
import { Global, Module } from '@nestjs/common';

/**
 * Module for managing package dependencies.
 */
@Module({
  providers: [...PackageDependencies],
  exports: [...PackageDependencies],
})
@Global()
export class PackageDependencyInjection {}
