import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CreateCourseCategoryDto } from "./dto/create-course-category.dto";
import { UpdateCourseCategoryDto } from "./dto/update-course-category.dto";

@Injectable()
export class CourseCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCourseCategoryDto: CreateCourseCategoryDto) {
    return this.prisma.courseCategory.create({
      data: createCourseCategoryDto,
    });
  }

  findAll() {
    return `This action returns all courseCategories`;
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
