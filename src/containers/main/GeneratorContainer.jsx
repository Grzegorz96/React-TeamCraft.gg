// Import necessary dependencies from React and other modules.
import React, { useReducer } from "react";

// Import GeneratorComponent and other related items.
import GeneratorComponent from "../../components/main/generator-components/GeneratorComponent";
import { generatorInitialState } from "../../reducers/generator-reducer/initialState";
import { generatorReducer } from "../../reducers/generator-reducer/reducer";
import { generatorActions } from "../../reducers/generator-reducer/actionTypes";
import { useMainData } from "../../context/MainProvider";
import { useNavigate } from "react-router-dom";
import {
    generateWithRatings,
    generateWithoutRatings,
} from "../../utils/generatorAlgorithm";

// Define a functional component named GeneratorContainer.
export default function GeneratorContainer() {
    // Use useReducer hook to manage state with generatorReducer and initial state.
    const [generatorState, dispatch] = useReducer(
        generatorReducer,
        generatorInitialState
    );

    // Get the navigate function from react-router-dom.
    const navigate = useNavigate();

    // Get functions from MainProvider context.
    const { functions } = useMainData();

    // Event handler for changing selected options in the generator.
    const handleSelectChange = (selectedNumber, type) => {
        // Dispatch an action to update the state based on the selected options.
        dispatch({
            type: type,
            payload: selectedNumber,
        });

        // Close the popup if it is open.
        if (generatorState.popup) closePopup();
    };

    // Event handler for setting the event name.
    const setEventName = (e) => {
        // Dispatch an action to set the event name in the state.
        dispatch({
            type: generatorActions.setEventName,
            payload: e.target.value,
        });
    };

    // Event handler for setting the team name.
    const setTeamName = (teamIndex, e) => {
        // Dispatch an action to set the team name in the state.
        dispatch({
            type: generatorActions.setTeamName,
            payload: { teamIndex: teamIndex, teamName: e.target.value },
        });
    };

    // Event handler for accepting or going back in the generator.
    const handleAcceptAndBackButton = () => {
        // Check if team options are accepted.
        if (generatorState.isTeamOptionsAccepted) {
            // If accepted, reset the generator state.
            dispatch({
                type: generatorActions.setReset,
            });
        } else {
            // If not accepted, check if the required fields (numberOfTeams and numberOfTeamPlayers) are filled.
            if (
                generatorState.numberOfTeams &&
                generatorState.numberOfTeamPlayers
            ) {
                // If filled, set the isTeamOptionsAccepted flag to true.
                dispatch({ type: generatorActions.setIsTeamOptionsAccepted });
            } else {
                // If required fields are not filled, show an error popup.
                dispatch({
                    type: generatorActions.setPopup,
                    payload: "Please fill in required fields. 🙊",
                });
            }
        }
    };

    // Event handler for setting the player name.
    const setPlayerName = (e) => {
        // Dispatch an action to set the player name in the state.
        dispatch({
            type: generatorActions.setNameOfPlayer,
            payload: e.target.value,
        });

        // Close the popup if it is open
        if (generatorState.popup) closePopup();
    };

    // Function for generating teams based on specified conditions.
    const generate = () => {
        // Check if there are enough players to form the required number of teams.
        if (
            generatorState.actualListOfPlayers.length <
            generatorState.numberOfTeams * generatorState.numberOfTeamPlayers
        ) {
            // If not, exit the function without generating teams.
            return;
        }

        // Determine whether to generate teams with ratings or without based on the rating mode.
        if (generatorState.isRatingOn) {
            // Generate teams with ratings using the generateWithRatings function.
            var teams = generateWithRatings(
                generatorState.actualListOfPlayers,
                generatorState.numberOfTeams
            );
        } else {
            // Generate teams without ratings using the generateWithoutRatings function.
            var teams = generateWithoutRatings(
                generatorState.actualListOfPlayers,
                generatorState.numberOfTeams,
                generatorState.numberOfTeamPlayers
            );
        }

        // Set the list of generated teams in the state.
        setListOfGeneratedTeams(teams);

        // Close the popup if it is open
        if (generatorState.popup) closePopup();

        // Toggle edit player name if a player is being edited
        if (generatorState.nameOfEditingPlayer) toggleEditPlayerName();
    };

    // Event handler for accepting the generated teams.
    const acceptGeneratedTeams = () => {
        // Call the addAcceptedTeams function from the provided functions, which generate teams in global state.
        functions.addAcceptedTeams(
            generatorState.generatedTeams,
            generatorState.eventName
        );

        // Use the navigate function from react-router-dom to navigate to "/my-teams" route.
        navigate("/my-teams");
    };

    // Event handler for editing player name in the list.
    const editPlayerNameInList = () => {
        // Check if the player has a name.
        if (generatorState.nameOfPlayer) {
            // Check if the player is not already in the list.
            if (
                !generatorState.actualListOfPlayers.some(
                    ({ playerName }) =>
                        playerName === generatorState.nameOfPlayer
                )
            ) {
                // Dispatch an action to edit the player name in the list.
                dispatch({
                    type: generatorActions.editPlayerNameInList,
                });
            } else {
                // Display a popup if the player is already in the list.
                dispatch({
                    type: generatorActions.setPopup,
                    payload:
                        "Player already on the list, cannot be changed. 🙊",
                });
            }
        } else {
            // Display a popup if the player has no name.
            dispatch({
                type: generatorActions.setPopup,
                payload: " Oops! 🙊 Cannot change name to empty.",
            });
        }
    };

    // Event handler for removing a player from the list.
    const removePlayerFromList = (player) => {
        // Check if the player being edited is the one being removed, and if so, toggle the edit player name state.
        if (generatorState.nameOfEditingPlayer === player)
            toggleEditPlayerName();
        // Dispatch an action to remove the specified player from the list.
        dispatch({
            type: generatorActions.removePlayerFromList,
            payload: player,
        });
    };

    // Event handler for toggling the rating mode.
    const toogleRating = () => {
        // Dispatch an action to toggle the rating mode.
        dispatch({
            type: generatorActions.toogleRatingMode,
        });
    };

    // Event handler for setting the rating for a player.
    const setRatingForPlayer = (player, ratingValue) => {
        // Dispatch an action to set the rating for a specific player.
        dispatch({
            type: generatorActions.setRating,
            payload: { playerName: player, playerRating: ratingValue },
        });
    };

    // Event handler for adding a player to the list.
    const addPlayerToList = () => {
        // Check if the player has a name
        if (generatorState.nameOfPlayer) {
            // Check if the number of players in the list is less than the allowed limit
            if (
                generatorState.actualListOfPlayers.length <
                generatorState.numberOfTeams *
                    generatorState.numberOfTeamPlayers
            ) {
                // Check if the player is not already in the list.
                if (
                    !generatorState.actualListOfPlayers.some(
                        ({ playerName }) =>
                            playerName === generatorState.nameOfPlayer
                    )
                ) {
                    // Dispatch an action to add the player to the list.
                    dispatch({
                        type: generatorActions.addPlayerToList,
                    });
                } else {
                    // Display a popup if the player is already in the list.
                    dispatch({
                        type: generatorActions.setPopup,
                        payload:
                            "Player already on the list, can't be added. 🙊",
                    });
                }
            } else {
                // Display a popup if the player limit is reached
                dispatch({
                    type: generatorActions.setPopup,
                    payload: "Player limit reached. Can't add more players. 🙊",
                });
            }
        } else {
            // Display a popup if the player has no name.
            dispatch({
                type: generatorActions.setPopup,
                payload: "Oops! 🙊 Player can't be added without a name.",
            });
        }
    };

    // Event handler for closing the popup.
    const closePopup = () => {
        dispatch({
            type: generatorActions.setPopup,
            payload: "",
        });
    };

    // Event handler for toggling the edit player name mode.
    const toggleEditPlayerName = (player) => {
        dispatch({
            type: generatorActions.setNameOfEditingPlayer,
            payload: player ? player : "",
        });
        dispatch({
            type: generatorActions.setNameOfPlayer,
            payload: player ? player : "",
        });
    };

    // Event handler for clearing the players list.
    const clearPlayersList = () => {
        dispatch({
            type: generatorActions.clearPlayersList,
        });
        if (generatorState.popup) closePopup();
    };

    // Function for setting the list of generated teams.
    const setListOfGeneratedTeams = (list) => {
        dispatch({
            type: generatorActions.setGeneratedTeams,
            payload: list,
        });
    };

    // Function to calculate the winning chance of a given team.
    const calculateWiningChance = (team) => {
        // Calculate the sum of player ratings for the current team.
        const sumTeamRating = parseFloat(
            team.players
                .reduce((total, player) => total + player.playerRating, 0)
                .toFixed(1)
        );

        // Calculate the total sum of player ratings for all generated teams.
        const sumTeamsRating = parseFloat(
            generatorState.generatedTeams
                .map((team) =>
                    team.players.reduce(
                        (total, player) => total + player.playerRating,
                        0
                    )
                )
                .reduce((total, rating) => total + rating, 0)
                .toFixed(1)
        );

        // Calculate the winning chance as a percentage.
        const winningChance = ((sumTeamRating / sumTeamsRating) * 100).toFixed(
            1
        );

        // Return the calculated winning chance.
        return winningChance;
    };

    // Render the GeneratorComponent with various props including the calculated winning chance.
    return (
        <GeneratorComponent
            generatorState={generatorState}
            handleSelectChange={handleSelectChange}
            handleAcceptAndBackButton={handleAcceptAndBackButton}
            setPlayerName={setPlayerName}
            addPlayerToList={addPlayerToList}
            closePopup={closePopup}
            editPlayerNameInList={editPlayerNameInList}
            removePlayerFromList={removePlayerFromList}
            clearPlayersList={clearPlayersList}
            toggleEditPlayerName={toggleEditPlayerName}
            generate={generate}
            setListOfGeneratedTeams={setListOfGeneratedTeams}
            acceptGeneratedTeams={acceptGeneratedTeams}
            setEventName={setEventName}
            setTeamName={setTeamName}
            toogleRating={toogleRating}
            setRatingForPlayer={setRatingForPlayer}
            calculateWiningChance={calculateWiningChance}
        />
    );
}
