import { Types } from "mongoose";

export interface IBooking {
  _id?: string;
  customer_name?: string;
  customer_email?: string;
  customer_phone?: string;
  user?: Types.ObjectId;
  room: Types.ObjectId;
  check_in_at?: Date;
  checkout_at?: Date;
  total?: number;
  subtotal?: number;
  stay_nights?: number;
  status?: "PENDING" | "CONFIRMED" | "CANCELLED" | "CHECKED_IN" | "CHECKED_OUT";
  payment_status?: "UNPAID" | "PAID" | "REFUNDED";
  price_per_night: number;
  adult_person_count?: number;
  children_count?: number;
  notes?: string;
  cancel_reason?: string;
  transaction_id?: string;
}

export enum BOOKING_STATUS {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
  CHECKED_IN = "CHECKED_IN",
  CHECKED_OUT = "CHECKED_OUT",
}

export enum PAYMENT_STATUS {
  UNPAID = "UNPAID",
  PAID = "PAID",
  REFUNDED = "REFUNDED",
}
