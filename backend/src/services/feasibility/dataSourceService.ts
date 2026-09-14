export type GeographicLevel =
    | "VILLAGE"
    | "BLOCK"
    | "DISTRICT"
    | "STATE";

export interface DataSource {
    name: string;
    sourceUrl: string;
    geographicLevel: GeographicLevel;
    retrievedAt: Date;
    confidence: number;
}

export interface LocalBusinessData {
    population?: number;
    households?: number;

    similarBusinessCount?: number;

    averageIncome?: number;

    marketDataAvailable: boolean;

    sources: DataSource[];
}


export interface LocationInput {
    village: string;
    block: string;
    district: string;
    state: string;
}

export async function getLocalBusinessData(
  location: LocationInput
): Promise<LocalBusinessData> {
  console.log("Fetching local data for:", location);

  return {
    marketDataAvailable: false,
    sources: [],
  };
}