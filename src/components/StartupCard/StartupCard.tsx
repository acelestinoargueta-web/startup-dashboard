import { Startup } from "../../types";
import "./StartupCard.css";
import { ArrowRight, ArrowUp, ArrowDown } from 'lucide-react';

type Props = {
    startup: Startup;
};

export const StartupCard = ({ startup }: Props) => {
    const {
        name,
        stage,
        country,
        convictionScore,
        trend,
        fundingAmount,
        foundedYear,
    } = startup;


    return (
        <div className="card p-5 rounded-xl transition-shadow duration-300">
            <div className="font-bold flex justify-between" style={{ marginTop: "10px" }}>
                <h3>{name}</h3>
                <p className="flex justify-end">
                    <span className="font-light mr-1">Score:</span>{convictionScore}
                </p>
            </div>
            <div className="barBackground mt-1">
                <div
                    className="barFill"
                    style={{
                        width: `${convictionScore}%`,
                        background: getColor(convictionScore),
                    }}
                />
            </div>
            <div className="columns-2 mt-5">
                <p>{stage}</p>
                <p>{country}</p>
            </div>
            <div className="mt-5" style={{ justifyContent: "space-between", display: "flex" }}>
                {
                    trend === "up" &&
                    <div className={`flex items-center gap-1 text-emerald-600`}>
                        <ArrowUp size={19} />
                    </div>
                }
                {
                    trend === "down" &&
                    <div className={`flex items-center gap-1 text-rose-500`}>
                        <ArrowDown size={19} />
                    </div>
                }
                {
                    trend === "neutral" &&
                    <div className={`flex items-center gap-1 text-gray-400`}>
                        <ArrowRight size={19} />
                    </div>
                }

                <p>${fundingAmount?.toLocaleString()}</p>
                <p>{foundedYear}</p>
            </div>

        </div>
    );
};

const getColor = (value: number) => {
    if (value < 40) return "#ef4444";
    if (value < 70) return "#f59e0b";
    return "#22c55e";
};
