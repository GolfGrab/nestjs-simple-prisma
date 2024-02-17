import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const generateSwaggerDoc = (app: INestApplication<any>) => {
  const config = new DocumentBuilder()
    .setTitle("NestJS Prisma Example")
    .setDescription("The NestJS Prisma Example API description")
    .setVersion("0.0.1")
    .build();

  const doc = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, doc);
};
