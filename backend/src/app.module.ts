import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';
import { CoursesModule } from './courses/courses.module.js';
import { ModulesModule } from './modules/modules.module.js';
import { LessonsModule } from './lessons/lessons.module.js';

@Module({
  imports: [
    // Carrega as variáveis do .env (se existir) e do ambiente do processo.
    // isGlobal disponibiliza o ConfigService em todos os módulos sem reimportar.
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    CoursesModule,
    ModulesModule,
    LessonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
