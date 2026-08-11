import { Router } from "express";
import { createContent,getTheContent } from "../controllers/content.controller";
import {upload} from "../middlewares.ts/upload.middleware";
const router = Router();

router.post("/content",upload.single("image"),createContent);
router.get("/content",getTheContent);


export default router;