import Router from "express";
import { createService } from "../controllers/service.controller";


const router = Router();
router.post("/service", createService);
export default router;