import React, { useReducer } from "react";
import GeneratorComponent from "../../components/main/GeneratorComponent";
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
        if (generatorState.isAccepted) {
            dispatch({
                type: generatorActions.setReset,
            });
        } else {
            dispatch({ type: generatorActions.setIsAccepted });
        }
    };

    const handleSetPlayerName = (e) => {
        dispatch({
            type: generatorActions.setNameOfPlayer,
            payload: e.target.value,
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
                        payload: generatorState.nameOfPlayer,
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

    return (
        <GeneratorComponent
            generatorState={generatorState}
            handleSelectChange={handleSelectChange}
            handleToggleButton={handleToggleButton}
            handleSetPlayerName={handleSetPlayerName}
            addPlayerToList={addPlayerToList}
            closePopup={closePopup}
        />
    );
}
