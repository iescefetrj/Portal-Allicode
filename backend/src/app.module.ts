import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [
    // Carrega as variáveis do .env (se existir) e do ambiente do processo.
    // isGlobal disponibiliza o ConfigService em todos os módulos sem reimportar.
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
