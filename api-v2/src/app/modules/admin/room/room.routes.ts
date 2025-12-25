import { Router } from "express";
import { roomController } from "./room.controller";
import { validateRequest } from "../../../../utils/ValidateRequest";
import { RoomZodSchema } from "./room.interface";

const router = Router();

router.post(
  "/",
//   multerUpload.single("file"),
  validateRequest(RoomZodSchema),
  roomController.CreateRoom
);
router.patch("/", roomController.UpdateRoom);

export const RoomRouter = router;
