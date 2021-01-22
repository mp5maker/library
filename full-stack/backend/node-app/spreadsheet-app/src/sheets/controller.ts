import { findAll, create } from "@plant-rest-api/sheets/spreadsheet";

import {
  Controller,
  Get,
  Route,
  Query,
  Post,
  SuccessResponse,
  Body,
} from "tsoa";

@Route("sheet")
export class SheetController extends Controller {
  @Get()
  public async getSheet(
    @Query("student_name") student_name?: string,
    @Query("gender") gender?: string,
    @Query("home_state") home_state?: string,
    @Query("major") major?: string,
    @Query("order_by") order_by?: any
  ): Promise<any> {
    return findAll({
      offset: 1,
      limit: 20,
      query: {
        ...(student_name ? { student_name } : {}),
        ...(gender ? { gender } : {}),
        ...(home_state ? { home_state } : {}),
        ...(major ? { major } : {}),
      },
      ...(order_by ? { order_by } : {}),
    });
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createSheet(@Body() requestBody: any): Promise<any> {
    return create({ payload: requestBody });
  }
}
