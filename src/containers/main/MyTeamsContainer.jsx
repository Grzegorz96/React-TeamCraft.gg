// Import necessary dependencies from React and other modules.
import React, { useReducer } from "react";
import MyTeamsComponent from "../../components/main/my-teams-components/MyTeamsComponent";
import { useMainData } from "../../context/MainProvider";
import { myTeamsActions } from "../../reducers/my-teams-reducer/actionTypes";
import { myTeamsInitialState } from "../../reducers/my-teams-reducer/initialState";
import { myTeamsReducer } from "../../reducers/my-teams-reducer/reducer";

// Define a functional component named MyTeamsContainer.
export default function MyTeamsContainer() {
    // Get functions and state from MainProvider.
    const { functions } = useMainData();

    // Initialize state and dispatch function using useReducer.
    const [myTeamsState, dispatch] = useReducer(
        myTeamsReducer,
        myTeamsInitialState
    );

    // Event handler for setting the edited event.
    const setEditedEvent = (eventObject, eventObjectIndex) => {
        // Dispatch an action to set the edited event in the state.
        dispatch({
            type: myTeamsActions.setEditedEvent,
            payload: {
                eventObject: eventObject,
                eventObjectIndex: eventObjectIndex,
            },
        });
    };

    // Event handler for removing an event.
    const removeEvent = (eventObject) => {
        // Call a function to remove global accepted teams associated with the specified event.
        functions.removeAcceptedTeams(eventObject);
    };

    // Event handler for editing an event.
    const editEvent = () => {
        // Call a function to update global accepted teams.
        functions.updateAcceptedTeams(myTeamsState);

        // Dispatch an action to reset the state.
        dispatch({
            type: myTeamsActions.setReset,
        });
    };

    // Event handler for going back from editing.
    const backFromEditing = () => {
        // Dispatch an action to reset the state.
        dispatch({
            type: myTeamsActions.setReset,
        });
    };

    // Event handler for setting the event name.
    const setEventName = (e) => {
        // Dispatch an action to set the event name in the state.
        dispatch({
            type: myTeamsActions.setEventName,
            payload: e.target.value,
        });
    };

    // Event handler for setting the team name.
    const setTeamName = (teamIndex, e) => {
        // Dispatch an action to set the team name in the state.
        dispatch({
            type: myTeamsActions.setTeamName,
            payload: { teamIndex: teamIndex, teamName: e.target.value },
        });
    };

    // Event handler for toggling the edit player stats mode.
    const toggleEditPlayerStats = (playerName) => {
        // Close the popup if it is open.
        myTeamsState.popup && closePopup();

        // Dispatch an action to toggle the edit player stats mode in the state.
        dispatch({
            type: myTeamsActions.setEditedPlayer,
            payload: playerName ? playerName : "",
        });
    };

    // Event handler for handling input changes in player stats.
    const statsInputsHandler = (input, e) => {
        // Close the popup if it is open.
        myTeamsState.popup && closePopup();

        // Get the input data from the event
        let data = e.target.value;

        // Check if the input data is a valid numeric value.
        if (/^\d{0,9}$/.test(data)) {
            // If the input is valid, remove unnecessary characters.
            if (data) data = parseInt(data, 10).toString();
            // Dispatch an action to set stats inputs.
            dispatch({
                type: myTeamsActions.setStatsInput,
                payload: { input: input, data: data },
            });
        } else {
            // If the input is not valid, dispatch an action to show a popup with an error message.
            dispatch({
                type: myTeamsActions.setPopup,
                payload: "Oops! 🙊 wrong value.",
            });
        }
    };

    // Event handler for setting player stats.
    const setStats = () => {
        // Check if all required fields for player stats are filled.
        if (
            myTeamsState.statsInputs.killsInput &&
            myTeamsState.statsInputs.deathsInput &&
            myTeamsState.statsInputs.assistsInput
        ) {
            // If all fields are filled, dispatch an action to set player stats in the state.
            dispatch({
                type: myTeamsActions.setPlayerStats,
            });
        } else {
            // If any of the fields is not filled, dispatch an action to show a popup with an error message.
            dispatch({
                type: myTeamsActions.setPopup,
                payload: "Oops! 🙊 Complete all fields with statistics.",
            });
        }
    };

    // Event handler for closing the popup.
    const closePopup = () => {
        // Dispatch an action to set the popup to an empty string, effectively closing it.
        dispatch({
            type: myTeamsActions.setPopup,
            payload: "",
        });
    };

    // Event handler for setting the winner of a match.
    const setWinner = (teamIndex) => {
        // Dispatch an action to set the winner in the state.
        dispatch({
            type: myTeamsActions.setWinner,
            payload: teamIndex,
        });
    };

    // Render the MyTeamsComponent with the relevant props.
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
