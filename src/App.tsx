import { useStartups } from "./hooks/useStartups";
import { useFilters } from "./store/useFilters";
import { applyFilters } from "./utils/filter";
import { sortData } from "./utils/sort";

import { Filters } from "./components/Filters/Filters";
import { StartupCard } from "./components/StartupCard/StartupCard";
import { Startup } from "./types";
import { StartupCardSkeleton } from "./components/Skeleton/StartupCardSkeleton";
import { BrowserRouter } from "react-router-dom";


function App() {
  const { data, isLoading, } = useStartups();
  const filters = useFilters();

  const filtered = applyFilters(data as Startup[], filters);
  const sorted = sortData(filtered, filters.sortBy);


  return (
    <BrowserRouter>
      <div className="app-shell">
        <h1 className="mb-15 text-4xl font-semibold">
          Startup Intelligence Feed
        </h1>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:basis-1/4 lg:basis-1/5">
            <Filters
              data={data as Startup[]}
              loading={isLoading}
            />
          </div>

          {
            isLoading ?
              <StartupCardSkeleton />
              :
              <div className="md:basis-3/4 lg:basis-4/5">
                <div className="grid gap-4">
                  {sorted.map((startup) => (
                    <StartupCard key={startup.id} startup={startup} />
                  ))}
                </div>
              </div>

          }


        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;