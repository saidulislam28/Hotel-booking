import { Router } from "express";
import { WebDataController } from "./webdata.controller";

const router = Router();

router.get("/", WebDataController.GetWebData);
router.get("/rooms", WebDataController.GetRoomData);
router.get("/blogs", WebDataController.GetBlogsData);
router.get("/rooms/:id", WebDataController.GetSingleRoomData);
router.get("/blogs/:id", WebDataController.GetSingleBlog);
router.get("/foods", WebDataController.GetFoodData);
router.get("/tags", WebDataController.GetBlogTags);

export const WebRouter = router;
