import { resolveLocation } from "./locationResolver.js";
import { LocalLGDRepository } from "./localLGDRepository.js";

const repository = new LocalLGDRepository();

const result = await resolveLocation(
  {
    village: "Test Village",
    block: "Test Block",
    district: "Jaipur",
    state: "Rajasthan",
  },
  repository
);

console.log(result);