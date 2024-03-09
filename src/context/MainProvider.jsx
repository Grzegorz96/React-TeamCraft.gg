// React Hooks and context for managing the main application state.
import { useReducer, useContext, useEffect, useRef } from "react";
import {
    mainReducer,
    MainContext,
    mainActions,
    getInitialMainState,
} from "./MainContext";
import { saveDataToLocalStorage } from "../utils/localDataOperations";

/** MainProvider component provides the main application state and functions to manage it 
to its children components using the React Context API. */
export const MainProvider = ({ children }) => {
    // Initializing the main state using the main reducer and initial state.
    const [mainState, dispatch] = useReducer(
        mainReducer,
        undefined,
        getInitialMainState
    );

    // Using useRef to track whether the component is initialized or not.
    const isInitialized = useRef(false);

    // Effect hook to save the main state to local storage whenever it changes.
    useEffect(() => {
        // Checking if the component is initialized before saving to avoid unnecessary initial save.
        isInitialized.current
            ? saveDataToLocalStorage("mainState", mainState)
            : (isInitialized.current = true);
    }, [mainState]);

    // Dispatches an action to add accepted teams to the main state.
    const addAcceptedTeams = (teams, eventName) => {
        dispatch({
            type: mainActions.addEvent,
            payload: { teams: teams, eventName: eventName },
        });
    };

    // Dispatches an action to remove an event and its associated teams from the main state.
    const removeAcceptedTeams = (eventObject) => {
        dispatch({
            type: mainActions.removeEvent,
            payload: eventObject,
        });
    };

    //  Dispatches an action to update an existing event in the main state.
    const updateAcceptedTeams = ({ editedEvent, indexOfEditedEvent }) => {
        dispatch({
            type: mainActions.updateEvent,
            payload: {
                updatedEvent: editedEvent,
                indexOfUpdatedEvent: indexOfEditedEvent,
            },
        });
    };

    // Providing the main state and functions through the MainContext.Provider.
    return (
        <MainContext.Provider
            value={{
                mainState,
                functions: {
                    addAcceptedTeams,
                    removeAcceptedTeams,
                    updateAcceptedTeams,
                },
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

/* useMainData hook provides a convenient way to access the main state and functions
from the MainContext within functional components. */
export const useMainData = () => {
    return useContext(MainContext);
};
