import { Types } from "mongoose";

export interface ISettings {
  _id: Types.ObjectId;
  key?: string;
  value?: string;
}
