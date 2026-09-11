export type SchemeType = "MICRO_FINANCE" | "TERM_LOAN";

export interface SchemeDetails {
    schemeType: SchemeType,
    interestRate: number;
    tenureYears: number;
    moratoriumMonths: number;
    maximumLoanAmount: number;
}

export function routeScheme(projectCost: number): SchemeDetails {
    if (!Number.isFinite(projectCost) || projectCost <= 0) {
        throw new Error("Invalid project cost");
    }

    // Micro Finance Scheme
    if (projectCost <= 140000) {
        return {
            schemeType: "MICRO_FINANCE",
            interestRate: 6.5,
            tenureYears: 3,
            moratoriumMonths: 3,
            maximumLoanAmount: Math.min(projectCost * 0.9, 125000),
        };
    }

    // Term Loan Scheme
    if (projectCost <= 5000000) {
        return {
            schemeType: "TERM_LOAN",
            interestRate: 8,
            tenureYears: 7,
            moratoriumMonths: 6,
            maximumLoanAmount: Math.min(projectCost * 0.9, 4500000),
        };
    }

    throw new Error(
        "Project cost exceeds the maximum supported limit of ₹50 lakh"
    )
}