export const calculateWiningChance = (teams, team) => {
    const sumTeamRating = parseFloat(
        team.players
            .reduce((total, player) => total + player.playerRating, 0)
            .toFixed(1)
    );

    const sumTeamsRating = parseFloat(
        teams
            .map((team) =>
                team.players.reduce(
                    (total, player) => total + player.playerRating,
                    0
                )
            )
            .reduce((total, rating) => total + rating, 0)
            .toFixed(1)
    );

    const winningChance = ((sumTeamRating / sumTeamsRating) * 100).toFixed(1);

    return winningChance;
};
