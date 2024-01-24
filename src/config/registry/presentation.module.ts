import { Module } from '@nestjs/common';
import { controllers } from '@/presentation/controllers/index';
import { ApplicationDependencyInjection } from './application.module';

@Module({
  imports: [ApplicationDependencyInjection],
  controllers,
})
export class PresentationDependencyInjection {}
