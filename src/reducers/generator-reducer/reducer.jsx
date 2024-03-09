// Import the initial state for the generatorState.
import { generatorInitialState } from "./initialState";

// Reducer function for managing the generatorState.
export const generatorReducer = (state, action) => {
    switch (action.type) {
        // Actions related to setting the number of teams.
        case "SET_NUMBER_OF_TEAMS":
            // Return the updated state with the numberOfTeams set to the value provided in the action payload.
            return { ...state, numberOfTeams: action.payload };

        // Actions related to setting the number of players per team.
        case "SET_NUMBER_OF_TEAM_PLAYERS":
            // Return the updated state with the numberOfTeamPlayers set to the value provided in the action payload.
            return { ...state, numberOfTeamPlayers: action.payload };

        // Action to indicate that team options have been accepted.
        case "SET_IS_TEAM_OPTIONS_ACCEPTED":
            // Return the updated state with the isTeamOptionsAccepted set to true.
            return { ...state, isTeamOptionsAccepted: true };

        // Action to set the name of the player.
        case "SET_NAME_OF_PLAYER":
            // Return the updated state with the new name of the player.
            return { ...state, nameOfPlayer: action.payload };

        // Action to add a player to the list.
        case "ADD_PLAYER_TO_LIST":
            // Return the updated state with a new player added to the list.
            return {
                ...state,
                actualListOfPlayers: [
                    ...state.actualListOfPlayers,
                    { playerName: state.nameOfPlayer, playerRating: null },
                ],
                nameOfPlayer: "", // Reset the nameOfPlayer after adding the player.
            };

        // Action to edit the name of a player in the list.
        case "EDIT_PLAYER_NAME_IN_LIST":
            // Find the index of the player with the specified name in the current list.
            const indexOfElement = state.actualListOfPlayers.findIndex(
                ({ playerName }) => playerName === state.nameOfEditingPlayer
            );

            // Check if the player with the specified name exists in the list.
            if (indexOfElement >= 0) {
                // Create a deep copy of the current list of players.
                const editedListOfPlayers = JSON.parse(
                    JSON.stringify(state.actualListOfPlayers)
                );

                // Update the playerName of the specified player with the new name.
                editedListOfPlayers[indexOfElement].playerName =
                    state.nameOfPlayer;

                // Return the updated state with the list of players edited, and related properties reset.
                return {
                    ...state,
                    actualListOfPlayers: editedListOfPlayers,
                    nameOfPlayer: "",
                    nameOfEditingPlayer: "",
                };
            } else {
                // Return the state with a popup message in case of an error.
                return {
                    ...state,
                    popup: "Oops! Something went wrong while editing the player.",
                };
            }

        // Action to remove a player from the list.
        case "REMOVE_PLAYER_FROM_LIST":
            // Filter the current list of players to exclude the player with the specified name.
            const updatedListOfPlayers = state.actualListOfPlayers.filter(
                ({ playerName }) => playerName !== action.payload
            );

            // Return the updated state with the list of players excluding the removed player.
            return {
                ...state,
                actualListOfPlayers: updatedListOfPlayers,
            };

        // Action to clear the list of players.
        case "CLEAR_PLAYERS_LIST":
            // Return the updated state with the list of players cleared, and other related properties reset.
            return {
                ...state,
                actualListOfPlayers: [],
                nameOfEditingPlayer: "",
                nameOfPlayer: "",
                isRatingOn: false,
            };

        // Action to set a popup message.
        case "SET_POPUP":
            // Return the updated state with the provided popup message.
            return {
                ...state,
                popup: action.payload,
            };

        // Action to reset the state to the initial state.
        case "SET_RESET":
            return generatorInitialState;

        // Action to set the name of the player being edited.
        case "SET_NAME_OF_EDITING_PLAYER":
            // Return the updated state with the provided player name for editing.
            return {
                ...state,
                nameOfEditingPlayer: action.payload,
            };

        // Action to set the generated teams.
        case "SET_GENERATED_TEAMS":
            // Return the updated state with the provided array of generated teams.
            return {
                ...state,
                generatedTeams: action.payload,
            };

        // Action to set the event name.
        case "SET_EVENT_NAME":
            // Return the updated state with the provided event name.
            return {
                ...state,
                eventName: action.payload,
            };

        // Action to set the team name.
        case "SET_TEAM_NAME":
            // Create a deep copy of the generated teams array to avoid mutating the state directly.
            const updatedGeneratedTeams = JSON.parse(
                JSON.stringify(state.generatedTeams)
            );

            // Update the team name in the copied array based on the provided team index.
            updatedGeneratedTeams[action.payload.teamIndex].teamName =
                action.payload.teamName;

            // Return the updated state with the modified array of generated teams.
            return {
                ...state,
                generatedTeams: updatedGeneratedTeams,
            };

        // Action to toggle the rating mode.
        case "TOOGLE_RATING_MODE":
            // Toggle the value of isRatingOn by negating its current value.
            return {
                ...state,
                isRatingOn: !state.isRatingOn,
            };

        // Action to set the rating for a player.
        case "SET_RATING":
            // Find the index of the player in the list based on the player's name.
            const index = state.actualListOfPlayers.findIndex(
                ({ playerName }) => playerName === action.payload.playerName
            );

            // Check if the player was found in the list.
            if (index >= 0) {
                // Create a deep copy of the list of players to avoid mutating the state directly.
                const editedListOfPlayers = JSON.parse(
                    JSON.stringify(state.actualListOfPlayers)
                );

                // Update the player's rating in the copied list.
                editedListOfPlayers[index].playerRating =
                    action.payload.playerRating;

                // Return the updated state with the modified list of players.
                return {
                    ...state,
                    actualListOfPlayers: editedListOfPlayers,
                };
            } else {
                // Return the state with a popup message in case of an error.
                return {
                    ...state,
                    popup: "Oops! Something went wrong while rating the player.",
                };
            }

        // Default case: return the current state if the action type is unknown.
        default:
            return state;
    }
};
