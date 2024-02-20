import { Database } from "@/database/database";
import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CreateCourseCategoryDto } from "./dto/create-course-category.dto";
import { UpdateCourseCategoryDto } from "./dto/update-course-category.dto";

@Injectable()
export class CourseCategoriesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly database: Database,
  ) {}

  private readonly logger = new Logger("CourseCategoriesService");

  create(createCourseCategoryDto: CreateCourseCategoryDto) {
    this.logger.debug(
      "Creating a new course category",
      createCourseCategoryDto,
    );
    return this.prisma.courseCategory.create({
      data: {
        ...createCourseCategoryDto,
        CC_CreateTime: new Date(),
        CC_CreateUser: "admin",
        CC_ModifyTime: new Date(),
        CC_ModifyUser: "admin",
      },
    });
    // const result = await this.database
    //   .insertInto("CourseCategory")
    //   .values({
    //     ...createCourseCategoryDto,
    //     CC_CreateTime: new Date(),
    //     CC_CreateUser: "admin",
    //     CC_ModifyTime: new Date(),
    //     CC_ModifyUser: "admin",
    //   })
    //   .executeTakeFirstOrThrow();
    // console.log("result", result);
    // return result.insertId;
  }

  findAll() {
    return this.prisma.courseCategory.findMany();
    // return this.database
    //   .selectFrom("CourseCategory")
    //   .selectAll("CourseCategory")
    //   .execute();
  }

  findOne(id: number) {
    return `This action returns a #${id} courseCategory`;
  }

  update(id: number, updateCourseCategoryDto: UpdateCourseCategoryDto) {
    return `This action updates a #${id} courseCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseCategory`;
  }
}
