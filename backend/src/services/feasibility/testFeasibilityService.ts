import { analyzeFeasibility } from "./feasibilityService.js";

const result = analyzeFeasibility({
    village: "Test Village",
    block: "Test Block",
    district: "Jaipur",
    state: "Rajasthan",
    businessCategory: "Dairy",
    availableMarginCapital: 50000,
});

console.log(result);