import { useReducer, useContext } from "react";
import {
    GeneratorContext,
    generatorReducer,
    generatorInitialState,
    generatorActions,
} from "./GeneratorContext";

export const GeneratorProvider = ({ children }) => {
    const [generatorState, dispatch] = useReducer(
        generatorReducer,
        generatorInitialState
    );

    const setNumberOfTeams = (data) => {
        dispatch({ type: generatorActions.setNumberOfTeams, payload: data });
    };

    const setNumberOfTeamPlayers = (data) => {
        dispatch({
            type: generatorActions.setNumberOfTeamPlayers,
            payload: data,
        });
    };

    const setInputOfTeams = (data) => {
        dispatch({ type: generatorActions.setInputOfTeams, payload: data });
    };

    const setInputOfTeamPlayers = (data) => {
        dispatch({
            type: generatorActions.setInputOfTeamPlayers,
            payload: data,
        });
    };

    return (
        <GeneratorContext.Provider
            value={{
                generatorState,
                functions: {
                    setNumberOfTeams,
                    setNumberOfTeamPlayers,
                    setInputOfTeams,
                    setInputOfTeamPlayers,
                },
            }}
        >
            {children}
        </GeneratorContext.Provider>
    );
};

export const useGeneratorData = () => {
    return useContext(GeneratorContext);
};
