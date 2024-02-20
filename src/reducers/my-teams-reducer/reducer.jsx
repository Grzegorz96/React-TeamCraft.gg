import { myTeamsInitialState } from "./initialState";

export const myTeamsReducer = (state, action) => {
    switch (action.type) {
        case "SET_EDITED_EVENT":
            return {
                ...state,
                editedEvent: JSON.parse(
                    JSON.stringify(action.payload.eventObject)
                ),
                indexOfEditedEvent: action.payload.eventObjectIndex,
            };
        case "SET_TEAM_NAME":
            const updatedTeams = JSON.parse(
                JSON.stringify(state.editedEvent.teams)
            );
            updatedTeams[action.payload.teamIndex].teamName =
                action.payload.teamName;
            return {
                ...state,
                editedEvent: {
                    ...state.editedEvent,
                    teams: updatedTeams,
                },
            };
        case "SET_EVENT_NAME":
            return {
                ...state,
                editedEvent: {
                    ...state.editedEvent,
                    eventName: action.payload,
                },
            };
        case "SET_RESET":
            return myTeamsInitialState;
        case "SET_EDITED_PLAYER":
            return {
                ...state,
                editedPlayer: action.payload,
                statsInputs: myTeamsInitialState.statsInputs,
            };
        case "SET_STATS_INPUT":
            return {
                ...state,
                statsInputs: {
                    ...state.statsInputs,
                    [action.payload.input]: action.payload.data,
                },
            };
        // case "SET_PLAYER_STATS":

        //     return {};
        default:
            return state;
    }
};
