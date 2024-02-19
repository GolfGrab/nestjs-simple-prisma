import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsDateString, IsOptional } from "class-validator";

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

  @IsDateString()
  @ApiProperty({
    type: "string",
    format: "date-time",
    example: "2021-08-20T07:00:00.000Z",
  })
  CC_CreateTime: string | Date;

  CC_CreateUser: string;

  @IsDateString()
  @ApiProperty({
    type: "string",
    format: "date-time",
    example: "2021-08-20T07:00:00.000Z",
  })
  CC_ModifyTime: string | Date;

  CC_ModifyUser: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({
    type: "string",
    format: "date-time",
    example: "2021-08-20T07:00:00.000Z",
  })
  CC_DeletedTime?: string | Date | null;

  CC_DeletedUser?: string | null;

  CC_Version?: number | null;

  CC_TrainingDetail?: string | null;

  CC_NonTrainingDetail?: string | null;

  // Course?: Prisma.CourseCreateNestedManyWithoutCourseCategoryInput;
}
