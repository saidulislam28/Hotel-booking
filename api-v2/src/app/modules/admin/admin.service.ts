/* eslint-disable */

import httpCode from "http-status-codes";
import {
  Setting,
  RoomService,
  RoomFeature,
  BathroomFeature,
  Room,
  Division,
  Payment,
  Tour,
  TourType,
  User,
  FoodItem,
  Testimonial,
  Tags,
  Blog,
  Booking,
} from "../../model";
import { ISettings } from "../../interfaces/settings";
import AppError from "../../../helpers/CustomError";
import { superAdminSeeder } from "../../../utils/seeder";
import {
  Tags as TagsData,
  Testimonial as TestimonialData,
  roomServicesData,
  roomFeaturesData,
  bathroomFeaturesData,
  roomsData,
  divisionsData,
  foodItemsData,
  blogsData,
} from "../../../utils/seed";

const CreateData = async (data: ISettings) => {
  const settings = await Setting.create(data);
  if (!settings) {
    throw new AppError(httpCode.BAD_REQUEST, "Settings Not created");
  }
  return settings;
};

const createSeed = async () => {
  // 1. Delete all existing data
  await Promise.all([
    RoomService.deleteMany({}),
    RoomFeature.deleteMany({}),
    BathroomFeature.deleteMany({}),
    Room.deleteMany({}),
    Division.deleteMany({}),
    Payment.deleteMany({}),
    Tour.deleteMany({}),
    TourType.deleteMany({}),
    // User.deleteMany({}),
    FoodItem.deleteMany({}),
    Testimonial.deleteMany({}),
    Tags.deleteMany({}),
    Blog.deleteMany({}),
    Booking.deleteMany({}),
    Setting.deleteMany({}),
  ]);

  // 2. Format Data with explicit IDs where necessary
  const formattedTags = TagsData.map((tag: any) => ({
    ...tag,
    _id: tag._id.$oid,
  }));

  const formattedTestimonials = TestimonialData.map((testimonial: any) => ({
    ...testimonial,
    _id: testimonial._id.$oid,
  }));

  // 3. Insert Independent Collections
  const insertedTags = await Tags.insertMany(formattedTags);
  await Testimonial.insertMany(formattedTestimonials);
  const insertedRoomServices = await RoomService.insertMany(roomServicesData);
  const insertedRoomFeatures = await RoomFeature.insertMany(roomFeaturesData);
  const insertedBathroomFeatures = await BathroomFeature.insertMany(
    bathroomFeaturesData
  );
  await Division.insertMany(divisionsData);
  await FoodItem.insertMany(foodItemsData);

  // 4. Extract ObjectIds
  const tagIds = insertedTags.map((t) => t._id);
  const roomServiceIds = insertedRoomServices.map((rs) => rs._id);
  const roomFeatureIds = insertedRoomFeatures.map((rf) => rf._id);
  const bathroomFeatureIds = insertedBathroomFeatures.map((bf) => bf._id);

  // 5. Update Relational Data
  const formattedRooms = roomsData.map((room: any) => ({
    ...room,
    room_services: roomServiceIds,
    room_features: roomFeatureIds,
    room_bathroom_features: bathroomFeatureIds,
  }));

  const formattedBlogs = blogsData.map((blog: any) => ({
    ...blog,
    tags: tagIds,
  }));

  // 6. Insert Relational Collections
  await Room.insertMany(formattedRooms);
  await Blog.insertMany(formattedBlogs);

  // 7. Seed Super Admin
  // await superAdminSeeder();

  return { message: "Database seeded successfully" };
};

export const settingService = {
  CreateData,
  createSeed,
};
