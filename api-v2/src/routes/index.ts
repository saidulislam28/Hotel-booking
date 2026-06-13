import { Router } from "express";
import { UserRoutes } from "../app/modules/user/user.routes";
import { AuthRoutes } from "../app/modules/auth/auth.route";
import { DivisionRoutes } from "../app/modules/division/division.routes";
import { TourRoutes } from "../app/modules/tour/tour.routes";
import { BookingRoutes } from "../app/modules/booking/booking.routes";
import { paymentRoutes } from "../app/modules/payment/payment.routes";
import { CrudRouter } from "../app/modules/crud/crud.route";
import { RoomRouter } from "../app/modules/admin/room/room.routes";
import { WebRouter } from "../app/modules/website/webdata.route";
import { SettingsRouter } from "../app/modules/admin/admin.routes";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/division",
    route: DivisionRoutes,
  },
  {
    path: "/tour",
    route: TourRoutes,
  },
  {
    path: "/user/booking",
    route: BookingRoutes,
  },
  {
    path: "/payment",
    route: paymentRoutes,
  },
  {
    path: "/crud",
    route: CrudRouter,
  },
  {
    path: "/admin/room",
    route: RoomRouter,
  },
  {
    path: "/admin/settings",
    route: SettingsRouter,
  },
  {
    path: "/web-data",
    route: WebRouter,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
