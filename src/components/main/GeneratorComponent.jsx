import React from "react";
import { generatorActions } from "../../reducers/generator-reducer/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faX } from "@fortawesome/free-solid-svg-icons";

export default function GeneratorComponent({
    generatorState,
    handleSelectChange,
    handleToggleButton,
    handleSetPlayerName,
    addPlayerToList,
    closePopup,
}) {
    return (
        <div className="main__container main__generator">
            <div className="generator-wrapper">
                <button className="accept-button" onClick={handleToggleButton}>
                    {generatorState.isAccepted ? "Back" : "Accept"}
                </button>
                {generatorState.isAccepted ? (
                    <div className="select-players-wrapper">
                        <h2>Wpisz nazwy graczy:</h2>
                        <input
                            name="player-name-input"
                            type="text"
                            value={generatorState.nameOfPlayer}
                            onChange={(e) => handleSetPlayerName(e)}
                            onKeyDown={(e) =>
                                e.key === "Enter" && addPlayerToList()
                            }
                        />
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
                                {generatorState.actualListOfPlayers.map(
                                    (player, index) => (
                                        <div className="player" key={index}>
                                            {player}
                                            <div>
                                                <button>
                                                    <FontAwesomeIcon
                                                        className="icon-style1"
                                                        icon={faPenToSquare}
                                                    />
                                                </button>
                                                <button>
                                                    <FontAwesomeIcon
                                                        className="icon-style1"
                                                        icon={faTrash}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        ) : null}
                    </div>
                ) : (
                    <div className="select-options-wrapper">
                        <div className="select">
                            <label htmlFor="select-team-quantitiy">
                                Select the number of teams:
                            </label>
                            <select
                                id="select-team-quantitiy"
                                onChange={(e) =>
                                    handleSelectChange(
                                        e,
                                        generatorActions.setNumberOfTeams
                                    )
                                }
                            >
                                {Array.from(
                                    { length: 10 },
                                    (_, index) => index + 1
                                ).map((number) => (
                                    <option key={number} value={number}>
                                        {number}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="select">
                            <label htmlFor="select-players-quantitiy">
                                Select players per team:
                            </label>
                            <select
                                id="select-players-quantitiy"
                                onChange={(e) =>
                                    handleSelectChange(
                                        e,
                                        generatorActions.setNumberOfTeamPlayers
                                    )
                                }
                            >
                                {Array.from(
                                    { length: 20 },
                                    (_, index) => index + 1
                                ).map((number) => (
                                    <option key={number} value={number}>
                                        {number}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
