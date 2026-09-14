import type { Request, Response } from "express";
import { calculateFinancialPlan } from "../services/financial/financialService.js";


export async function calculateFinancial(req: Request, res: Response) {
    try {
        const { availableMarginCapital } = req.body;

        if (typeof availableMarginCapital !== "number" || availableMarginCapital <= 0) {
            return res.status(400).json({
                success: false,
                message: "availableMarginCapital must be greater than zero",
            });
        }

        const result = await calculateFinancialPlan({ availableMarginCapital });

        return res.status(200).json({
            success: true,
            message: "Financial plan calculated successfully",
            data: result,
        });

    } catch (error) {
        console.error("Error calculating financial plan:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to calculate financial plan",
            error: (error as Error).message,
        });
    }

}