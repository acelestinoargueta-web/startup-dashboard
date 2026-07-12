import { Startup } from "@/types";
import { useFilters } from "../../store/useFilters";
import { FilterGroup } from "./FilterGroup";

type Props = {
  data?: Startup[];
  loading?: boolean;
};

export const Filters = ({ data, loading }: Props) => {
  const {
    stage,
    sector,
    country,
    sortBy,
    toggleFilter,
    setSort,
    resetFilters,
  } = useFilters();

  // extraer opciones únicas dinámicamente
  const stages = [...new Set(data?.map((s) => s.stage))];
  const countries = [...new Set(data?.map((s) => s.country))];
  const sectors = [...new Set(data?.flatMap((s) => s.sector))];

  return (
    <div className="mb-6 space-y-10">

      {/* SORT + RESET */}
      <div>

        <button
          onClick={resetFilters}
          disabled={loading}
          className="text-sm text-gray-400 hover:underline mb-5"
        >
          Reset filters
        </button>

        <div className="">
          <p className="text-sm text-gray-400 mb-2">Ordenar por:</p>
          <select
            id={"sort"}
            value={sortBy}
            onChange={(e) => setSort(e.target.value as any)}
            disabled={loading}
            className="
              text-sm
              rounded-md
              px-2
              py-1
              border
              border-gray-300
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              focus:border-blue-500
            "
          >
            <option value="score">Conviction Score</option>
            <option value="funding">Funding</option>
            <option value="year">Founded Year</option>
          </select>
        </div>

      </div>

      {/* FILTERS */}
      <div className="grid gap-4 md:grid-cols-3">
        <FilterGroup
          title="Stage"
          options={stages}
          selected={stage}
          disabled={loading}
          onToggle={(v) => toggleFilter("stage", v)}
        />

        <FilterGroup
          title="Sector"
          options={sectors}
          selected={sector}
          disabled={loading}
          onToggle={(v) => toggleFilter("sector", v)}
        />

        <FilterGroup
          title="Country"
          options={countries}
          selected={country}
          disabled={loading}
          onToggle={(v) => toggleFilter("country", v)}
        />
      </div>

    </div>
  );

};
