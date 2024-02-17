import { Injectable, Logger } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CreateCourseCategoryDto } from "./dto/create-course-category.dto";
import { UpdateCourseCategoryDto } from "./dto/update-course-category.dto";

@Injectable()
export class CourseCategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly logger = new Logger("CourseCategoriesService");

  create(createCourseCategoryDto: CreateCourseCategoryDto) {
    this.logger.debug(
      "Creating a new course category",
      createCourseCategoryDto,
    );
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
