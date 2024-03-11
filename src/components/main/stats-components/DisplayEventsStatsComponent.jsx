import React from "react";
// Import useMainData hook for accessing main context.
import { useMainData } from "../../../context/MainProvider";
// Import alphabet for team naming.
import { alphabet } from "../../../utils/alphabet";
// Import FontAwesomeIcon for using font icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import font icons.
import { faCrown, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
// Import BigHead for displaying avatars.
import { BigHead } from "@bigheads/core";
// Import StarsWrapperComponent for displaying star ratings.
import StarsWrapperComponent from "../../shared/StarsWrapperComponent";

// Functional component for displaying event statistics.
export default function DisplayEventsStatsComponent({
    calculateOverall,
    calculateTotalStats,
    allStatsAreValid,
}) {
    // Accessing main context.
    const { mainState } = useMainData();

    // Check if no teams have been created.
    return mainState.acceptedTeams.length < 1 ? (
        <>
            <h2>No teams have been created.</h2>
        </>
    ) : (
        <>
            {/* Render event statistics. */}
            {mainState.acceptedTeams.map((eventObject, eventObjectIndex) => (
                <div className="event-stats-wrapper" key={eventObjectIndex}>
                    {/* Displaying event name or default name. */}
                    <h3>
                        {eventObject.eventName
                            ? eventObject.eventName
                            : `Event ${eventObjectIndex + 1}`}
                    </h3>

                    {/* Displaying creation date. */}
                    <div className="date">{eventObject.creationDate}</div>

                    {/* Displaying teams. */}
                    <div className="teams-wrapper">
                        {eventObject.teams.map((team, teamIndex) => (
                            <div
                                className="team-scroll-container"
                                key={teamIndex}
                            >
                                <div
                                    className="team-wrapper"
                                    style={{
                                        border: team.isWinner
                                            ? "2px solid gold"
                                            : null,
                                    }}
                                >
                                    {/* Displaying crown icon for winner. */}
                                    {team.isWinner && (
                                        <FontAwesomeIcon
                                            className="crown"
                                            icon={faCrown}
                                        />
                                    )}

                                    <div className="players-wrapper">
                                        {/* Displaying team name and sum stats. */}
                                        <div className="team-name-and-sum-stats">
                                            {/* Displaying team name or default name. */}
                                            <h4>
                                                {team.teamName
                                                    ? team.teamName
                                                    : `Team ${alphabet[teamIndex]}`}
                                            </h4>

                                            {/* Displaying sum stats. */}
                                            <div className="sum-stats">
                                                <FontAwesomeIcon
                                                    icon={faShieldHalved}
                                                />
                                                {allStatsAreValid(team.players)
                                                    ? calculateTotalStats(
                                                          team.players
                                                      )
                                                    : "NA/NA/NA"}
                                            </div>
                                        </div>

                                        {/* Displaying players in the team. */}
                                        {team.players.map(({ playerName }) => (
                                            <div
                                                className="player"
                                                key={playerName}
                                            >
                                                <div className="avatar">
                                                    <BigHead />
                                                </div>
                                                <div className="player__text">
                                                    {playerName}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Displaying statistics chart. */}
                                    <div className="statistics-chart">
                                        <h4>Stats</h4>
                                        {team.players.map(
                                            ({
                                                stats: {
                                                    kills,
                                                    deaths,
                                                    assists,
                                                },
                                                playerName,
                                            }) => (
                                                <div
                                                    className="chart-wrapper"
                                                    key={playerName}
                                                >
                                                    {/* Displaying kills chart. */}
                                                    <div className="chart-wrapper__stat">
                                                        <div
                                                            className="chart-wrapper__stat__kills"
                                                            style={{
                                                                width: kills
                                                                    ? Math.min(
                                                                          kills *
                                                                              5,
                                                                          138
                                                                      )
                                                                    : null,
                                                            }}
                                                        >
                                                            {kills}
                                                        </div>
                                                        K
                                                    </div>

                                                    {/* Displaying deaths chart. */}
                                                    <div className="chart-wrapper__stat">
                                                        <div
                                                            className="chart-wrapper__stat__deaths"
                                                            style={{
                                                                width: deaths
                                                                    ? Math.min(
                                                                          deaths *
                                                                              5,
                                                                          138
                                                                      )
                                                                    : null,
                                                            }}
                                                        >
                                                            {deaths}
                                                        </div>
                                                        D
                                                    </div>

                                                    {/* Displaying assists chart. */}
                                                    <div className="chart-wrapper__stat">
                                                        <div
                                                            className="chart-wrapper__stat__assists"
                                                            style={{
                                                                width: assists
                                                                    ? Math.min(
                                                                          assists *
                                                                              5,
                                                                          138
                                                                      )
                                                                    : null,
                                                            }}
                                                        >
                                                            {assists}
                                                        </div>
                                                        A
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* Displaying overall ratings. */}
                                    <div className="overall">
                                        <h4>Overall</h4>
                                        {team.players.map(
                                            ({
                                                stats: {
                                                    kills,
                                                    deaths,
                                                    assists,
                                                },
                                                playerName,
                                            }) => (
                                                <div
                                                    className="overall__rating"
                                                    key={playerName}
                                                >
                                                    {kills && deaths && assists
                                                        ? calculateOverall(
                                                              parseInt(
                                                                  kills,
                                                                  10
                                                              ),
                                                              parseInt(
                                                                  deaths,
                                                                  10
                                                              ),
                                                              parseInt(
                                                                  assists,
                                                                  10
                                                              )
                                                          )
                                                        : "NA"}
                                                </div>
                                            )
                                        )}
                                    </div>

                                    {/* Displaying K/D/A stats with star ratings. */}
                                    <div className="k-d-a">
                                        <h4>K/D/A</h4>
                                        {team.players.map(
                                            ({
                                                stats: {
                                                    kills,
                                                    deaths,
                                                    assists,
                                                },
                                                playerRating,
                                                playerName,
                                            }) => (
                                                <div
                                                    key={playerName}
                                                    className={
                                                        playerRating
                                                            ? "k-d-a__stats--modifier1"
                                                            : "k-d-a__stats"
                                                    }
                                                >
                                                    {playerRating && (
                                                        <StarsWrapperComponent
                                                            playerRating={
                                                                playerRating
                                                            }
                                                        />
                                                    )}
                                                    <div className="text">
                                                        {`${kills || "NA"}/${
                                                            deaths || "NA"
                                                        }/${assists || "NA"}`}
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
