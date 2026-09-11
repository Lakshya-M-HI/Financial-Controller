import { calculateProjectFinance } from "./financialCalculator.js";

const result = calculateProjectFinance({
    availableMarginCapital: 50000,
});

console.log(result);