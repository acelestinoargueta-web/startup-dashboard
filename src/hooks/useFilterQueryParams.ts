import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useFilters } from "../store/useFilters";

export const useFilterQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const initialized = useRef(false);

    const {
        stage,
        sector,
        country,
        sortBy,
        setFilters,
    } = useFilters();

    // URL -> STORE
    useEffect(() => {
        if (initialized.current) return;

        setFilters({
            stage: searchParams.get("stage")?.split(",").filter(Boolean) ?? [],
            sector: searchParams.get("sector")?.split(",").filter(Boolean) ?? [],
            country: searchParams.get("country")?.split(",").filter(Boolean) ?? [],
            sortBy:
                (searchParams.get("sortBy") as
                    | "score"
                    | "funding"
                    | "year") ?? "score",
        });

        initialized.current = true;
    }, [searchParams, setFilters]);

    // STORE -> URL
    useEffect(() => {
        if (!initialized.current) return;

        const params = new URLSearchParams();

        if (stage.length) {
            params.set("stage", stage.join(","));
        }

        if (sector.length) {
            params.set("sector", sector.join(","));
        }

        if (country.length) {
            params.set("country", country.join(","));
        }

        if (sortBy !== "score") {
            params.set("sortBy", sortBy);
        }

        setSearchParams(params, { replace: true });
    }, [
        stage,
        sector,
        country,
        sortBy,
        setSearchParams,
    ]);
};