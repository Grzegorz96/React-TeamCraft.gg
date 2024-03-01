export const generateButtonConditions = ({
    numberOfTeams,
    numberOfTeamPlayers,
    actualListOfPlayers,
    isRatingOn,
}) => {
    if (
        numberOfTeams * numberOfTeamPlayers - actualListOfPlayers.length ===
        0
    ) {
        if (isRatingOn) {
            return actualListOfPlayers.some(
                ({ playerRating }) => playerRating === null
            );
        } else {
            return false;
        }
    } else {
        return true;
    }
};
