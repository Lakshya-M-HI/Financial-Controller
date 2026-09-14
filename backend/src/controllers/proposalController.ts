import type { Request, Response } from "express";
import { createProposal } from "../repositories/proposalRepository.js";

export async function createBusinessProposal(
    req: Request,
    res: Response
) {
    try {
        const {
            userId,
            village,
            block,
            district,
            state,
            businessCategory,
            businessName,
            availableMarginCapital,
        } = req.body;

        // Basic validation
        if (
            typeof userId !== "number" ||
            !Number.isInteger(userId) ||
            userId <= 0
        ) {
            return res.status(400).json({
                success: false,
                message: "userId must be a valid positive integer",
            });
        }

        if (
            typeof village !== "string" ||
            !village.trim() ||
            typeof block !== "string" ||
            !block.trim() ||
            typeof district !== "string" ||
            !district.trim() ||
            typeof state !== "string" ||
            !state.trim()
        ) {
            return res.status(400).json({
                success: false,
                message: "Location details are required",
            });
        }

        if (
            typeof businessCategory !== "string" ||
            !businessCategory.trim()
        ) {
            return res.status(400).json({
                success: false,
                message: "Business category is required",
            });
        }

        if (
            typeof availableMarginCapital !== "number" ||
            !Number.isFinite(availableMarginCapital) ||
            availableMarginCapital <= 0
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "availableMarginCapital must be a positive number",
            });
        }

        const proposal = await createProposal({
            userId,
            village: village.trim(),
            block: block.trim(),
            district: district.trim(),
            state: state.trim(),
            businessCategory: businessCategory.trim(),
            businessName:
                typeof businessName === "string"
                    ? businessName.trim()
                    : undefined,
            availableMarginCapital,
        });

        return res.status(201).json({
            success: true,
            message: "Business proposal created successfully",
            data: proposal,
        });
    } catch (error) {
        console.error("Proposal creation error:", error);

        return res.status(500).json({
            success: false,
            message: "Unable to create business proposal",
        });
    }
}