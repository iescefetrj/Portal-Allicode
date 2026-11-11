import { Controller } from '@nestjs/common';
import { ModulesService } from './modules.service.js';

@Controller('modules')
export class ModulesController {
  constructor(private readonly modulesService: ModulesService) {}
}
