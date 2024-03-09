// Import the initial state for the myTeamsState.
import { myTeamsInitialState } from "./initialState";

// Reducer function for managing the myTeamsState.
export const myTeamsReducer = (state, action) => {
    switch (action.type) {
        // Action to set the edited event and its index.
        case "SET_EDITED_EVENT":
            // Update the state with the edited event and its index.
            return {
                ...state,
                editedEvent: JSON.parse(
                    JSON.stringify(action.payload.eventObject)
                ), // Create a deep copy of the event object to ensure immutability.
                indexOfEditedEvent: action.payload.eventObjectIndex,
            };

        // Action to set the name of a team in the edited event.
        case "SET_TEAM_NAME":
            // Create a deep copy of the teams array to avoid direct state mutation.
            const updatedTeams = JSON.parse(
                JSON.stringify(state.editedEvent.teams)
            );

            // Update the team name at the specified index with the new team name.
            updatedTeams[action.payload.teamIndex].teamName =
                action.payload.teamName;

            // Return the updated state with the modified teams array.
            return {
                ...state,
                editedEvent: {
                    ...state.editedEvent,
                    teams: updatedTeams,
                },
            };

        // Action to set the event name.
        case "SET_EVENT_NAME":
            // Update the event's name in the state without mutating the original event object.
            return {
                ...state,
                editedEvent: {
                    ...state.editedEvent,
                    eventName: action.payload,
                },
            };

        // Action to reset the state to the initial state for myTeams feature.
        case "SET_RESET":
            return myTeamsInitialState;

        // Action to set the player being edited and populate the input fields with their stats.
        case "SET_EDITED_PLAYER":
            // Find the player's stats in the teams of the edited event.
            const playerStats = state.editedEvent.teams.reduce(
                (foundStats, team) => {
                    // Try to find the player in the team.
                    const foundPlayer = team.players.find(
                        ({ playerName }) => playerName === action.payload
                    );

                    // If the player is found, copy their stats.
                    if (foundPlayer) {
                        foundStats = { ...foundPlayer.stats };
                    }

                    return foundStats;
                },
                null
            );

            // Destructure the player's stats or default to an empty object.
            const { kills, deaths, assists } = playerStats || {};

            // Update the state with the edited player and statsInput with their stats.
            return {
                ...state,
                editedPlayer: action.payload,
                statsInputs: {
                    killsInput: kills || "",
                    deathsInput: deaths || "",
                    assistsInput: assists || "",
                },
            };

        // Action to update the input fields for player stats.
        case "SET_STATS_INPUT":
            // Update the specific input field in the statsInputs object based on the action payload.
            return {
                ...state,
                statsInputs: {
                    ...state.statsInputs,
                    [action.payload.input]: action.payload.data,
                },
            };

        // Action to update player stats in the edited event.
        case "SET_PLAYER_STATS":
            // Create a deep copy of the teams array in the edited event to avoid mutating the state directly.
            const newTeams = JSON.parse(
                JSON.stringify(state.editedEvent.teams)
            );

            // Iterate over each team and player in the copied teams array.
            newTeams.forEach((team) => {
                team.players.forEach(({ playerName, stats }) => {
                    // Find the player whose stats are being edited.
                    if (playerName === state.editedPlayer) {
                        // Update the player's stats with the values from the statsInputs object.
                        stats.kills = state.statsInputs.killsInput;
                        stats.deaths = state.statsInputs.deathsInput;
                        stats.assists = state.statsInputs.assistsInput;
                    }
                });
            });

            // Return the updated state with the modified teams array, cleared editedPlayer, and reset statsInputs.
            return {
                ...state,
                editedEvent: { ...state.editedEvent, teams: newTeams },
                editedPlayer: "",
                statsInputs: myTeamsInitialState.statsInputs,
            };

        // Action to set a popup message.
        case "SET_POPUP":
            // Return the updated state with the new popup message.
            return {
                ...state,
                popup: action.payload,
            };

        // Action to set the winner of the event.
        case "SET_WINNER":
            // Return the updated state with the modified teams.
            return {
                ...state,
                editedEvent: {
                    ...state.editedEvent,
                    teams: JSON.parse(
                        JSON.stringify(state.editedEvent.teams)
                    ).map((team, index) => ({
                        ...team,
                        isWinner: index === action.payload,
                    })), // Map through the teams, setting the isWinner property based on the provided index.
                },
            };

        // Default case for the reducer, returns the current state if the action type is not recognized.
        default:
            return state;
    }
};
