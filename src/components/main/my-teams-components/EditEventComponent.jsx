import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faRotateLeft,
    faChartSimple,
    faPlus,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export default function EditEventComponent({
    myTeamsState: { editedEvent, editedPlayer, statsInputs },
    setTeamName,
    setEventName,
    editEvent,
    backFromEditing,
    setEditedPlayer,
    statsInputsHandler,
    setStats,
}) {
    console.log(editedPlayer);
    return (
        <div
            className="event-wrapper"
            style={editedPlayer ? { borderTopRightRadius: 0 } : {}}
        >
            <div className="event-wrapper__buttons-wrapper">
                <button onClick={editEvent}>
                    <FontAwesomeIcon icon={faCheck} />
                </button>
                <button onClick={backFromEditing}>
                    <FontAwesomeIcon icon={faRotateLeft} />
                </button>
            </div>
            <input
                placeholder="Create event name"
                className="event-name-input"
                type="text"
                name="event-name"
                value={editedEvent.eventName}
                onChange={(e) => setEventName(e)}
            />
            {editedPlayer && (
                <div className="event-wrapper__inputs-wrapper">
                    <button onClick={() => setEditedPlayer()}>
                        <FontAwesomeIcon icon={faRotateLeft} />
                    </button>
                    <h5>Kills:</h5>
                    <input
                        className="stats-player-input"
                        type="number"
                        value={statsInputs.killsInput}
                        onChange={(e) => statsInputsHandler("killsInput", e)}
                    />
                    <h5>Assists:</h5>
                    <input
                        className="stats-player-input"
                        type="number"
                        value={statsInputs.assistsInput}
                        onChange={(e) => statsInputsHandler("assistsInput", e)}
                    />
                    <h5>Deaths:</h5>
                    <input
                        className="stats-player-input"
                        type="number"
                        value={statsInputs.deathsInput}
                        onChange={(e) => statsInputsHandler("deathsInput", e)}
                    />
                    <button onClick={setStats}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </div>
            )}
            <div className="teams-wrapper">
                {editedEvent.teams.map((teamObject, teamObjectIndex) => (
                    <div className="team-wrapper" key={teamObjectIndex}>
                        <input
                            name="team-name"
                            type="text"
                            className="team-name-input"
                            placeholder="Create team name"
                            value={teamObject.teamName}
                            onChange={(e) => setTeamName(teamObjectIndex, e)}
                        />
                        {teamObject.players.map(
                            ({ playerName }, playerIndex) => (
                                <div className="player" key={playerName}>
                                    {`${playerIndex + 1}: ${playerName}`}
                                    <button
                                        onClick={() =>
                                            setEditedPlayer(playerName)
                                        }
                                    >
                                        {editedPlayer === playerName ? (
                                            <FontAwesomeIcon
                                                icon={faPenToSquare}
                                            />
                                        ) : (
                                            <>
                                                <FontAwesomeIcon
                                                    icon={faPlus}
                                                />
                                                <FontAwesomeIcon
                                                    icon={faChartSimple}
                                                />
                                            </>
                                        )}
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
