import React from "react";
import { alphabet } from "../../../utils/alphabet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRotateLeft,
    faDice,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function GeneratedTeamsComponent({
    setListOfGeneratedTeams,
    generatorState,
    generate,
    acceptGeneratedTeams,
}) {
    return (
        <>
            <div className="buttons-wrapper">
                <button
                    className="button"
                    onClick={() => setListOfGeneratedTeams([])}
                >
                    <FontAwesomeIcon icon={faRotateLeft} />
                    Back
                </button>
                <button className="button" onClick={generate}>
                    <FontAwesomeIcon icon={faDice} /> Regenerate
                </button>
                <button className="button" onClick={acceptGeneratedTeams}>
                    <FontAwesomeIcon icon={faCheck} /> Accept
                </button>
            </div>
            <div className="generated-teams-wrapper">
                {generatorState.generatedTeams.map((listOfPlayers, index) => (
                    <div className="team" key={index}>
                        <h3>Team {alphabet[index]}:</h3>
                        {listOfPlayers.map((player, index) => (
                            <div className="player" key={player}>
                                {`${index + 1}: ${player}`}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}
