import React, { useReducer } from "react";
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

export default function GeneratorContainer() {
    const [generatorState, dispatch] = useReducer(
        generatorReducer,
        generatorInitialState
    );
    const navigate = useNavigate();
    const { functions } = useMainData();

    const handleSelectChange = (selectedNumber, type) => {
        dispatch({
            type: type,
            payload: selectedNumber,
        });
        if (generatorState.popup) closePopup();
    };

    const setEventName = (e) => {
        dispatch({
            type: generatorActions.setEventName,
            payload: e.target.value,
        });
    };

    const setTeamName = (teamIndex, e) => {
        dispatch({
            type: generatorActions.setTeamName,
            payload: { teamIndex: teamIndex, teamName: e.target.value },
        });
    };

    const handleAcceptAndBackButton = () => {
        if (generatorState.isTeamOptionsAccepted) {
            dispatch({
                type: generatorActions.setReset,
            });
        } else {
            if (
                generatorState.numberOfTeams &&
                generatorState.numberOfTeamPlayers
            ) {
                dispatch({ type: generatorActions.setIsTeamOptionsAccepted });
            } else {
                dispatch({
                    type: generatorActions.setPopup,
                    payload: "Please fill in required fields. 🙊",
                });
            }
        }
    };

    const setPlayerName = (e) => {
        dispatch({
            type: generatorActions.setNameOfPlayer,
            payload: e.target.value,
        });
        if (generatorState.popup) closePopup();
    };

    const generate = () => {
        if (
            generatorState.actualListOfPlayers.length <
            generatorState.numberOfTeams * generatorState.numberOfTeamPlayers
        ) {
            return;
        }

        if (generatorState.isRatingOn) {
            var teams = generateWithRatings(
                generatorState.actualListOfPlayers,
                generatorState.numberOfTeams
            );
        } else {
            var teams = generateWithoutRatings(
                generatorState.actualListOfPlayers,
                generatorState.numberOfTeams,
                generatorState.numberOfTeamPlayers
            );
        }

        setListOfGeneratedTeams(teams);
        if (generatorState.popup) closePopup();
        if (generatorState.nameOfEditingPlayer) toggleEditPlayerName();
    };

    const acceptGeneratedTeams = () => {
        functions.addAcceptedTeams(
            generatorState.generatedTeams,
            generatorState.eventName
        );
        navigate("/my-teams");
    };

    const editPlayerNameInList = () => {
        if (generatorState.nameOfPlayer) {
            if (
                !generatorState.actualListOfPlayers.some(
                    ({ playerName }) =>
                        playerName === generatorState.nameOfPlayer
                )
            ) {
                dispatch({
                    type: generatorActions.editPlayerNameInList,
                });
            } else {
                dispatch({
                    type: generatorActions.setPopup,
                    payload:
                        "Player already on the list, cannot be changed. 🙊",
                });
            }
        } else {
            dispatch({
                type: generatorActions.setPopup,
                payload: " Oops! 🙊 Cannot change name to empty.",
            });
        }
    };

    const removePlayerFromList = (player) => {
        if (generatorState.nameOfEditingPlayer === player)
            toggleEditPlayerName();
        dispatch({
            type: generatorActions.removePlayerFromList,
            payload: player,
        });
    };

    const toogleRating = () => {
        dispatch({
            type: generatorActions.toogleRatingMode,
        });
    };

    const setRatingForPlayer = (player, ratingValue) => {
        dispatch({
            type: generatorActions.setRating,
            payload: { playerName: player, playerRating: ratingValue },
        });
    };

    const addPlayerToList = () => {
        if (generatorState.nameOfPlayer) {
            if (
                generatorState.actualListOfPlayers.length <
                generatorState.numberOfTeams *
                    generatorState.numberOfTeamPlayers
            ) {
                if (
                    !generatorState.actualListOfPlayers.some(
                        ({ playerName }) =>
                            playerName === generatorState.nameOfPlayer
                    )
                ) {
                    dispatch({
                        type: generatorActions.addPlayerToList,
                    });
                } else {
                    dispatch({
                        type: generatorActions.setPopup,
                        payload:
                            "Player already on the list, can't be added. 🙊",
                    });
                }
            } else {
                dispatch({
                    type: generatorActions.setPopup,
                    payload: "Player limit reached. Can't add more players. 🙊",
                });
            }
        } else {
            dispatch({
                type: generatorActions.setPopup,
                payload: "Oops! 🙊 Player can't be added without a name.",
            });
        }
    };

    const closePopup = () => {
        dispatch({
            type: generatorActions.setPopup,
            payload: "",
        });
    };

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

    const clearPlayersList = () => {
        dispatch({
            type: generatorActions.clearPlayersList,
        });
        if (generatorState.popup) closePopup();
    };

    const setListOfGeneratedTeams = (list) => {
        dispatch({
            type: generatorActions.setGeneratedTeams,
            payload: list,
        });
    };

    const calculateWiningChance = (team) => {
        const sumTeamRating = parseFloat(
            team.players
                .reduce((total, player) => total + player.playerRating, 0)
                .toFixed(1)
        );

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

        const winningChance = ((sumTeamRating / sumTeamsRating) * 100).toFixed(
            1
        );

        return winningChance;
    };

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
