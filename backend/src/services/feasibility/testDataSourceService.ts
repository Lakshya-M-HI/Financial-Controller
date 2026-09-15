import { getLocalBusinessData } from "./dataSourceService";

const result = await getLocalBusinessData({
  village: "Test Village",
  block: "Test Block",
  district: "Jaipur",
  state: "Rajasthan",
});

console.log(result);