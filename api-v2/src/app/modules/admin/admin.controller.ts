/* eslint-disable  */
import { NextFunction, Request, Response } from "express";

import httpStatus from "http-status-codes";

import { ISettings } from "../../interfaces/settings";
import { settingService } from "./admin.service";
import { CatchAsync } from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/response.helper";

const CreateData = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload: ISettings = {
      ...req.body,
    };

    const Settings = await settingService.CreateData(payload);

    sendResponse(res, {
      success: true,
      message: "settings Created Successfully",
      statusCode: httpStatus.CREATED,
      data: Settings,
    });
  },
);
const createSeed = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const user = req.user;
    console.log("user", user)

    const seedData = await settingService.createSeed();
    sendResponse(res, {
      success: true,
      message: "settings seed Successfully",
      statusCode: httpStatus.CREATED,
      data: seedData,
    });
  },
);

export const SettingsController = {
  CreateData,
  createSeed,
};
