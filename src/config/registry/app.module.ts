import { Module } from '@nestjs/common';
import { PresentationDependencyInjection } from './presentation.module';

@Module({
  imports: [PresentationDependencyInjection],
})
export class AppModule {}
