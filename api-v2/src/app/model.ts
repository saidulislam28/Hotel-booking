import { model } from "mongoose";
import { IBlog } from "./interfaces/blog";
import { IBooking } from "./interfaces/booking";
import { IFoodItems } from "./interfaces/food-items";
import { ITags } from "./interfaces/tag";
import { ITestimonial } from "./interfaces/testimonial";
import {
  IBathRoomFeatures,
  IRoom,
  IRoomFeatures,
  IRoomServices,
} from "./modules/admin/room/room.interface";
import { IDivision } from "./modules/division/division.interface";
import { IPayment } from "./modules/payment/payment.interface";
import { ITour, ITourType } from "./modules/tour/tour.interface";
import { IUser } from "./modules/user/user.interface";
import {
  bathroomFeaturesSchema,
  BlogSchema,
  bookingSchema,
  divisionSchema,
  FoodItemsSchema,
  paymentSchema,
  roomFeaturesSchema,
  roomSchema,
  roomServiceSchema,
  SettingsSchema,
  TagsSchema,
  TestimonialSchema,
  tourSchema,
  tourTypeSchema,
  userSchema,
} from "./schema";
import { ISettings } from "./interfaces/settings";

export const RoomService = model<IRoomServices>(
  "RoomService",
  roomServiceSchema,
);
export const RoomFeature = model<IRoomFeatures>(
  "RoomFeature",
  roomFeaturesSchema,
);
export const BathroomFeature = model<IBathRoomFeatures>(
  "BathroomFeature",
  bathroomFeaturesSchema,
);

export const Room = model<IRoom>("Room", roomSchema);
export const Division = model<IDivision>("Division", divisionSchema);
export const Payment = model<IPayment>("Payment", paymentSchema);
export const Tour = model<ITour>("Tour", tourSchema);
export const TourType = model<ITourType>("TourType", tourTypeSchema);
export const User = model<IUser>("User", userSchema);
export const FoodItem = model<IFoodItems>("FoodItem", FoodItemsSchema);
export const Testimonial = model<ITestimonial>(
  "Testimonial",
  TestimonialSchema,
);
export const Tags = model<ITags>("Tags", TagsSchema);
export const Blog = model<IBlog>("Blog", BlogSchema);
export const Booking = model<IBooking>("Booking", bookingSchema);
export const Setting = model<ISettings>("Setting", SettingsSchema);
