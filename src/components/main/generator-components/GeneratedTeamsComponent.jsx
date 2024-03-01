import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRotateLeft,
    faDice,
    faCheck,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { BigHead } from "@bigheads/core";
const MemoizedBigHead = React.memo(BigHead);

export default function GeneratedTeamsComponent({
    setListOfGeneratedTeams,
    generatorState,
    generate,
    acceptGeneratedTeams,
    setEventName,
    setTeamName,
    calculateWiningChance,
}) {
    return (
        <>
            <div className="buttons-wrapper">
                <button
                    className="button"
                    onClick={() => setListOfGeneratedTeams([])}
                >
                    <FontAwesomeIcon icon={faRotateLeft} />
                    Back
                </button>
                <button className="button" onClick={generate}>
                    <FontAwesomeIcon icon={faDice} /> Regenerate
                </button>
                <button className="button" onClick={acceptGeneratedTeams}>
                    <FontAwesomeIcon icon={faCheck} /> Accept
                </button>
            </div>
            <input
                placeholder="Create event name"
                className="event-name-input"
                type="text"
                name="event-name"
                value={generatorState.eventName}
                onChange={(e) => setEventName(e)}
            />

            <div className="generated-teams-wrapper">
                {generatorState.generatedTeams.map(
                    (teamObject, teamObjectIndex) => (
                        <div className="team" key={teamObjectIndex}>
                            <input
                                name="team-name"
                                type="text"
                                className="team-name-input"
                                placeholder="Create team name"
                                value={teamObject.teamName}
                                onChange={(e) =>
                                    setTeamName(teamObjectIndex, e)
                                }
                            />
                            {teamObject.players.map(
                                ({ playerName, playerRating }) => (
                                    <div className="player" key={playerName}>
                                        <div className="player__info">
                                            <div className="avatar">
                                                <MemoizedBigHead />
                                            </div>
                                            <div className="player__text">
                                                {playerName}
                                            </div>
                                        </div>
                                        {generatorState.isRatingOn ? (
                                            <div className="rating-wrapper">
                                                {Array.from({ length: 5 }).map(
                                                    (_, index) => (
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
                                                    )
                                                )}
                                            </div>
                                        ) : null}
                                    </div>
                                )
                            )}
                            {generatorState.isRatingOn && (
                                <div className="winning-chance">
                                    {`Winning chance: ${calculateWiningChance(
                                        teamObject
                                    )}%`}
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
        </>
    );
}
