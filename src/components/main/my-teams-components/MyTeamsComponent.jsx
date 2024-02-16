import React from "react";
import { useMainData } from "../../../context/MainProvider";
import { alphabet } from "../../../utils/alphabet";

export default function MyTeamsComponent() {
    const { mainState } = useMainData();

    return (
        <div className="main__container main__my-teams">
            {mainState.acceptedTeams.map((teamObject, teamObjectIndex) => (
                <div className="event-wrapper" key={teamObjectIndex}>
                    <h3>
                        {teamObject.eventName
                            ? teamObject.eventName
                            : "Create event name"}
                    </h3>
                    <div className="teams-wrapper">
                        {teamObject.teams.map((team, teamIndex) => (
                            <div className="team-wrapper" key={teamIndex}>
                                <h4>
                                    {team.teamName
                                        ? team.teamName
                                        : `Team ${alphabet[teamIndex]}`}
                                </h4>
                                {team.players.map((player, playerIndex) => (
                                    <div className="player" key={player}>
                                        {`${playerIndex + 1}: ${player}`}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <h5>creation date: {teamObject.creationDate}</h5>
                </div>
            ))}
        </div>
    );
}
