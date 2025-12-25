/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/response.helper";
import httpStatus from "http-status-codes";
import { WebDataService } from "./webdata.service";
const GetWebData = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await WebDataService.GetWebData();

    sendResponse(res, {
      success: true,
      message: "Data retrieved Successfully",
      statusCode: httpStatus.CREATED,
      data: data,
    });
  }
);
const GetRoomData = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await WebDataService.GetRoomData();

    sendResponse(res, {
      success: true,
      message: "Room data retrieved Successfully",
      statusCode: httpStatus.CREATED,
      data: data,
    });
  }
);
const GetSingleRoomData = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    console.log("paramsss", id);
    const data = await WebDataService.GetSingleRoomData(id);

    sendResponse(res, {
      success: true,
      message: "Room data retrieved Successfully",
      statusCode: httpStatus.CREATED,
      data: data,
    });
  }
);
const GetSingleBlog = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    console.log("paramsss", id);
    const data = await WebDataService.GetSingleBlog(id);

    sendResponse(res, {
      success: true,
      message: "Blog data retrieved Successfully",
      statusCode: httpStatus.CREATED,
      data: data,
    });
  }
);
const GetFoodData = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = await WebDataService.GetFoodData();

    sendResponse(res, {
      success: true,
      message: "Room data retrieved Successfully",
      statusCode: httpStatus.CREATED,
      data: data,
    });
  }
);

export const WebDataController = {
  GetWebData,
  GetRoomData,
  GetFoodData,
  GetSingleRoomData,
  GetSingleBlog,
};
