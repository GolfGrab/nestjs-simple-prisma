import { RequestLoggerMiddleware } from "@/logger/request-logger.middleware";
import { MiddlewareConsumer, Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CourseCategoriesModule } from './course-categories/course-categories.module';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), CourseCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes("*");
  }
}
