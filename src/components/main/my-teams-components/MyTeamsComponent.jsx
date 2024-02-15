import React from "react";
import { useMainData } from "../../../context/MainProvider";
import { alphabet } from "../../../utils/alphabet";

export default function MyTeamsComponent() {
    const { mainState } = useMainData();

    return (
        <div className="main__container main__my-teams">
            {mainState.acceptedTeams.map((teams, index) => (
                <div className="event-wrapper" key={index}>
                    <h3>event name</h3>
                    <div className="teams-wrapper">
                        {teams.map((team, index) => (
                            <div className="team-wrapper" key={index}>
                                <h4>Team {alphabet[index]}:</h4>
                                {team.map((player, index) => (
                                    <div className="player" key={player}>
                                        {`${index + 1}: ${player}`}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
