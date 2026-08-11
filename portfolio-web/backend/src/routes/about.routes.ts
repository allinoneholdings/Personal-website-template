import {Router} from "express";
//import { getAbout, createAbout } from "../controllers/about.controller";
import { upload } from "../middlewares.ts/upload.middleware";
//import { validateAbout } from "../middlewares.ts/about.middleware";
import { createAbout } from "../controllers/about.controller";
const router = Router();

router.post("/about", upload.single("image"), createAbout);
//router.get("/about", getAbout);

export default router;