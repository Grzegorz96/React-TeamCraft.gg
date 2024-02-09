import React, { useReducer } from "react";
import GeneratorComponent from "../../components/main/generator-components/GeneratorComponent";
import { generatorInitialState } from "../../reducers/generator-reducer/initialState";
import { generatorReducer } from "../../reducers/generator-reducer/reducer";
import { generatorActions } from "../../reducers/generator-reducer/actionTypes";

export default function GeneratorContainer() {
    const [generatorState, dispatch] = useReducer(
        generatorReducer,
        generatorInitialState
    );
    console.log(generatorState);
    const handleSelectChange = (e, type) => {
        const selectedNumber = parseInt(e.target.value, 10);
        dispatch({
            type: type,
            payload: selectedNumber,
        });
    };

    const handleToggleButton = () => {
        if (generatorState.teamOptionsIsAccepted) {
            dispatch({
                type: generatorActions.setReset,
            });
        } else {
            dispatch({ type: generatorActions.setTeamOptionsIsAccepted });
        }
    };

    const setPlayerName = (e) => {
        dispatch({
            type: generatorActions.setNameOfPlayer,
            payload: e.target.value,
        });
        if (generatorState.popup) closePopup();
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
        if (generatorState.nameOfEditingPlayer === player) undoEditPlayerName();
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

    const editPlayerName = (player) => {
        dispatch({
            type: generatorActions.setNameOfEditingPlayer,
            payload: player,
        });
        dispatch({
            type: generatorActions.setNameOfPlayer,
            payload: player,
        });
    };

    const undoEditPlayerName = () => {
        dispatch({
            type: generatorActions.setNameOfEditingPlayer,
            payload: "",
        });
        dispatch({
            type: generatorActions.setNameOfPlayer,
            payload: "",
        });
    };

    const clearPlayersList = () => {
        dispatch({
            type: generatorActions.clearPlayersList,
        });
        if (generatorState.popup) closePopup();
    };

    return (
        <GeneratorComponent
            generatorState={generatorState}
            handleSelectChange={handleSelectChange}
            handleToggleButton={handleToggleButton}
            setPlayerName={setPlayerName}
            addPlayerToList={addPlayerToList}
            closePopup={closePopup}
            editPlayerName={editPlayerName}
            undoEditPlayerName={undoEditPlayerName}
            editPlayerInList={editPlayerInList}
            removePlayerFromList={removePlayerFromList}
            clearPlayersList={clearPlayersList}
        />
    );
}
