// Import necessary dependencies from React and other modules.
import React from "react";
import StatsComponent from "../../components/main/stats-components/StatsComponent";
import { ratingData } from "../../utils/ratingData";

// StatsContainer component responsible for rendering StatsComponent and providing functions as props.
export default function StatsContainer() {
    // Function to calculate overall rating based on kills, deaths, and assists.
    function calculateOverall(kills, deaths, assists) {
        const points = kills * 2.5 + deaths * -3 + assists * 1.5;

        // Iterate over ratingData to find the appropriate rating based on points.
        for (let i = ratingData.length - 1; i >= 0; i--) {
            if (points >= ratingData[i].points) {
                return ratingData[i].rating;
            }
        }

        // Default rating if the user received fewer points than needed for the lowest rating.
        return ratingData[0].rating;
    }

    // Function to calculate total kills, deaths, and assists from an array of players.
    function calculateTotalStats(players) {
        let totalStats = { kills: 0, deaths: 0, assists: 0 };

        // Iterate over players and accumulate stats.
        players.forEach(({ stats: { kills, deaths, assists } }) => {
            totalStats.kills += parseInt(kills, 10);
            totalStats.deaths += parseInt(deaths, 10);
            totalStats.assists += parseInt(assists, 10);
        });

        // Return formatted string of total stats.
        return `${totalStats.kills}/${totalStats.deaths}/${totalStats.assists}`;
    }

    // Function to check if all stats (kills, deaths, assists) are valid for all players.
    function allStatsAreValid(players) {
        // Check if every player has valid stats.
        return players.every((player) => {
            const stats = player.stats;
            return [stats.kills, stats.deaths, stats.assists].every(
                (value) => !!value
            );
        });
    }

    // Render the StatsComponent and pass the functions as props.
    return (
        <StatsComponent
            calculateOverall={calculateOverall}
            calculateTotalStats={calculateTotalStats}
            allStatsAreValid={allStatsAreValid}
        />
    );
}
