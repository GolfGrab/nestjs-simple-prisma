import { loggerOption } from "@/logger/loggerOption";
import { generateSwaggerDoc } from "@/swagger";
import fastifyMultipart from "@fastify/multipart";
import { ValidationPipe } from "@nestjs/common";
import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { WinstonModule } from "nest-winston";
import { PrismaClientExceptionFilter } from "nestjs-prisma";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      logger: WinstonModule.createLogger(loggerOption),
    },
  );

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.register(fastifyMultipart);
  generateSwaggerDoc(app);

  await app.listen(3000, "0.0.0.0");
}

void bootstrap();
