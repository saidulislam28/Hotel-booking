import { Schema } from "mongoose";
import {
  IBathRoomFeatures,
  IRoom,
  IRoomFeatures,
  IRoomServices,
} from "./modules/admin/room/room.interface";
import { IDivision } from "./modules/division/division.interface";
import { IPayment, PAYMENT_STATUS } from "./modules/payment/payment.interface";
import { ITour, ITourType } from "./modules/tour/tour.interface";
import {
  IAuthProvider,
  IsActive,
  IUser,
  Role,
} from "./modules/user/user.interface";
import { IFoodItems } from "./interfaces/food-items";
import { ITestimonial } from "./interfaces/testimonial";
import { ITags } from "./interfaces/tag";
import { IBlog } from "./interfaces/blog";
import { BOOKING_STATUS, IBooking } from "./interfaces/booking";
import { ISettings } from "./interfaces/settings";

export const roomServiceSchema = new Schema<IRoomServices>({
  title: { type: String, required: true },
  is_active: { type: Boolean, default: false },
  sort_order: { type: Number, required: false },
});
export const roomFeaturesSchema = new Schema<IRoomFeatures>({
  title: { type: String, required: true },
  is_active: { type: Boolean, default: false },
  sort_order: { type: Number, required: false },
});
export const bathroomFeaturesSchema = new Schema<IBathRoomFeatures>({
  title: { type: String, required: true },
  is_active: { type: Boolean, default: false },
  sort_order: { type: Number, required: false },
});

export const roomSchema = new Schema<IRoom>(
  {
    title: { type: String, required: true, unique: true },
    short_desc: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    bed_count: {
      type: Number,
      default: [1],
    },
    max_person: {
      type: Number,
      default: [1],
    },
    floor: {
      type: Number,
      default: [1],
    },
    room_size: {
      type: Number,
    },
    room_services: [
      { type: Schema.Types.ObjectId, ref: "RoomService", required: false },
    ],
    room_features: [
      { type: Schema.Types.ObjectId, ref: "RoomFeature", required: false },
    ],
    room_bathroom_features: [
      { type: Schema.Types.ObjectId, ref: "BathroomFeature", required: false },
    ],
    room_rating: {
      type: String,
    },
    is_active: { type: Boolean, default: false },
    sort_order: { type: Number, default: null },
    is_booked: { type: Boolean, default: false },
    is_deluxe: { type: Boolean, default: false },
    is_double: { type: Boolean, default: false },
    is_featured: { type: Boolean, default: false },
    is_executive: { type: Boolean, default: false },
    is_suite: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const divisionSchema = new Schema<IDivision>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    desc: { type: String },
    thumbnail: { type: String },
  },
  {
    timestamps: true,
  },
);

export const paymentSchema = new Schema<IPayment>(
  {
    booking: {
      type: Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
      unique: true,
    },
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: Object.values(PAYMENT_STATUS),
      default: PAYMENT_STATUS.UNPAID,
    },
    amount: {
      type: Number,
      required: true,
    },
    invoiceUrl: {
      type: String,
      required: false,
    },
    payment_gateway: {
      type: Schema.Types.Mixed,
    },
  },
  {
    timestamps: true,
  },
);

export const tourTypeSchema = new Schema<ITourType>(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const tourSchema = new Schema<ITour>(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    images: { type: [String], default: [] },
    location: { type: String },
    departureLocation: { type: String, default: null },
    arrivalLocation: { type: String, default: null },
    costFrom: { type: Number },
    startDate: { type: Date },
    endDate: { type: Date },
    included: { type: [String], default: [] },
    excluded: { type: [String], default: [] },
    amenities: { type: [String], default: [] },
    tourPlan: { type: [String], default: [] },
    maxGuest: { type: Number },
    division: { type: Schema.Types.ObjectId, ref: "Division", required: true },
    tourType: { type: Schema.Types.ObjectId, ref: "TourType", required: true },
  },
  {
    timestamps: true,
  },
);

export const AuthProviderSchema = new Schema<IAuthProvider>(
  {
    provider: { type: String, required: true },
    providerId: { type: String, required: true },
  },
  {
    versionKey: false,
    _id: false,
  },
);

export const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phone: { type: String },
    picture: { type: String },
    address: { type: String },
    isDeleted: { type: Boolean, default: false },
    isActive: {
      type: String,
      enum: Object.values(IsActive),
      default: IsActive.INACTIVE,
    },
    isVerified: { type: Boolean, default: false },
    // auths: {
    //   type: [AuthProviderSchema],
    //   required: true,
    // },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.USER,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

export const FoodItemsSchema = new Schema<IFoodItems>({
  title: { type: String, required: true },
  desc: { type: String, required: false },
  price: { type: Number, required: false },
  quantity: { type: Number, required: false },
  image: { type: String, required: false },
  is_active: { type: Boolean, required: false },
  sort_order: { type: Number, required: false },
});

export const TestimonialSchema = new Schema<ITestimonial>(
  {
    author_name: { type: String, required: false },
    author_address: { type: String, required: false },
    desc: { type: String, required: false },
    rating: { type: Number, required: false },
    is_active: { type: Boolean, required: false },
    is_food: { type: Boolean, required: false },
    is_room: { type: Boolean, required: false },
    sort_order: { type: Number, required: false },
  },
  {
    timestamps: true,
  },
);

export const TagsSchema = new Schema<ITags>(
  {
    title: { type: String, required: true },
    sort_order: { type: Number, required: false },
    is_active: { type: Boolean, required: false },
  },
  {
    timestamps: true,
  },
);
export const SettingsSchema = new Schema<ISettings>(
  {
    key: { type: String, required: true },
    value: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);

export const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    short_desc: { type: String, required: true },
    content: { type: String, required: false },
    slug: { type: String, required: false },
    image: { type: String, required: false },
    gallery: { type: String, required: false },
    category: { type: String, required: false },
    tags: [{ type: Schema.Types.ObjectId, ref: "Tags", required: false }],
    author: { type: String, required: false },
    is_active: { type: Boolean, required: false, default: false },
    is_featured: { type: Boolean, required: false, default: false },
    is_local_activities: { type: Boolean, required: false, default: false },
    published_at: { type: Date, required: false },
    meta: { type: String, required: false },
    sort_order: { type: Number, required: false },
  },
  {
    timestamps: true,
  },
);

export const bookingSchema = new Schema<IBooking>(
  {
    customer_name: { type: String, required: true },
    customer_email: { type: String, required: true },
    customer_phone: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: false },
    room: { type: Schema.Types.ObjectId, ref: "Room", required: true },
    check_in_at: { type: Date, required: false },
    checkout_at: { type: Date, required: false },
    total: { type: Number, required: false },
    subtotal: { type: Number, required: false },
    stay_nights: { type: Number, required: true },
    status: {
      type: String,
      enum: Object.values(BOOKING_STATUS),
      default: BOOKING_STATUS.PENDING,
    },
    payment_status: {
      type: String,
      enum: Object.values(PAYMENT_STATUS),
      default: PAYMENT_STATUS.UNPAID,
    },
    price_per_night: { type: Number, required: false },
    adult_person_count: { type: Number, required: false },
    children_count: { type: Number, required: false, default: 0 },
    notes: { type: String, required: false },
    cancel_reason: { type: String, required: false },
    transaction_id: { type: String, required: false },
  },
  {
    timestamps: true,
  },
);
