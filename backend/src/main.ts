import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { setupApp } from './setup-app.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupApp(app);
  const configService = app.get(ConfigService);
  await app.listen(configService.get<number>('PORT', 3000));
}
await bootstrap();
