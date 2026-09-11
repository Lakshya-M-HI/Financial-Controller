import { calculateFinancialPlan } from "./financialService.js";

const result = calculateFinancialPlan({
  availableMarginCapital: 50000,
});

console.log("FINANCIAL PLAN");
console.log("================");

console.log("Margin:", result.availableMarginCapital);
console.log("Project Cost:", result.projectCost);
console.log("Maximum Loan:", result.maximumLoanAmount);

console.log("Scheme:", result.schemeType);
console.log("Interest Rate:", result.interestRate);
console.log("Tenure:", result.tenureYears);
console.log("Moratorium:", result.moratoriumMonths);

console.log("Loan Amount:", result.loanAmount);
console.log("Monthly EMI:", result.monthlyEMI);
console.log("Total Interest:", result.totalInterest);
console.log("Total Payment:", result.totalPayment);

console.log(
  "Repayment Installments:",
  result.repaymentSchedule.length
);