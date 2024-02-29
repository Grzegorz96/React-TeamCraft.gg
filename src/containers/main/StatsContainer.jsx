import React from "react";
import StatsComponent from "../../components/main/stats-components/StatsComponent";
import { ratingData } from "../../utils/ratingData";

export default function StatsContainer() {
    function calculateOverall(kills, deaths, assists) {
        const points = kills * 2.5 + deaths * -3 + assists * 1.5;

        for (let i = ratingData.length - 1; i >= 0; i--) {
            if (points >= ratingData[i].points) {
                return ratingData[i].rating;
            }
        }

        return ratingData[0].rating;
    }

    function calculateTotalStats(players) {
        let totalStats = { kills: 0, deaths: 0, assists: 0 };

        players.forEach(({ stats: { kills, deaths, assists } }) => {
            totalStats.kills += parseInt(kills, 10);
            totalStats.deaths += parseInt(deaths, 10);
            totalStats.assists += parseInt(assists, 10);
        });

        return `${totalStats.kills}/${totalStats.deaths}/${totalStats.assists}`;
    }

    function allStatsAreValid(players) {
        return players.every((player) => {
            const stats = player.stats;
            return [stats.kills, stats.deaths, stats.assists].every(
                (value) => !!value
            );
        });
    }

    return (
        <StatsComponent
            calculateOverall={calculateOverall}
            calculateTotalStats={calculateTotalStats}
            allStatsAreValid={allStatsAreValid}
        />
    );
}
