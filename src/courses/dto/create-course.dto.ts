import { Course, Timestamp } from "@/database/dbTypes";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsDateString, IsOptional } from "class-validator";

export class CreateCourseDto implements Partial<Course> {
  /**
   * Course Code is unique
   * @example "C001"
   *  */

  CR_CourseCode: string;

  /**
   * @example "Course 1"
   * */
  CR_Name: string;

  @IsOptional()
  @ApiPropertyOptional()
  CR_Description: string | null;

  /**
   * @example 1
   * */
  CR_DataStatus: number;

  @IsDateString()
  @ApiProperty({ type: String, format: "date-time" })
  CR_CreateTime: Timestamp;

  /**
   * @example "admin"
   * */
  CR_CreateUser: string;

  @IsDateString()
  @ApiProperty({ type: String, format: "date-time" })
  CR_ModifyTime: Timestamp;

  /**
   * @example "admin"
   * */
  CR_ModifyUser: string;

  @IsOptional()
  @ApiPropertyOptional()
  CR_Version: number | null;

  @IsOptional()
  @ApiPropertyOptional()
  CR_TrainingDetail: string | null;

  @IsOptional()
  @ApiPropertyOptional()
  CR_NonTrainingDetail: string | null;

  @IsOptional()
  @ApiPropertyOptional()
  CourseCategoryID: number | null;

  /**
   * @example "SAP001"
   * */
  CR_SapCourseCode: string;

  /**
   * @example "SAP"
   * */
  CR_SourceType: string;

  @IsOptional()
  @ApiPropertyOptional()
  CR_AdhocType: number | null;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ type: String, format: "date-time" })
  CR_CourseDataCreateDate: Timestamp | null;

  /**
   * @example "user"
   * */
  CR_CourseDataCreateUser: string;

  @IsOptional()
  @IsDateString()
  @ApiPropertyOptional({ type: String, format: "date-time" })
  CR_CourseDataModifyDate: Timestamp | null;

  /**
   * @example "user"
   * */
  CR_CourseDataModifyUser: string;
}
