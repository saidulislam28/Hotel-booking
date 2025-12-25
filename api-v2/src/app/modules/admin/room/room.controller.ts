/* eslint-disable  */
import { NextFunction, Request, Response } from "express";
import { CatchAsync } from "../../../../utils/catchAsync";
import { sendResponse } from "../../../../utils/response.helper";
import httpStatus from "http-status-codes";
import { IRoom } from "./room.interface";
import { roomService } from "./room.service";

const CreateRoom = CatchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload: IRoom = {
      ...req.body,
      // image: req.file?.path,
    };

    const Room = await roomService.CreateRoom(payload);

    sendResponse(res, {
      success: true,
      message: "Room Created Successfully",
      statusCode: httpStatus.CREATED,
      data: Room,
    });
  }
);

const UpdateRoom = async (req: Request, res: Response, next: NextFunction) => {
  const roomId: string = req.params.id;

  const payload: IRoom = {
    ...req.body,
    // image: (req.files as Express.Multer.File[])?.map((file) => file.path),
  };

  const Room = await roomService.UpdateRoom(roomId, payload);
  sendResponse(res, {
    success: true,
    message: "Room updated Successfully",
    statusCode: httpStatus.CREATED,
    data: Room,
  });
};

export const roomController = {
  UpdateRoom,
  CreateRoom,
};
