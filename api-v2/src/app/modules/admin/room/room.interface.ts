import z from "zod";

export interface IRoom {
  title: string;
  short_desc?: string;
  description?: string;
  price: number;
  image?: string;
  bed_count?: number;
  max_person?: number;
  floor?: number;
  room_size?: number;
  room_services?: string[];
  room_features?: string[];
  room_bathroom_features?: string[];
  room_rating?: string;
  sort_order?: number;
  is_active: boolean;
  is_booked?: boolean;
  is_deluxe?: boolean;
  is_double?: boolean;
  is_featured?: boolean;
  is_executive?: boolean;
  is_suite?: boolean;
}

export interface IRoomServices {
  title: string;
  is_active: boolean;
  sort_order?: number;
}
export interface IRoomFeatures {
  title: string;
  is_active: boolean;
  sort_order?: number;
}
export interface IBathRoomFeatures {
  title: string;
  is_active: boolean;
  sort_order?: number;
}

export const RoomZodSchema = z.object({
  title: z.string(),
  short_desc: z.string().optional(),
  description: z.string().optional(),
  price: z.number(),
  image: z.string().optional(),
  bed_count: z.number().optional(),
  max_person: z.number().optional(),
  floor: z.number().optional(),
  room_size: z.number().optional(),
  room_services: z.array(z.string()).optional(),
  room_features: z.array(z.string()).optional(),
  room_bathroom_features: z.array(z.string()).optional(),
  room_rating: z.string().optional(),
  sort_order: z.number().optional(),
  is_active: z.boolean().optional(),
  is_booked: z.boolean().optional(),
  is_deluxe: z.boolean().optional(),
  is_double: z.boolean().optional(),
  is_featured: z.boolean().optional(),
  is_executive: z.boolean().optional(),
  is_suite: z.boolean().optional(),
});
