import { generatorInitialState } from "./initialState";

export const generatorReducer = (state, action) => {
    switch (action.type) {
        case "SET_NUMBER_OF_TEAMS":
            return { ...state, numberOfTeams: action.payload };
        case "SET_NUMBER_OF_TEAM_PLAYERS":
            return { ...state, numberOfTeamPlayers: action.payload };
        case "SET_IS_TEAM_OPTIONS_ACCEPTED":
            return { ...state, isTeamOptionsAccepted: true };
        case "SET_NAME_OF_PLAYER":
            return { ...state, nameOfPlayer: action.payload };
        case "ADD_PLAYER_TO_LIST":
            return {
                ...state,
                actualListOfPlayers: [
                    ...state.actualListOfPlayers,
                    { playerName: state.nameOfPlayer, playerRating: null },
                ],
                nameOfPlayer: "",
            };
        case "EDIT_PLAYER_NAME_IN_LIST":
            const indexOfElement = state.actualListOfPlayers.findIndex(
                ({ playerName }) => playerName === state.nameOfEditingPlayer
            );

            if (indexOfElement >= 0) {
                const editedListOfPlayers = JSON.parse(
                    JSON.stringify(state.actualListOfPlayers)
                );
                editedListOfPlayers[indexOfElement].playerName =
                    state.nameOfPlayer;

                return {
                    ...state,
                    actualListOfPlayers: editedListOfPlayers,
                    nameOfPlayer: "",
                    nameOfEditingPlayer: "",
                };
            } else {
                return {
                    ...state,
                    popup: "Oops! Something went wrong while editing the player.",
                };
            }
        case "REMOVE_PLAYER_FROM_LIST":
            const updatedListOfPlayers = state.actualListOfPlayers.filter(
                ({ playerName }) => playerName !== action.payload
            );
            return {
                ...state,
                actualListOfPlayers: updatedListOfPlayers,
            };
        case "CLEAR_PLAYERS_LIST":
            return {
                ...state,
                actualListOfPlayers: [],
                nameOfEditingPlayer: "",
                nameOfPlayer: "",
                isRatingOn: false,
            };
        case "SET_POPUP":
            return {
                ...state,
                popup: action.payload,
            };
        case "SET_RESET":
            return generatorInitialState;
        case "SET_NAME_OF_EDITING_PLAYER":
            return {
                ...state,
                nameOfEditingPlayer: action.payload,
            };
        case "SET_GENERATED_TEAMS":
            return {
                ...state,
                generatedTeams: action.payload,
            };
        case "SET_EVENT_NAME":
            return {
                ...state,
                eventName: action.payload,
            };
        case "SET_TEAM_NAME":
            const updatedGeneratedTeams = JSON.parse(
                JSON.stringify(state.generatedTeams)
            );
            updatedGeneratedTeams[action.payload.teamIndex].teamName =
                action.payload.teamName;
            return {
                ...state,
                generatedTeams: updatedGeneratedTeams,
            };
        case "TOOGLE_RATING_MODE":
            return {
                ...state,
                isRatingOn: !state.isRatingOn,
            };
        case "SET_RATING":
            const index = state.actualListOfPlayers.findIndex(
                ({ playerName }) => playerName === action.payload.playerName
            );

            if (index >= 0) {
                const editedListOfPlayers = JSON.parse(
                    JSON.stringify(state.actualListOfPlayers)
                );
                editedListOfPlayers[index].playerRating =
                    action.payload.playerRating;

                return {
                    ...state,
                    actualListOfPlayers: editedListOfPlayers,
                };
            } else {
                return {
                    ...state,
                    popup: "Oops! Something went wrong while rating the player.",
                };
            }

        default:
            return state;
    }
};
