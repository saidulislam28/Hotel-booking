import { Router } from "express";
import { checkAuth } from "../../../middleware/checkAuth";
import { Role } from "../user/user.interface";
import { SettingsController } from "./admin.controller";

const router = Router();

router.post(
  "/",
  //   multerUpload.single("file"),
  //   validateRequest(SettingsSchema),
  SettingsController.CreateData,
);
router.post(
  "/seed",
  checkAuth(Role.SUPER_ADMIN),
  SettingsController.createSeed,
);

export const SettingsRouter = router;
