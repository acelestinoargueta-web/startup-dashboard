import { useQuery } from "@tanstack/react-query";
import { fetchStartups } from "../api/mock";


export const useStartups = () => {
  return useQuery({
    queryKey: ["startups"],
    queryFn: fetchStartups,
    staleTime: 30_000,
  });
};
