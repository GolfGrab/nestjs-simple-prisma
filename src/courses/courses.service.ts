import { Database } from "@/database/database";
import { Injectable } from "@nestjs/common";
import { CreateCourseDto } from "./dto/create-course.dto";
import { UpdateCourseDto } from "./dto/update-course.dto";

@Injectable()
export class CoursesService {
  constructor(private readonly database: Database) {}

  create(createCourseDto: CreateCourseDto) {
    const result = this.database
      .insertInto("Course")
      .values({
        ...createCourseDto,
        CR_CreateTime: new Date(),
        CR_CreateUser: "user",
        CR_ModifyTime: new Date(),
        CR_ModifyUser: "user",
        CR_CourseDataCreateUser: "user",
        CR_CourseDataModifyUser: "user",
        CR_CourseDataCreateDate: new Date(),
        CR_CourseDataModifyDate: new Date(),
      })
      .execute();
    return result;
  }

  findAll() {
    return `This action returns all courses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
