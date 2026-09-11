import { calculateProjectFinance } from "./financialCalculator.js";
import { routeScheme } from "./schemeRouter.js";
import { calculateEMI } from "./emiCalculator.js";
import { generateRepaymentSchedule } from "./repaymentSchedule.js";

export interface FinancialPlanInput {
  availableMarginCapital: number;
  startDate?: Date;
}

export function calculateFinancialPlan(input: FinancialPlanInput) {
  // Step 1: Calculate project cost and maximum loan
  const finance = calculateProjectFinance({
    availableMarginCapital: input.availableMarginCapital,
  });

  // Step 2: Select appropriate scheme
  const scheme = routeScheme(finance.projectCost);

  // Step 3: Calculate actual loan amount
  const loanAmount = Math.min(
    finance.maximumLoanAmount,
    scheme.maximumLoanAmount
  );

  // Step 4: Calculate EMI
  const emi = calculateEMI({
    principal: loanAmount,
    annualInterestRate: scheme.interestRate,
    tenureYears: scheme.tenureYears,
  });

  // Step 5: Generate repayment schedule
  const repaymentSchedule = generateRepaymentSchedule({
    principal: loanAmount,
    annualInterestRate: scheme.interestRate,
    tenureYears: scheme.tenureYears,
    moratoriumMonths: scheme.moratoriumMonths,
    startDate: input.startDate,
  });

  return {
    availableMarginCapital: finance.availableMarginCapital,
    projectCost: finance.projectCost,
    maximumLoanAmount: finance.maximumLoanAmount,

    loanAmount,

    schemeType: scheme.schemeType,
    interestRate: scheme.interestRate,
    tenureYears: scheme.tenureYears,
    moratoriumMonths: scheme.moratoriumMonths,

    monthlyEMI: emi.monthlyEMI,
    totalInterest: emi.totalInterest,
    totalPayment: emi.totalPayment,

    repaymentSchedule,
  };
}