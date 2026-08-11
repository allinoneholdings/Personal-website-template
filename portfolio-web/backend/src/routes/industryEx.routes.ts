import { Router } from "express";
import { createIndustryEx } from "../controllers/industryEx.controller";

const router = Router();

router.post("/industry-ex", createIndustryEx);
//router.get("/industry-ex", createIndustryEx);

export default router;