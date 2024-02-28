import React from "react";
import { useMainData } from "../../../context/MainProvider";
import { alphabet } from "../../../utils/alphabet";
import { sumTeamStats } from "../../../utils/sumKDA";

export default function DisplayEventsStatsComponent() {
    const { mainState } = useMainData();
    console.log(mainState);
    return mainState.acceptedTeams.length < 1 ? (
        <>
            <h2>No teams have been created.</h2>
        </>
    ) : (
        <>
            {mainState.acceptedTeams.map((eventObject, eventObjectIndex) => (
                <div className="event-stats-wrapper" key={eventObjectIndex}>
                    <h3>
                        {eventObject.eventName
                            ? eventObject.eventName
                            : `Event ${eventObjectIndex + 1}`}
                    </h3>
                    <div className="teams-wrapper">
                        {eventObject.teams.map((team, teamIndex) => (
                            <div
                                className="team-wrapper"
                                key={teamIndex}
                                // style={{
                                //     border: team.isWinner
                                //         ? "2px solid gold"
                                //         : null,
                                // }}
                            >
                                <h4>
                                    {team.teamName
                                        ? team.teamName
                                        : `Team ${alphabet[teamIndex]}`}
                                </h4>
                                {/* <div>{sumTeamStats(team.players)}</div> */}
                                <div className="players-wrapper">
                                    {team.players.map(
                                        ({
                                            playerName,
                                            stats: { kills, deaths, assists },
                                            playerRating,
                                        }) => (
                                            <div
                                                className="player"
                                                key={playerName}
                                            >
                                                <div className="player__text">
                                                    {playerName}
                                                </div>
                                                <div className="player__stats">
                                                    {`${kills}/${deaths}/${assists}`}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
