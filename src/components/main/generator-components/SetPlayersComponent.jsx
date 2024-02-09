import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPenToSquare,
    faX,
    faRotateLeft,
    faUsersSlash,
    faMarker,
    faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function SetPlayersComponent({
    setPlayerName,
    addPlayerToList,
    closePopup,
    handleToggleButton,
    generatorState,
    editPlayerName,
    undoEditPlayerName,
    editPlayerInList,
    removePlayerFromList,
    clearPlayersList,
}) {
    return (
        <>
            <div className="buttons-wrapper">
                <button className="button" onClick={handleToggleButton}>
                    <FontAwesomeIcon icon={faRotateLeft} />
                    Back
                </button>
                <button
                    className="button"
                    onClick={handleToggleButton}
                    disabled={
                        generatorState.numberOfTeams *
                            generatorState.numberOfTeamPlayers -
                            generatorState.actualListOfPlayers.length !==
                        0
                    }
                >
                    <FontAwesomeIcon icon={faMarker} /> Generate
                </button>
                <button
                    className="button"
                    onClick={clearPlayersList}
                    disabled={!generatorState.actualListOfPlayers.length}
                >
                    <FontAwesomeIcon icon={faUsersSlash} /> Clear
                </button>
            </div>
            <div className="set-players-wrapper">
                <h2>
                    Players to enter:{" "}
                    {generatorState.numberOfTeams *
                        generatorState.numberOfTeamPlayers -
                        generatorState.actualListOfPlayers.length}
                </h2>
                <div className="input-button">
                    <input
                        name="player-name-input"
                        type="text"
                        value={generatorState.nameOfPlayer}
                        onChange={(e) => setPlayerName(e)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                if (generatorState.nameOfEditingPlayer) {
                                    editPlayerInList();
                                } else {
                                    addPlayerToList();
                                }
                            }
                        }}
                    />
                    <button>
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </button>
                </div>
                {generatorState.popup && (
                    <div className="popup">
                        {generatorState.popup}
                        <button onClick={closePopup}>
                            <FontAwesomeIcon
                                className="icon-style1"
                                icon={faX}
                            />
                        </button>
                    </div>
                )}
                {generatorState.actualListOfPlayers.length ? (
                    <div className="players">
                        {generatorState.actualListOfPlayers.map((player) => (
                            <div className="player" key={player}>
                                {player}
                                <div>
                                    {generatorState.nameOfEditingPlayer ===
                                    player ? (
                                        <button
                                            className="player__button"
                                            onClick={undoEditPlayerName}
                                        >
                                            <FontAwesomeIcon
                                                className="icon-style1"
                                                icon={faRotateLeft}
                                            />
                                        </button>
                                    ) : (
                                        <button
                                            className="player__button"
                                            onClick={() =>
                                                editPlayerName(player)
                                            }
                                        >
                                            <FontAwesomeIcon
                                                className="icon-style1"
                                                icon={faPenToSquare}
                                            />
                                        </button>
                                    )}

                                    <button
                                        className="player__button"
                                        onClick={() =>
                                            removePlayerFromList(player)
                                        }
                                    >
                                        <FontAwesomeIcon
                                            className="icon-style1"
                                            icon={faTrash}
                                        />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    );
}
