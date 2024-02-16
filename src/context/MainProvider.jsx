import { useReducer, useContext, useEffect, useRef } from "react";
import {
    mainReducer,
    MainContext,
    mainActions,
    getInitialMainState,
} from "./MainContext";
import { saveDataToLocalStorage } from "../utils/localDataOperations";

export const MainProvider = ({ children }) => {
    const [mainState, dispatch] = useReducer(
        mainReducer,
        undefined,
        getInitialMainState
    );
    const isInitialized = useRef(false);
    useEffect(() => {
        isInitialized.current
            ? saveDataToLocalStorage("mainState", mainState)
            : (isInitialized.current = true);
    }, [mainState]);

    const addAcceptedTeams = (teams, eventName) => {
        dispatch({
            type: mainActions.addAcceptedTeams,
            payload: { teams: teams, eventName: eventName },
        });
    };

    return (
        <MainContext.Provider
            value={{
                mainState,
                functions: {
                    addAcceptedTeams,
                },
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export const useMainData = () => {
    return useContext(MainContext);
};
