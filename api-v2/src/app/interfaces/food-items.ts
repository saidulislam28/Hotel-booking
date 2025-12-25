import { Types } from "mongoose";

export interface IFoodItems {
  _id: Types.ObjectId;
  title: string;
  desc?: string;
  price: number;
  image?: string;
  is_active?: boolean;
  quantity?: number;
  sort_order?: number;
}
