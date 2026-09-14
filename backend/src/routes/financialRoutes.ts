import { Router } from "express";
import {calculateFinancial} from "../controllers/financialController.js";


const router = Router();

router.post("/calculate", calculateFinancial);


export default router;