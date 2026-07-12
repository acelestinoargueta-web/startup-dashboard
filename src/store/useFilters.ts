import { create } from "zustand";

type FiltersState = {
  stage: string[];
  sector: string[];
  country: string[];
  sortBy: "score" | "funding" | "year";

  toggleFilter: (type: "stage" | "sector" | "country", value: string) => void;
  setSort: (sort: FiltersState["sortBy"]) => void;
  resetFilters: () => void;
};

export const useFilters = create<FiltersState>((set) => ({
  stage: [],
  sector: [],
  country: [],
  sortBy: "score",

  toggleFilter: (type, value) =>
    set((state) => {
      const current = state[type];
      const exists = current.includes(value);

      return {
        [type]: exists
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    }),

  setSort: (sort) => set({ sortBy: sort }),

  resetFilters: () =>
    set({
      stage: [],
      sector: [],
      country: [],
    }),
}));
