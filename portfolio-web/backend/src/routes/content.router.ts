import { Router } from "express";
import { createContent,getTheContent } from "../controllers/content.controller";
import {upload} from "../middlewares.ts/upload.middleware";
import { validateContent } from "../middlewares.ts/content.middlware";
const router = Router();

router.post("/content",upload.single("image"),validateContent,createContent);
router.get("/content",getTheContent);


export default router;