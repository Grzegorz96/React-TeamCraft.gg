import React, { useReducer } from "react";
import MyTeamsComponent from "../../components/main/my-teams-components/MyTeamsComponent";
import { useMainData } from "../../context/MainProvider";
import { myTeamsActions } from "../../reducers/my-teams-reducer/actionTypes";
import { myTeamsInitialState } from "../../reducers/my-teams-reducer/initialState";
import { myTeamsReducer } from "../../reducers/my-teams-reducer/reducer";

export default function MyTeamsContainer() {
    const { functions } = useMainData();
    const [myTeamsState, dispatch] = useReducer(
        myTeamsReducer,
        myTeamsInitialState
    );

    const setEditedEvent = (eventObject, eventObjectIndex) => {
        dispatch({
            type: myTeamsActions.setEditedEvent,
            payload: {
                eventObject: eventObject,
                eventObjectIndex: eventObjectIndex,
            },
        });
    };

    const removeEvent = (eventObject) => {
        functions.removeAcceptedTeams(eventObject);
    };

    const editEvent = () => {
        functions.updateAcceptedTeams(myTeamsState);
        dispatch({
            type: myTeamsActions.setReset,
        });
    };

    const backFromEditing = () => {
        dispatch({
            type: myTeamsActions.setReset,
        });
    };

    const setEventName = (e) => {
        dispatch({
            type: myTeamsActions.setEventName,
            payload: e.target.value,
        });
    };

    const setTeamName = (teamIndex, e) => {
        dispatch({
            type: myTeamsActions.setTeamName,
            payload: { teamIndex: teamIndex, teamName: e.target.value },
        });
    };

    const setEditedPlayer = (playerName) => {
        dispatch({
            type: myTeamsActions.setEditedPlayer,
            payload: playerName,
        });
    };

    const statsInputsHandler = (input, e) => {
        dispatch({
            type: myTeamsActions.setStatsInput,
            payload: { input: input, data: e.target.value },
        });
    };

    // const setStats = () => {
    //     if (
    //         myTeamsState.statsInputs.killsInput &&
    //         myTeamsState.statsInputs.assistsInput &&
    //         myTeamsState.statsInputs.deathsInput
    //     ) {
    //         dispatch({
    //             type: myTeamsActions.setPlayerStats,
    //         });
    //     }
    // };

    console.log(myTeamsState);
    return (
        <MyTeamsComponent
            setEditedEvent={setEditedEvent}
            removeEvent={removeEvent}
            myTeamsState={myTeamsState}
            setTeamName={setTeamName}
            setEventName={setEventName}
            editEvent={editEvent}
            backFromEditing={backFromEditing}
            setEditedPlayer={setEditedPlayer}
            statsInputsHandler={statsInputsHandler}
            setStats={setStats}
        />
    );
}
