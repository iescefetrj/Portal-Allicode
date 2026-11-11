import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Retorna a mensagem inicial da API' })
  @ApiOkResponse({ description: 'Mensagem inicial', type: String })
  getHello(): string {
    return this.appService.getHello();
  }
}
