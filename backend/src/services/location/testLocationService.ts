import { normalizeLocation } from "./locationService.js";

const result = normalizeLocation({
  village: "  Test   Village ",
  block: " Test Block ",
  district: " JAIPUR ",
  state: " Rajasthan ",
});

console.log(result);