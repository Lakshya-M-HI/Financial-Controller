import { generateRepaymentSchedule } from "./repaymentSchedule.js";

const schedule = generateRepaymentSchedule({
  principal: 450000,
  annualInterestRate: 8,
  tenureYears: 7,
  moratoriumMonths: 6,
});

console.log("Total installments:", schedule.length);

console.log("\nFirst 6 months:");
console.table(schedule.slice(0, 6));

console.log("\nFirst regular payment:");
console.log(schedule[6]);

console.log("\nFinal payment:");
console.log(schedule[schedule.length - 1]);