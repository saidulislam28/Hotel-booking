/* eslint-disable */
import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/response.helper";
import httpStatus from "http-status-codes";
import { crudService } from "./crud.service";
const CreateData = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { model }: any = req.query;
    const body = req.body;
    const data = await crudService.CreateData(model, body);

    sendResponse(res, {
      success: true,
      message: "Data created Successfully",
      statusCode: httpStatus.CREATED,
      data: data,
    });
  }
);
const FindAll = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { model }: any = req.query;
    const data = await crudService.FindAll(model);

    sendResponse(res, {
      success: true,
      message: "Data retrieved Successfully",
      statusCode: httpStatus.CREATED,
      data: data,
    });
  }
);
const FindOne = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { model }: any = req.query;
    const { id } = req.params;

    const data = await crudService.FindOne(id, model);

    sendResponse(res, {
      success: true,
      message: "Data retrieved Successfully",
      statusCode: httpStatus.CREATED,
      data: data,
    });
  }
);
const UpdateOne = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { model }: any = req.query;
    const { id } = req.params;
    const body: any = req.body;

    const data = await crudService.UpdateOne(id, model, body);

    sendResponse(res, {
      success: true,
      message: "Data Updated Successfully",
      statusCode: httpStatus.CREATED,
      data: data,
    });
  }
);
const DeleteOne = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { model }: any = req.query;
    const { id } = req.params;
    const data = await crudService.DeleteOne(id, model);

    sendResponse(res, {
      success: true,
      message: "Data Deleted Successfully",
      statusCode: httpStatus.CREATED,
      data: null,
    });
  }
);
const FindByClause = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { model }: any = req.query;
    const body = req.body;
    const data = await crudService.FindByClause(model, body);

    sendResponse(res, {
      success: true,
      message: "Data Deleted Successfully",
      statusCode: httpStatus.CREATED,
      data: data,
    });
  }
);

export const crudController = {
  FindAll,
  FindOne,
  UpdateOne,
  DeleteOne,
  CreateData,
  FindByClause,
};
