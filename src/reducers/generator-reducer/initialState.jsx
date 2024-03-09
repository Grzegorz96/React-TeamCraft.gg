// Initial state object for the generator feature, defining default values for various properties.
export const generatorInitialState = {
    // Number of teams participating, initially undefined.
    numberOfTeams: undefined,

    // Number of players per team, initially undefined.
    numberOfTeamPlayers: undefined,

    // Flag indicating whether team options have been accepted, initially set to false.
    isTeamOptionsAccepted: false,

    // Name of the player, initially an empty string.
    nameOfPlayer: "",

    // Array containing the current list of players, initially empty.
    actualListOfPlayers: [],

    // Popup message, initially an empty string.
    popup: "",

    // Name of the player being edited, initially an empty string.
    nameOfEditingPlayer: "",

    // Array containing the generated teams, initially empty.
    generatedTeams: [],

    // Name of the event, initially an empty string.
    eventName: "",

    // Flag indicating whether the rating mode is on, initially set to false.
    isRatingOn: false,
};
