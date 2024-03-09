// Initial state object for the myTeams feature, defining default values for various properties.
export const myTeamsInitialState = {
    // Information about the edited event, initially set to null.
    editedEvent: null,

    // Index of the edited event, initially undefined.
    indexOfEditedEvent: undefined,

    // Information about the edited player, initially an empty string.
    editedPlayer: "",

    // Input values for statistics (kills, deaths, assists), initially set to empty strings.
    statsInputs: { killsInput: "", deathsInput: "", assistsInput: "" },

    // Popup message, initially an empty string.
    popup: "",
};
