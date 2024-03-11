import React from "react";
// Import the DisplayEventsStatsComponent for rendering event statistics.
import DisplayEventsStatsComponent from "./DisplayEventsStatsComponent";

// Define the StatsComponent functional component that takes in props.
export default function StatsComponent({
    calculateOverall,
    calculateTotalStats,
    allStatsAreValid,
}) {
    // Render the main container for the statistics component.
    return (
        <div className="main__stats">
            {/* Render the DisplayEventsStatsComponent with specific props. */}
            <DisplayEventsStatsComponent
                calculateOverall={calculateOverall}
                calculateTotalStats={calculateTotalStats}
                allStatsAreValid={allStatsAreValid}
            />
        </div>
    );
}
