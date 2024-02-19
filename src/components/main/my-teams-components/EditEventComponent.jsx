import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function EditEventComponent({
    myTeamsState: { editedEvent },
    setTeamName,
    setEventName,
    editEvent,
}) {
    return (
        <>
            <input
                placeholder="Create event name"
                className="event-name-input"
                type="text"
                name="event-name"
                value={editedEvent.eventName}
                onChange={(e) => setEventName(e)}
            />
            <div className="generated-teams-wrapper">
                {editedEvent.teams.map((teamObject, teamObjectIndex) => (
                    <div className="team" key={teamObjectIndex}>
                        <input
                            name="team-name"
                            type="text"
                            className="team-name-input"
                            placeholder="Create team name"
                            value={teamObject.teamName}
                            onChange={(e) => setTeamName(teamObjectIndex, e)}
                        />
                        {teamObject.players.map((player, playerIndex) => (
                            <div className="player" key={player}>
                                {`${playerIndex + 1}: ${player}`}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <button onClick={editEvent}>
                <FontAwesomeIcon icon={faCheck} />
                Accept
            </button>
        </>
    );
}
