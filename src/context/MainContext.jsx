// Importing necessary modules from React and utility functions.
import { createContext } from "react";
import { getDataFromLocalStorage } from "../utils/localDataOperations";
import { getActualDate } from "../utils/getActualDate";

// Creating a context for the mainState.
export const MainContext = createContext(null);

// Defining action types for the mainState.
export const mainActions = {
    addEvent: "ADD_EVENT",
    removeEvent: "REMOVE_EVENT",
    updateEvent: "UPDATE_EVENT",
};

// Function to retrieve the initial state for the mainState.
export const getInitialMainState = () => {
    const storedData = getDataFromLocalStorage("mainState");
    return storedData ? storedData : { acceptedTeams: [] };
};

// Reducer function to manage the mainState.
export const mainReducer = (state, action) => {
    switch (action.type) {
        // Action to add a new event to the list.
        case "ADD_EVENT":
            // Getting the current date for the creation date of the new event.
            const creationDate = getActualDate();

            // Updating the state by adding a new event to the accepted teams list.
            return {
                ...state,
                acceptedTeams: [
                    ...state.acceptedTeams,
                    {
                        creationDate: creationDate,
                        teams: action.payload.teams,
                        eventName: action.payload.eventName,
                    },
                ],
            };

        // Action to remove an event from the list.
        case "REMOVE_EVENT":
            // Filtering out the specified event from the accepted teams list.
            const updatedListOfEvents = state.acceptedTeams.filter(
                (eventObject) =>
                    JSON.stringify(eventObject) !==
                    JSON.stringify(action.payload)
            );

            // Returning the updated state with the filtered accepted teams list.
            return {
                ...state,
                acceptedTeams: updatedListOfEvents,
            };

        // Action to update an existing event in the list.
        case "UPDATE_EVENT":
            // Creating a deep copy of the accepted teams list.
            const updatedAcceptedTeams = JSON.parse(
                JSON.stringify(state.acceptedTeams)
            );

            // Updating the specified event in the copied list.
            updatedAcceptedTeams[action.payload.indexOfUpdatedEvent] =
                JSON.parse(JSON.stringify(action.payload.updatedEvent));

            // Returning the updated state with the modified accepted teams list.
            return {
                ...state,
                acceptedTeams: updatedAcceptedTeams,
            };

        // Default case for the reducer, returns the current state if the action type is not recognized.
        default:
            return state;
    }
};
