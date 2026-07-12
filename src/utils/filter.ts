import { Startup } from "../types";

export const applyFilters = (
  data: Startup[],
  filters: {
    stage: string[];
    sector: string[];
    country: string[];
  }
) => {
    if (data === undefined) {
        return [];
    }
    

    return data.filter((s) => {
    const matchStage =
      !filters.stage.length || filters.stage.includes(s.stage);

    const matchCountry =
      !filters.country.length || filters.country.includes(s.country);

    const matchSector =
      !filters.sector.length ||
      s.sector.some((sec) => filters.sector.includes(sec));

    return matchStage && matchCountry && matchSector;
  });
  
};