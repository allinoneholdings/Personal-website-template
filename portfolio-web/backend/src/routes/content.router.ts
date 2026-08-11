import { Router } from "express";
import { createContent,getTheContent } from "../controllers/content.controller";
const router = Router();

router.post("/content",createContent);
router.get("/content",getTheContent);


export default router;