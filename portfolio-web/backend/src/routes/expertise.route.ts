import Router from "express";
import { createExpertise } from "../controllers/expertise.controller";


const router = Router();

router.post("/expertise", createExpertise);
export default router;