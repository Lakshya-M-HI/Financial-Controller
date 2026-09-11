export interface EmiCalculationInput {
  principal: number;
  annualInterestRate: number;
  tenureYears: number;
}

export interface EmiCalculationResult {
  principal: number;
  annualInterestRate: number;
  tenureYears: number;
  monthlyEMI: number;
  totalInterest: number;
  totalPayment: number;
}

export function calculateEMI(
  input: EmiCalculationInput
): EmiCalculationResult {
  const { principal, annualInterestRate, tenureYears } = input;

  if (!Number.isFinite(principal) || principal <= 0) {
    throw new Error("Principal must be greater than zero");
  }

  if (!Number.isFinite(annualInterestRate) || annualInterestRate < 0) {
    throw new Error("Invalid interest rate");
  }

  if (!Number.isFinite(tenureYears) || tenureYears <= 0) {
    throw new Error("Tenure must be greater than zero");
  }

  const numberOfMonths = tenureYears * 12;
  const monthlyRate = annualInterestRate / 100 / 12;

  let monthlyEMI: number;

  // Special case: 0% interest
  if (monthlyRate === 0) {
    monthlyEMI = principal / numberOfMonths;
  } else {
    monthlyEMI =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, numberOfMonths)) /
      (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
  }

  const totalPayment = monthlyEMI * numberOfMonths;
  const totalInterest = totalPayment - principal;

  return {
    principal,
    annualInterestRate,
    tenureYears,
    monthlyEMI: Number(monthlyEMI.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    totalPayment: Number(totalPayment.toFixed(2)),
  };
}