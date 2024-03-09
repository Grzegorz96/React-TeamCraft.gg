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

    const toggleEditPlayerStats = (playerName) => {
        myTeamsState.popup && closePopup();
        dispatch({
            type: myTeamsActions.setEditedPlayer,
            payload: playerName ? playerName : "",
        });
    };

    const statsInputsHandler = (input, e) => {
        myTeamsState.popup && closePopup();
        let data = e.target.value;

        if (/^\d{0,9}$/.test(data)) {
            if (data) data = parseInt(data, 10).toString();
            dispatch({
                type: myTeamsActions.setStatsInput,
                payload: { input: input, data: data },
            });
        } else {
            dispatch({
                type: myTeamsActions.setPopup,
                payload: "Oops! 🙊 wrong value.",
            });
        }
    };

    const setStats = () => {
        if (
            myTeamsState.statsInputs.killsInput &&
            myTeamsState.statsInputs.deathsInput &&
            myTeamsState.statsInputs.assistsInput
        ) {
            dispatch({
                type: myTeamsActions.setPlayerStats,
            });
        } else {
            dispatch({
                type: myTeamsActions.setPopup,
                payload: "Oops! 🙊 Complete all fields with statistics.",
            });
        }
    };

    const closePopup = () => {
        dispatch({
            type: myTeamsActions.setPopup,
            payload: "",
        });
    };

    const setWinner = (teamIndex) => {
        dispatch({
            type: myTeamsActions.setWinner,
            payload: teamIndex,
        });
    };

    return (
        <MyTeamsComponent
            setEditedEvent={setEditedEvent}
            removeEvent={removeEvent}
            myTeamsState={myTeamsState}
            setTeamName={setTeamName}
            setEventName={setEventName}
            editEvent={editEvent}
            backFromEditing={backFromEditing}
            toggleEditPlayerStats={toggleEditPlayerStats}
            statsInputsHandler={statsInputsHandler}
            setStats={setStats}
            closePopup={closePopup}
            setWinner={setWinner}
        />
    );
}
