// Function to generate styles for an event wrapper based on editedPlayer and editedEvent.
export const eventWrapperStyles = (editedPlayer, editedEvent) => {
    return {
        // Adjust the top right border radius if editedPlayer is present.
        borderTopRightRadius: editedPlayer ? 0 : null,

        // Adjust the bottom right border radius if editedPlayer and specific condition are met.
        borderBottomRightRadius:
            editedPlayer && editedEvent.teams[0].players.length <= 3 ? 0 : null,

        // Add right margin if editedPlayer is present.
        marginRight: editedPlayer ? 48 : null,
    };
};
