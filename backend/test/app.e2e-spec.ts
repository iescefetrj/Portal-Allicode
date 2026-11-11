import { Test, TestingModule } from '@nestjs/testing';
import { Body, Controller, INestApplication, Post } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';
import request from 'supertest';
import { App } from 'supertest/types.js';
import { AppModule } from './../src/app.module.js';
import { setupApp } from './../src/setup-app.js';

class ValidationDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  count: number;
}

@Controller('validation-test')
class ValidationController {
  @Post()
  // Vitest does not emit TypeScript's decorator metadata.
  @Reflect.metadata('design:paramtypes', [ValidationDto])
  create(@Body() dto: ValidationDto) {
    return { count: dto.count, isDto: dto instanceof ValidationDto };
  }
}

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [ValidationController],
    }).compile();

    app = moduleFixture.createNestApplication();
    setupApp(app);
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  afterEach(async () => {
    await app.close();
  });

  it('/docs (GET)', async () => {
    await request(app.getHttpServer()).get('/docs/').expect(200);
  });

  it('transforms a valid body into a DTO with explicit number conversion', async () => {
    await request(app.getHttpServer())
      .post('/validation-test')
      .send({ count: '2' })
      .expect(201)
      .expect({ count: 2, isDto: true });
  });

  it.each([{}, { count: 'invalid' }, { count: 0 }, { count: 1, extra: true }])(
    'rejects invalid or undeclared fields: %j',
    async (body) => {
      await request(app.getHttpServer())
        .post('/validation-test')
        .send(body)
        .expect(400);
    },
  );

  it('/docs-json (GET)', async () => {
    const response = await request(app.getHttpServer())
      .get('/docs-json')
      .expect(200);

    expect(response.body.info.title).toBe('Portal Allicode API');
    expect(response.body.paths['/'].get.responses['200']).toBeDefined();
  });
});
