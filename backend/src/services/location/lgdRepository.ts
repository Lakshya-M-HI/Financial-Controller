import type { GeographicLevel } from "../feasibility/dataSourceService.js";

export interface LGDRecord {
  name: string;
  code: string;
  level: GeographicLevel;
  parentCode?: string;
}

export interface LGDRepository {
  findState(name: string): Promise<LGDRecord | null>;

  findDistrict(
    name: string,
    stateCode: string
  ): Promise<LGDRecord | null>;

  findBlock(
    name: string,
    districtCode: string
  ): Promise<LGDRecord | null>;

  findVillage(
    name: string,
    blockCode: string
  ): Promise<LGDRecord | null>;
}