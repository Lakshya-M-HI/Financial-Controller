import { db } from "../prisma/db.js";

export async function createFinancialPlan(data: {
  proposalId: number;
  availableMarginCapital: number;
  projectCost: number;
  maximumLoanAmount: number;
  schemeType: string;
  interestRate: number;
  tenureYears: number;
  moratoriumMonths: number;
  emi: number;
  repaymentFrequency: string;
  repaymentSchedule: {
    installmentNumber: number;
    dueDate: Date;
    principalAmount: number;
    interestAmount: number;
    totalPayment: number;
    remainingBalance: number;
  }[];
}) {
  return db.transaction(async (tx) => {
    const financialPlan = await tx.orm.public.FinancialPlan.create({
      proposalId: data.proposalId,
      availableMarginCapital: data.availableMarginCapital,
      projectCost: data.projectCost,
      maximumLoanAmount: data.maximumLoanAmount,
      schemeType: data.schemeType,
      interestRate: data.interestRate,
      tenureYears: data.tenureYears,
      moratoriumMonths: data.moratoriumMonths,
      emi: data.emi,
      repaymentFrequency: data.repaymentFrequency,
    });

    for (const installment of data.repaymentSchedule) {
      await tx.orm.public.RepaymentSchedule.create({
        financialPlanId: financialPlan.id,
        installmentNumber: installment.installmentNumber,
        dueDate: installment.dueDate.toISOString(), // <-- Convert Date to ISO string
        principalAmount: installment.principalAmount,
        interestAmount: installment.interestAmount,
        totalPayment: installment.totalPayment,
        remainingBalance: installment.remainingBalance,
      });
    }

    return financialPlan;
  });
}