import type {
  LGDRecord,
  LGDRepository,
} from "./lgdRepository.js";

export class LocalLGDRepository implements LGDRepository {
  async findState(
    name: string
  ): Promise<LGDRecord | null> {
    // LGD dataset lookup will be added here.
    return null;
  }

  async findDistrict(
    name: string,
    stateCode: string
  ): Promise<LGDRecord | null> {
    return null;
  }

  async findBlock(
    name: string,
    districtCode: string
  ): Promise<LGDRecord | null> {
    return null;
  }

  async findVillage(
    name: string,
    blockCode: string
  ): Promise<LGDRecord | null> {
    return null;
  }
}