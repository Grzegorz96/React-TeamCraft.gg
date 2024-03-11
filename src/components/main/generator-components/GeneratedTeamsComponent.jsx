import React from "react";
// FontAwesomeIcon is a React component for using Font Awesome icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Individual Font Awesome icons for control buttons.
import {
    faRotateLeft,
    faDice,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
// BigHead is a component for generating customizable avatar images.
import { BigHead } from "@bigheads/core";
// Custom component for displaying star ratings.
import StarsWrapperComponent from "../../shared/StarsWrapperComponent";

// MemoizedBigHead is a memoized version of the BigHead component.
const MemoizedBigHead = React.memo(BigHead);

// GeneratedTeamsComponent: Displays and manipulates generated teams.
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
            {/* Control buttons. */}
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

            {/* Input for event name. */}
            <input
                placeholder="Create event name"
                className="event-name-input"
                type="text"
                name="event-name"
                value={generatorState.eventName}
                onChange={(e) => setEventName(e)}
            />

            {/* Display generated teams. */}
            <div className="generated-teams-wrapper">
                {generatorState.generatedTeams.map(
                    (teamObject, teamObjectIndex) => (
                        <div className="team" key={teamObjectIndex}>
                            {/* Input for team name. */}
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

                            {/* Display players in the team. */}
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

                                        {/* Display player rating if rating mode is on. */}
                                        {generatorState.isRatingOn && (
                                            <StarsWrapperComponent
                                                playerRating={playerRating}
                                            />
                                        )}
                                    </div>
                                )
                            )}

                            {/* Display winning chance if rating mode is on. */}
                            {generatorState.isRatingOn && (
                                <div className="team__winning-chance">
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
