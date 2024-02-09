import { generatorInitialState } from "./initialState";

export const generatorReducer = (state, action) => {
    switch (action.type) {
        case "SET_NUMBER_OF_TEAMS":
            return { ...state, numberOfTeams: action.payload };
        case "SET_NUMBER_OF_TEAM_PLAYERS":
            return { ...state, numberOfTeamPlayers: action.payload };
        case "SET_TEAM_OPTIONS_IS_ACCEPTED":
            return { ...state, teamOptionsIsAccepted: true };
        case "SET_NAME_OF_PLAYER":
            return { ...state, nameOfPlayer: action.payload };
        case "ADD_PLAYER_TO_LIST":
            return {
                ...state,
                actualListOfPlayers: [
                    ...state.actualListOfPlayers,
                    state.nameOfPlayer,
                ],
                nameOfPlayer: "",
            };
        case "EDIT_PLAYER_IN_LIST":
            const indexOfElement = state.actualListOfPlayers.indexOf(
                state.nameOfEditingPlayer
            );

            if (indexOfElement >= 0) {
                const editedListOfPlayers = [...state.actualListOfPlayers];
                editedListOfPlayers[indexOfElement] = state.nameOfPlayer;
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
                (player) => player !== action.payload
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

        default:
            return state;
    }
};
