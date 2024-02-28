export function sumTeamStats(players) {
    return players.reduce(
        (accumulator, player) => {
            const {
                stats: { kills, deaths, assists },
            } = player;

            accumulator.totalKills += parseInt(kills) || 0;
            accumulator.totalDeaths += parseInt(deaths) || 0;
            accumulator.totalAssists += parseInt(assists) || 0;

            return accumulator;
        },
        {
            totalKills: 0,
            totalDeaths: 0,
            totalAssists: 0,
        }
    );
}
