import { Router } from "express";
import { createBusinessProposal } from "../controllers/proposalController.js";

const router = Router();

router.post("/", createBusinessProposal);

export default router;