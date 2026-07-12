import { Startup } from "../types";

export const sortData = (data: Startup[], sortBy: string) => {
    const sorted = [...data];

    switch (sortBy) {
        case "score":
            return sorted.sort((a, b) => b.convictionScore - a.convictionScore);

        case "funding":
            return sorted.sort((a, b) => {
                if (a.fundingAmount === undefined && b.fundingAmount === undefined) {
                    return 0;
                }

                if (a.fundingAmount === undefined) {
                    return 1; // a va al final
                }

                if (b.fundingAmount === undefined) {
                    return -1; // b va al final
                }

                return b.fundingAmount - a.fundingAmount;
            });

        case "year":
            return sorted.sort((a, b) => b.foundedYear - a.foundedYear);

        default:
            return sorted;
    }
};