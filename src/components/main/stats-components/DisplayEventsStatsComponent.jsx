import React from "react";
import { useMainData } from "../../../context/MainProvider";
import { alphabet } from "../../../utils/alphabet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faCrown,
    faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { BigHead } from "@bigheads/core";

export default function DisplayEventsStatsComponent({
    calculateOverall,
    calculateTotalStats,
    allStatsAreValid,
}) {
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
                    <div className="date">{eventObject.creationDate}</div>
                    <div className="teams-wrapper">
                        {eventObject.teams.map((team, teamIndex) => (
                            <div
                                className="team-wrapper"
                                key={teamIndex}
                                style={{
                                    border: team.isWinner
                                        ? "2px solid gold"
                                        : null,
                                }}
                            >
                                {team.isWinner && (
                                    <FontAwesomeIcon
                                        className="crown"
                                        icon={faCrown}
                                    />
                                )}
                                <div className="players-wrapper">
                                    <div className="team-name-and-sum-stats">
                                        <h4>
                                            {team.teamName
                                                ? team.teamName
                                                : `Team ${alphabet[teamIndex]}`}
                                        </h4>
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
                                <div className="statistics-chart">
                                    <h4>Stats</h4>
                                    {team.players.map(
                                        ({
                                            stats: { kills, deaths, assists },
                                            playerName,
                                        }) => (
                                            <div
                                                className="chart-wrapper"
                                                key={playerName}
                                            >
                                                <div className="chart-wrapper__stat">
                                                    <div
                                                        className="chart-wrapper__stat__kills"
                                                        style={{
                                                            width: kills
                                                                ? `${
                                                                      kills * 5
                                                                  }px`
                                                                : null,
                                                        }}
                                                    >
                                                        {kills}
                                                    </div>
                                                    K
                                                </div>
                                                <div className="chart-wrapper__stat">
                                                    <div
                                                        className="chart-wrapper__stat__deaths"
                                                        style={{
                                                            width: deaths
                                                                ? `${
                                                                      deaths * 5
                                                                  }px`
                                                                : null,
                                                        }}
                                                    >
                                                        {deaths}
                                                    </div>
                                                    D
                                                </div>
                                                <div className="chart-wrapper__stat">
                                                    <div
                                                        className="chart-wrapper__stat__assists"
                                                        style={{
                                                            width: assists
                                                                ? `${
                                                                      assists *
                                                                      5
                                                                  }px`
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
                                <div className="overall">
                                    <h4>Overall</h4>
                                    {team.players.map(
                                        ({
                                            stats: { kills, deaths, assists },
                                            playerName,
                                        }) => (
                                            <div
                                                className="overall__rating"
                                                key={playerName}
                                            >
                                                {kills && deaths && assists
                                                    ? calculateOverall(
                                                          parseInt(kills, 10),
                                                          parseInt(deaths, 10),
                                                          parseInt(assists, 10)
                                                      )
                                                    : "NA"}
                                            </div>
                                        )
                                    )}
                                </div>
                                <div className="k-d-a">
                                    <h4>K/D/A</h4>
                                    {team.players.map(
                                        ({
                                            stats: { kills, deaths, assists },
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
                                                {playerRating ? (
                                                    <div className="rating-wrapper">
                                                        {Array.from({
                                                            length: 5,
                                                        }).map((_, index) => (
                                                            <FontAwesomeIcon
                                                                key={index}
                                                                icon={faStar}
                                                                style={{
                                                                    color:
                                                                        parseFloat(
                                                                            (
                                                                                0.2 *
                                                                                (index +
                                                                                    1)
                                                                            ).toFixed(
                                                                                1
                                                                            )
                                                                        ) <=
                                                                        playerRating
                                                                            ? "gold"
                                                                            : null,
                                                                }}
                                                            />
                                                        ))}
                                                    </div>
                                                ) : null}
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
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}
