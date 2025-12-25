/* eslint-disable */
import { Router } from "express";
import { crudController } from "./crud.controller";
import { checkAuth } from "../../../middleware/checkAuth";
import { Role } from "../user/user.interface";

const router = Router();

router.post(
  "/",
  //   checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  crudController.CreateData
);
router.post(
  "/find-where",
  //   checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  crudController.FindByClause
);
router.get(
  "/",
  //   checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  crudController.FindAll
);
router.get(
  "/:id",
  //   checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  crudController.FindOne
);
router.patch(
  "/:id",
  //   checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  crudController.UpdateOne
);
router.delete(
  "/:id",
  //   checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  crudController.DeleteOne
);

export const CrudRouter = router;
