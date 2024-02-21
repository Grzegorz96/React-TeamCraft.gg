export const eventWrapperStyles = (editedPlayer, editedEvent) => {
    console.log("jestem");
    return {
        borderTopRightRadius: editedPlayer ? 0 : null,
        // borderBottomRightRadius:
        //     editedPlayer && editedEvent.teams[0].players.length <= 3 ? 0 : null,
    };
};
