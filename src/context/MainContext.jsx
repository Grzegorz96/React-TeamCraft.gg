import { createContext } from "react";
import { getDataFromLocalStorage } from "../utils/localDataOperations";
import { getActualDate } from "../utils/getActualDate";
import { json } from "react-router-dom";

export const MainContext = createContext(null);

export const mainActions = {
    addEvent: "ADD_EVENT",
    removeEvent: "REMOVE_EVENT",
    updateEvent: "UPDATE_EVENT",
};

export const getInitialMainState = () => {
    const storedData = getDataFromLocalStorage("mainState");
    return storedData ? storedData : { acceptedTeams: [] };
};

export const mainReducer = (state, action) => {
    switch (action.type) {
        case "ADD_EVENT":
            const creationDate = getActualDate();
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
        case "REMOVE_EVENT":
            const updatedListOfEvents = state.acceptedTeams.filter(
                (eventObject) =>
                    JSON.stringify(eventObject) !==
                    JSON.stringify(action.payload)
            );
            return {
                ...state,
                acceptedTeams: updatedListOfEvents,
            };
        case "UPDATE_EVENT":
            const updatedAcceptedTeams = JSON.parse(
                JSON.stringify(state.acceptedTeams)
            );

            updatedAcceptedTeams[action.payload.indexOfUpdatedEvent] =
                JSON.parse(JSON.stringify(action.payload.updatedEvent));
            return {
                ...state,
                acceptedTeams: updatedAcceptedTeams,
            };
        default:
            return state;
    }
};
