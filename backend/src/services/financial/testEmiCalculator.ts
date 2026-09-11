import { calculateEMI } from "./emiCalculator.js";

const result = calculateEMI({
  principal: 450000,
  annualInterestRate: 8,
  tenureYears: 7,
});

console.log(result);