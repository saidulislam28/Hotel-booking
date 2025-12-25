/* eslint-disable */

import AppError from "../../../../helpers/CustomError";
import { Room } from "../../../model";
import { IRoom } from "./room.interface";
import httpCode from "http-status-codes";
const CreateRoom = async (data: IRoom) => {

  const room = await Room.create(data);
  if (!room) {
    throw new AppError(httpCode.BAD_REQUEST, "Room Not created");
  }
  return room;
};
const UpdateRoom = (roomId: string, data: Partial<IRoom>) => {};

export const roomService = {
  CreateRoom,
  UpdateRoom,
};
