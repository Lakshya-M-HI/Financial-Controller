export interface FeasibilityInput {
  village: string;
  block: string;
  district: string;
  state: string;
  businessCategory: string;
  availableMarginCapital: number;
}

export interface FeasibilityResult {
  marketReach: string;
  opportunityAnalysis: string;
  swotAnalysis: string;
  threats: string;
  competitorMapping: string;
  productMarketValue: string;

  confidenceScore: number;
  dataSources: string[];
}

export function analyzeFeasibility(
  input: FeasibilityInput
): FeasibilityResult {
  return {
    marketReach: "",
    opportunityAnalysis: "",
    swotAnalysis: "",
    threats: "",
    competitorMapping: "",
    productMarketValue: "",

    confidenceScore: 0,
    dataSources: [],
  };
}