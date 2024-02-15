import { createContext } from "react";
import { getDataFromLocalStorage } from "../utils/localDataOperations";

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
            return {
                ...state,
                acceptedTeams: [...state.acceptedTeams, action.payload],
            };
        default:
            return state;
    }
};
