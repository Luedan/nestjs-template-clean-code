import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppInjection } from '@/config/DependencyInjection/app.module';

/**
 * Initializes the application and starts the server.
 * @returns {Promise<void>}
 */
async function bootstrap() {
  const app = await NestFactory.create(AppInjection);

  const config = new DocumentBuilder()
    .setTitle('Template example')
    .setDescription('The Template API description')
    .setVersion('1.0')
    .build();

  app.setGlobalPrefix('api/');

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}

bootstrap();
