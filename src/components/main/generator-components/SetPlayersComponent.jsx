import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPenToSquare,
    faX,
    faRotateLeft,
    faUsersSlash,
    faDice,
    faPlus,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function SetPlayersComponent({
    setPlayerName,
    addPlayerToList,
    closePopup,
    handleAcceptAndBackButton,
    generatorState,
    editPlayerInList,
    removePlayerFromList,
    clearPlayersList,
    toggleEditPlayerName,
    generate,
}) {
    return (
        <>
            <div className="buttons-wrapper">
                <button className="button" onClick={handleAcceptAndBackButton}>
                    <FontAwesomeIcon icon={faRotateLeft} />
                    Back
                </button>
                <button
                    className="button"
                    onClick={generate}
                    disabled={
                        generatorState.numberOfTeams *
                            generatorState.numberOfTeamPlayers -
                            generatorState.actualListOfPlayers.length !==
                        0
                    }
                >
                    <FontAwesomeIcon icon={faDice} /> Generate
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
                    <button
                        onClick={
                            generatorState.nameOfEditingPlayer
                                ? editPlayerInList
                                : addPlayerToList
                        }
                    >
                        <FontAwesomeIcon
                            icon={
                                generatorState.nameOfEditingPlayer
                                    ? faCheck
                                    : faPlus
                            }
                        />
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
                                <div className="player__text">{player}</div>
                                <div className="player__buttons">
                                    <button
                                        className="player__button"
                                        onClick={() =>
                                            toggleEditPlayerName(
                                                generatorState.nameOfEditingPlayer ===
                                                    player
                                                    ? undefined
                                                    : player
                                            )
                                        }
                                    >
                                        <FontAwesomeIcon
                                            className="icon-style1"
                                            icon={
                                                generatorState.nameOfEditingPlayer ===
                                                player
                                                    ? faRotateLeft
                                                    : faPenToSquare
                                            }
                                        />
                                    </button>
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
