import type {
  LocationInput,
  NormalizedLocation,
} from "./locationTypes.js";

function normalize(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

export function normalizeLocation(
  location: LocationInput
): NormalizedLocation {
  if (
    !location.village?.trim() ||
    !location.block?.trim() ||
    !location.district?.trim() ||
    !location.state?.trim()
  ) {
    throw new Error("Complete location details are required");
  }

  return {
    village: location.village.trim(),
    block: location.block.trim(),
    district: location.district.trim(),
    state: location.state.trim(),

    normalizedVillage: normalize(location.village),
    normalizedBlock: normalize(location.block),
    normalizedDistrict: normalize(location.district),
    normalizedState: normalize(location.state),
  };
}