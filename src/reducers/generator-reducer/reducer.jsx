import { generatorInitialState } from "./initialState";

export const generatorReducer = (state, action) => {
    switch (action.type) {
        case "SET_NUMBER_OF_TEAMS":
            return { ...state, numberOfTeams: action.payload };
        case "SET_NUMBER_OF_TEAM_PLAYERS":
            return { ...state, numberOfTeamPlayers: action.payload };
        case "SET_IS_ACCEPTED":
            return { ...state, isAccepted: true };
        case "SET_NAME_OF_PLAYER":
            return { ...state, nameOfPlayer: action.payload };
        case "ADD_PLAYER_TO_LIST":
            return {
                ...state,
                actualListOfPlayers: [
                    ...state.actualListOfPlayers,
                    action.payload,
                ],
                nameOfPlayer: "",
            };
        case "REMOVE_PLAYER_FROM_LIST":
            const updatedListOfPlayers = state.actualListOfPlayers.filter(
                (player) => player !== action.payload
            );
            return {
                ...state,
                actualListOfPlayers: updatedListOfPlayers,
            };
        case "CLEAR_PLAYER_LIST":
            return {
                ...state,
                actualListOfPlayers: [],
            };
        case "SET_POPUP":
            return {
                ...state,
                popup: action.payload,
            };
        case "SET_RESET":
            return generatorInitialState;
        default:
            return state;
    }
};
