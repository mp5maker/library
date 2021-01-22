import { Sample } from "@plant-rest-api/sample/entity";
import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Route,
  Patch,
  Delete,
  Query,
  SuccessResponse,
} from "tsoa";
import bcrypt from "bcryptjs";
import get from "lodash/get";

@Route("sample")
export class SampleController extends Controller {
  @Get()
  public async getSamples(): Promise<Sample[]> {
    return Sample.find();
  }

  @Get("{id}")
  public async getSample(@Path() id: number): Promise<Sample | {}> {
    const sample = await Sample.findOne(id);
    return sample ? sample : {};
  }

  @Get("password/{id}")
  public async passwordMatch(
    @Path() id: number,
    @Query() password: string
  ): Promise<boolean> {
    const sample = await Sample.findOne(id);
    if (sample) {
      const isMatch = await bcrypt.compare(password, sample.password);
      return isMatch;
    }
    return false;
  }

  @Patch("{id}")
  public async patchSample(
    @Path() id: number,
    @Body() requestBody: any
  ): Promise<Sample | {}> {
    return Sample.update({ id }, { ...requestBody });
  }

  @Delete("{id}")
  public async deleteSample(@Path() id: number): Promise<Sample | {}> {
    return Sample.delete({ id });
  }

  @SuccessResponse("201", "Created")
  @Post()
  public async createSample(@Body() requestBody: any): Promise<Sample> {
    const password = get(requestBody, "password", "");
    const hashedPassword = await bcrypt.hash(password, 8);
    console.log("requestBody", requestBody);
    this.setStatus(201);
    // @ts-ignore
    return Sample.create({ ...requestBody, password: hashedPassword }).save();
  }
}
