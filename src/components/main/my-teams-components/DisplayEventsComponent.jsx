import React from "react";
import { alphabet } from "../../../utils/alphabet";
import { useMainData } from "../../../context/MainProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function DisplayEventsComponent({
    setEditedEvent,
    removeEvent,
}) {
    const { mainState } = useMainData();
    return (
        <>
            {mainState.acceptedTeams.map((eventObject, eventObjectIndex) => (
                <div className="event-wrapper" key={eventObjectIndex}>
                    <div className="event-wrapper__buttons-wrapper">
                        <button onClick={() => removeEvent(eventObject)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button
                            onClick={() =>
                                setEditedEvent(eventObject, eventObjectIndex)
                            }
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                    </div>
                    <h3>
                        {eventObject.eventName
                            ? eventObject.eventName
                            : `Event ${eventObjectIndex + 1}`}
                    </h3>
                    <div className="teams-wrapper">
                        {eventObject.teams.map((team, teamIndex) => (
                            <div className="team-wrapper" key={teamIndex}>
                                <h4>
                                    {team.teamName
                                        ? team.teamName
                                        : `Team ${alphabet[teamIndex]}`}
                                </h4>
                                {team.players.map(
                                    ({ playerName }, playerIndex) => (
                                        <div
                                            className="player"
                                            key={playerName}
                                        >
                                            {`${
                                                playerIndex + 1
                                            }: ${playerName}`}
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                    <h5>creation date: {eventObject.creationDate}</h5>
                </div>
            ))}
        </>
    );
}
