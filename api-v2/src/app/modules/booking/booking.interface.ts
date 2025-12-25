import z from "zod";
import { BOOKING_STATUS, PAYMENT_STATUS } from "../../interfaces/booking";

export const createBookingZodSchema = z.object({
  customer_name: z.string().optional(),
  customer_email: z.string().optional(),
  customer_phone: z.string().optional(),
  user_id: z.string().optional(),
  room_id: z.string().optional(),
  notes: z.string().optional(),
  cancel_reason: z.string().optional(),
  total: z.number().positive().int().optional(),
  subtotal: z.number().positive().int().optional(),
  stay_nights: z.number().positive().int().optional(),
  price_per_night: z.number().positive().int().optional(),
  adult_person_count: z.number().positive().int().optional(),
  children_count: z.number().positive().int().optional(),
  status: z.enum(Object.values(BOOKING_STATUS) as [string]).optional(),
  payment_status: z.enum(Object.values(PAYMENT_STATUS) as [string]).optional(),
  checkout_at: z.date().optional(),
  check_in_at: z.date().optional(),
});

export const updateBookingStatusZodSchema = z.object({
  customer_name: z.string().optional(),
  customer_email: z.string().optional(),
  customer_phone: z.string().optional(),
  user_id: z.string().optional(),
  room_id: z.string().optional(),
  notes: z.string().optional(),
  cancel_reason: z.string().optional(),
  total: z.number().positive().int().optional(),
  subtotal: z.number().positive().int().optional(),
  stay_nights: z.number().positive().int().optional(),
  price_per_night: z.number().positive().int().optional(),
  adult_person_count: z.number().positive().int().optional(),
  children_count: z.number().positive().int().optional(),
  status: z.enum(Object.values(BOOKING_STATUS) as [string]).optional(),
  payment_status: z.enum(Object.values(PAYMENT_STATUS) as [string]).optional(),
  checkout_at: z.date().optional(),
  check_in_at: z.date().optional(),
});
