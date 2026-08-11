import { Router } from "express";
import { createContent } from "../controllers/content.controller";
const router = Router();

router.post("/content",createContent);


export default router;