import configuration, { Configuration } from "@/config/configuration";
import { DatabaseModule } from "@/database/database.module";
import { RequestLoggerMiddleware } from "@/logger/request-logger.middleware";
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PrismaModule } from "nestjs-prisma";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CourseCategoriesModule } from "./course-categories/course-categories.module";
import { CoursesModule } from "./courses/courses.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    PrismaModule.forRoot({ isGlobal: true }),
    CourseCategoriesModule,
    DatabaseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<Configuration>) => ({
        host: configService.getOrThrow("host", { infer: true }),
        port: configService.getOrThrow("port", { infer: true }),
        user: configService.getOrThrow("user", { infer: true }),
        password: configService.getOrThrow("password", { infer: true }),
        database: configService.getOrThrow("database", { infer: true }),
      }),
    }),
    CoursesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes("*");
  }
}
