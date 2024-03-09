// Function to generate conditions for the generate button.
export const generateButtonConditions = ({
    numberOfTeams,
    numberOfTeamPlayers,
    actualListOfPlayers,
    isRatingOn,
}) => {
    // Check if the total number of required player slots is filled.
    if (
        numberOfTeams * numberOfTeamPlayers - actualListOfPlayers.length ===
        0
    ) {
        // If ratings are enabled, check if any player has a null rating.
        if (isRatingOn) {
            return actualListOfPlayers.some(
                ({ playerRating }) => playerRating === null
            );
        } else {
            // Ratings are not enabled, return false.
            return false;
        }
    } else {
        // Not all required player slots are filled, return true.
        return true;
    }
};
