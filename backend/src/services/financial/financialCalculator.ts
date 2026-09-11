export interface FinancialCalculationInput {
    availableMarginCapital: number;
}

export interface FinancialCalculationResult {
    availableMarginCapital: number;
    projectCost: number;
    maximumLoanAmount: number;
}

export function calculateProjectFinance(input: FinancialCalculationInput): FinancialCalculationResult {

    const { availableMarginCapital } = input;

    if (!Number.isFinite(availableMarginCapital)) {
        throw new Error("Invalid margin capital");
    }

    if (availableMarginCapital <= 0) {
        throw new Error("Margin capital must be greater than zero");
    }

    const projectCost = availableMarginCapital / 0.10;
    const maximumLoanAmount = projectCost * 0.90;

    return {
        availableMarginCapital,
        projectCost,
        maximumLoanAmount,
    };
}