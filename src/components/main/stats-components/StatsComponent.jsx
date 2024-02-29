import React from "react";
import DisplayEventsStatsComponent from "./DisplayEventsStatsComponent";

export default function StatsComponent({
    calculateOverall,
    calculateTotalStats,
    allStatsAreValid,
}) {
    return (
        <div className="main__stats">
            <DisplayEventsStatsComponent
                calculateOverall={calculateOverall}
                calculateTotalStats={calculateTotalStats}
                allStatsAreValid={allStatsAreValid}
            />
        </div>
    );
}
