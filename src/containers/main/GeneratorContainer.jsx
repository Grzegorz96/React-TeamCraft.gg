import React, { useReducer } from "react";
import GeneratorComponent from "../../components/main/generator-components/GeneratorComponent";
import { generatorInitialState } from "../../reducers/generator-reducer/initialState";
import { generatorReducer } from "../../reducers/generator-reducer/reducer";
import { generatorActions } from "../../reducers/generator-reducer/actionTypes";
import { useMainData } from "../../context/MainProvider";
import { useNavigate } from "react-router-dom";

export default function GeneratorContainer() {
    const [generatorState, dispatch] = useReducer(
        generatorReducer,
        generatorInitialState
    );
    const navigate = useNavigate();
    const { functions } = useMainData();
    console.log(generatorState);
    const handleSelectChange = (e, type) => {
        const selectedNumber = parseInt(e.target.value, 10);
        dispatch({
            type: type,
            payload: selectedNumber,
        });
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
            dispatch({ type: generatorActions.setIsTeamOptionsAccepted });
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
        const shuffledList = [...generatorState.actualListOfPlayers].sort(
            () => Math.random() - 0.5
        );
        const teams = [];
        for (let i = 0; i < generatorState.numberOfTeams; i++) {
            const team = shuffledList.slice(
                i * generatorState.numberOfTeamPlayers,
                (i + 1) * generatorState.numberOfTeamPlayers
            );
            teams.push({ players: team, teamName: "" });
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

    const editPlayerInList = () => {
        if (generatorState.nameOfPlayer) {
            if (
                !generatorState.actualListOfPlayers.includes(
                    generatorState.nameOfPlayer
                )
            ) {
                dispatch({
                    type: generatorActions.editPlayerInList,
                });
            } else {
                dispatch({
                    type: generatorActions.setPopup,
                    payload: "Player already on the list, cannot be changed.",
                });
            }
        } else {
            dispatch({
                type: generatorActions.setPopup,
                payload: "Cannot change name to empty.",
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

    const addPlayerToList = () => {
        if (generatorState.nameOfPlayer) {
            if (
                generatorState.actualListOfPlayers.length <
                generatorState.numberOfTeams *
                    generatorState.numberOfTeamPlayers
            ) {
                if (
                    !generatorState.actualListOfPlayers.includes(
                        generatorState.nameOfPlayer
                    )
                ) {
                    dispatch({
                        type: generatorActions.addPlayerToList,
                    });
                } else {
                    dispatch({
                        type: generatorActions.setPopup,
                        payload: "Player already on the list, cannot be added.",
                    });
                }
            } else {
                dispatch({
                    type: generatorActions.setPopup,
                    payload:
                        "Player limit reached. Unable to add more players.",
                });
            }
        } else {
            dispatch({
                type: generatorActions.setPopup,
                payload: "Player cannot be added without a name.",
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

    return (
        <GeneratorComponent
            generatorState={generatorState}
            handleSelectChange={handleSelectChange}
            handleAcceptAndBackButton={handleAcceptAndBackButton}
            setPlayerName={setPlayerName}
            addPlayerToList={addPlayerToList}
            closePopup={closePopup}
            editPlayerInList={editPlayerInList}
            removePlayerFromList={removePlayerFromList}
            clearPlayersList={clearPlayersList}
            toggleEditPlayerName={toggleEditPlayerName}
            generate={generate}
            setListOfGeneratedTeams={setListOfGeneratedTeams}
            acceptGeneratedTeams={acceptGeneratedTeams}
            setEventName={setEventName}
            setTeamName={setTeamName}
        />
    );
}
