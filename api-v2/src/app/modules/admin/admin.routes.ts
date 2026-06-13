import { Router } from "express";
import { SettingsController } from "./admin.controller";
import { SettingsSchema } from "../../schema";
import { validateRequest } from "../../../utils/ValidateRequest";

const router = Router();

router.post(
  "/",
  //   multerUpload.single("file"),
//   validateRequest(SettingsSchema),
  SettingsController.CreateData,
);

export const SettingsRouter = router;
