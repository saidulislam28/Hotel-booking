/* eslint-disable */

import httpCode from "http-status-codes";
import { Setting } from "../../model";
import { ISettings } from "../../interfaces/settings";
import AppError from "../../../helpers/CustomError";
const CreateData = async (data: ISettings) => {
  const settings = await Setting.create(data);
  if (!settings) {
    throw new AppError(httpCode.BAD_REQUEST, "Settings Not created");
  }
  return settings;
};

export const settingService = {
  CreateData,
};
