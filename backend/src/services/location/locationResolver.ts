import type { LocationInput } from "./locationTypes.js";
import type { LGDRepository } from "./lgdRepository.js";

export async function resolveLocation(
  location: LocationInput,
  repository: LGDRepository
) {
  const state = await repository.findState(location.state);

  if (!state) {
    return null;
  }

  const district = await repository.findDistrict(
    location.district,
    state.code
  );

  if (!district) {
    return null;
  }

  const block = await repository.findBlock(
    location.block,
    district.code
  );

  if (!block) {
    return null;
  }

  const village = await repository.findVillage(
    location.village,
    block.code
  );

  if (!village) {
    return null;
  }

  return {
    village,
    block,
    district,
    state,

    source: "LGD",
    resolvedAt: new Date(),

    // Exact hierarchical match.
    confidence: 1,
  };
}