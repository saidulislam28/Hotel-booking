import { Types } from "mongoose";

export interface ITestimonial {
  _id: Types.ObjectId;
  desc?: string;
  rating?: number;
  author_name?: string;
  author_address?: string;
  sort_order?: number;
  is_room?: boolean;
  is_food?: boolean;
  is_active?: boolean;
}
