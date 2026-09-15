export interface LocationInput {
  village: string;
  block: string;
  district: string;
  state: string;
}

export interface NormalizedLocation {
  village: string;
  block: string;
  district: string;
  state: string;

  normalizedVillage: string;
  normalizedBlock: string;
  normalizedDistrict: string;
  normalizedState: string;
}