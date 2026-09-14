import { db } from "../prisma/db.js";
import { calculateFinancialPlan } from "../services/financial/financialService.js";
import { createFinancialPlan } from "./financialRepository.js";

async function main() {
  // 1. Create test user
  const user = await db.orm.public.User.create({
    name: "Test Entrepreneur",
    email: `test-${Date.now()}@example.com`,
    phone: "9999999999",
    language: "en",
  });

  // 2. Create entrepreneur profile
  const entrepreneur =
    await db.orm.public.EntrepreneurProfile.create({
      userId: user.id,
      village: "Test Village",
      block: "Test Block",
      district: "Test District",
      state: "Rajasthan",
    });

  // 3. Create business proposal
  const proposal =
    await db.orm.public.BusinessProposal.create({
      entrepreneurId: entrepreneur.id,
      businessCategory: "Dairy",
      businessName: "Test Dairy Business",
      availableMarginCapital: 50000,
    });

  // 4. Calculate financial plan
  const financialPlan = calculateFinancialPlan({
    availableMarginCapital: 50000,
  });

  // 5. Save financial plan + repayment schedule
  const savedPlan = await createFinancialPlan({
    proposalId: proposal.id,
    availableMarginCapital:
      financialPlan.availableMarginCapital,
    projectCost: financialPlan.projectCost,
    maximumLoanAmount:
      financialPlan.maximumLoanAmount,
    schemeType: financialPlan.schemeType,
    interestRate: financialPlan.interestRate,
    tenureYears: financialPlan.tenureYears,
    moratoriumMonths:
      financialPlan.moratoriumMonths,
    emi: financialPlan.monthlyEMI,
    repaymentFrequency: "MONTHLY",
    repaymentSchedule:
      financialPlan.repaymentSchedule,
  });

  console.log("\nFinancial plan saved successfully!");
  console.log(savedPlan);

  console.log("\nDatabase IDs:");
  console.log("User:", user.id);
  console.log("Entrepreneur:", entrepreneur.id);
  console.log("Proposal:", proposal.id);
  console.log("Financial Plan:", savedPlan.id);
}

main()
  .catch((error) => {
    console.error("Database test failed:");
    console.error(error);
  });