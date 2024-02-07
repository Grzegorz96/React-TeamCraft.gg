import { createContext } from "react";

export const GeneratorContext = createContext(null);

export const generatorActions = {
    setNumberOfTeams: "SET_NUMBER_OF_TEAMS",
    setNumberOfTeamPlayers: "SET_NUMBER_OF_TEAM_PLAYERS",
    setInputOfTeams: "SET_INPUT_OF_TEAMS",
    setInputOfTeamPlayers: "SET_INPUT_OF_TEAM_PLAYERS",
};

export const generatorInitialState = {
    numberOfTeams: 0,
    numberOfTeamPlayers: 0,
    inputOfTeams: "1",
    inputOfTeamPlayers: "1",
};

export const generatorReducer = (state, action) => {
    switch (action.type) {
        case "SET_NUMBER_OF_TEAMS":
            return { ...state, numberOfTeams: action.payload };
        case "SET_NUMBER_OF_TEAM_PLAYERS":
            return { ...state, numberOfTeamPlayers: action.payload };
        case "SET_INPUT_OF_TEAMS":
            return { ...state, inputOfTeams: action.payload };
        case "SET_INPUT_OF_TEAM_PLAYERS":
            return { ...state, inputOfTeamPlayers: action.payload };
        default:
            return state;
    }
};
