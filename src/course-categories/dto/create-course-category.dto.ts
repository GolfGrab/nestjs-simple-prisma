import { Prisma } from "@prisma/client";

export class CreateCourseCategoryDto
  implements Partial<Prisma.CourseCategoryCreateInput>
{
  /**
   * course category code
   * @example 'CC001'
   */
  CC_Code: string;

  /**
   * course category name
   * @example 'Web Development'
   */
  CC_Name: string;

  CC_Description?: string | null;

  CC_DataStatus: number;

  CC_Version?: number | null;

  CC_TrainingDetail?: string | null;

  CC_NonTrainingDetail?: string | null;

  Course?: Prisma.CourseCreateNestedManyWithoutCourseCategoryInput;
}
