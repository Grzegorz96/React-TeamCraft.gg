import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faRotateLeft,
    faPen,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { eventWrapperStyles } from "../../../utils/ui-styles/eventWrapperStyles";

export default function EditEventComponent({
    myTeamsState: { editedEvent, editedPlayer, statsInputs },
    setTeamName,
    setEventName,
    editEvent,
    backFromEditing,
    toggleEditPlayerStats,
    statsInputsHandler,
    setStats,
}) {
    console.log(editedEvent.teams[0].players);
    return (
        <div className="event-wrapper" style={eventWrapperStyles}>
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
                    <button onClick={() => toggleEditPlayerStats()}>
                        <FontAwesomeIcon icon={faRotateLeft} />
                    </button>
                    <h5>Kills:</h5>
                    <input
                        name="kills-input"
                        className="stats-player-input"
                        type="number"
                        value={statsInputs.killsInput}
                        onChange={(e) => statsInputsHandler("killsInput", e)}
                    />
                    <h5>Deaths:</h5>
                    <input
                        name="deaths-input"
                        className="stats-player-input"
                        type="number"
                        value={statsInputs.deathsInput}
                        onChange={(e) => statsInputsHandler("deathsInput", e)}
                    />
                    <h5>Assists:</h5>
                    <input
                        name="assists-input"
                        className="stats-player-input"
                        type="number"
                        value={statsInputs.assistsInput}
                        onChange={(e) => statsInputsHandler("assistsInput", e)}
                    />
                    <button onClick={setStats}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </div>
            )}
            <div className="teams-wrapper">
                {editedEvent.teams.map((teamObject, teamObjectIndex) => (
                    <div className="team-wrapper" key={teamObjectIndex}>
                        <div className="players-wrapper">
                            <input
                                name="team-name"
                                type="text"
                                className="team-name-input"
                                placeholder="Create name"
                                value={teamObject.teamName}
                                onChange={(e) =>
                                    setTeamName(teamObjectIndex, e)
                                }
                            />
                            {teamObject.players.map(
                                ({ playerName }, playerIndex) => (
                                    <div className="player" key={playerName}>
                                        <div className="player__text">
                                            {`${
                                                playerIndex + 1
                                            }: ${playerName}`}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                        <div className="k-d-a">
                            <h4 className="k-d-a--modifier1">K/D/A</h4>
                            {teamObject.players.map(
                                (
                                    { stats: { kills, deaths, assists } },
                                    statsIndex
                                ) => (
                                    <div
                                        key={statsIndex}
                                        className="k-d-a__stats"
                                    >
                                        {`${kills !== null ? kills : "NA"}/${
                                            deaths !== null ? deaths : "NA"
                                        }/${assists !== null ? assists : "NA"}`}
                                    </div>
                                )
                            )}
                        </div>
                        <div className="stats-buttons">
                            {teamObject.players.map(({ playerName }) => (
                                <button
                                    key={playerName}
                                    onClick={() =>
                                        toggleEditPlayerStats(playerName)
                                    }
                                >
                                    {editedPlayer === playerName ? (
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    ) : (
                                        <FontAwesomeIcon icon={faPen} />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
