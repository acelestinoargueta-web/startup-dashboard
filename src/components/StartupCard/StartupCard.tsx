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


    const signals = Object.fromEntries(
        startup.signals.map(signal => [signal.type, signal])
    );

    const getColor = (value: number) => {
        if (value < 40) return "#ef4444";
        if (value < 70) return "#f59e0b";
        return "#22c55e";
    };

    return (
        <div className="startup-card">
            <div className="startup-card-inner">

                {/* FRONT */}
                <div className="startup-card-front card p-5 rounded-xl">

                    <div
                        className="font-bold flex justify-between"
                        style={{ marginTop: "10px" }}
                    >
                        <h3>{name}</h3>
                        <p className="flex justify-end">
                            <span className="font-light mr-1">Score:</span>
                            {convictionScore}
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

                {/* BACK */}
                <div className="startup-card-back card p-5 rounded-xl">

                    <h3 className="font-bold mb-4">{name}</h3>

                    <div className="signals overflow-y-auto">
                        <div>
                            <strong>Team</strong>
                            <p>{signals.team?.label}</p>
                        </div>

                        <div>
                            <strong>Market</strong>
                            <p>{signals.market?.label}</p>
                        </div>

                        <div>
                            <strong>Product</strong>
                            <p>{signals.product?.label}</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}


