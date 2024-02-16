import { createContext } from "react";
import { getDataFromLocalStorage } from "../utils/localDataOperations";
import { getActualDate } from "../utils/getActualDate";

export const MainContext = createContext(null);

export const mainActions = {
    addAcceptedTeams: "ADD_ACCEPTED_TEAMS",
};

export const getInitialMainState = () => {
    const storedData = getDataFromLocalStorage("mainState");
    return storedData ? storedData : { acceptedTeams: [] };
};

export const mainReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ACCEPTED_TEAMS":
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
        default:
            return state;
    }
};
