import React from "react";
// Alphabet utility for team naming.
import { alphabet } from "../../../utils/alphabet";
// Custom hook for accessing main context data.
import { useMainData } from "../../../context/MainProvider";
// FontAwesomeIcon for displaying icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// FontAwesome icons used in the component.
import {
    faTrash,
    faPenToSquare,
    faCrown,
} from "@fortawesome/free-solid-svg-icons";
// BigHead component for displaying avatar images.
import { BigHead } from "@bigheads/core";
// Reusable component for displaying star ratings.
import StarsWrapperComponent from "../../shared/StarsWrapperComponent";

// MemoizedBigHead is a memoized version of the BigHead component.
const MemoizedBigHead = React.memo(BigHead);

// DisplayEventsComponent is a functional component responsible for rendering the events, teams, and players in my team page.
export default function DisplayEventsComponent({
    setEditedEvent,
    removeEvent,
}) {
    const { mainState } = useMainData();

    // Display a message if no teams have been created.
    return mainState.acceptedTeams.length < 1 ? (
        <h2>No teams have been created.</h2>
    ) : (
        // Render events, teams, and players.
        <>
            {mainState.acceptedTeams.map((eventObject, eventObjectIndex) => (
                <div className="event-wrapper" key={eventObjectIndex}>
                    <div className="event-wrapper__buttons-wrapper">
                        {/* Button to remove the event. */}
                        <button onClick={() => removeEvent(eventObject)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                        {/* Button to edit the event. */}
                        <button
                            onClick={() =>
                                setEditedEvent(eventObject, eventObjectIndex)
                            }
                        >
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                    </div>
                    {/* Display event name or default if not provided. */}
                    <h3>
                        {eventObject.eventName
                            ? eventObject.eventName
                            : `Event ${eventObjectIndex + 1}`}
                    </h3>
                    {/* Render teams and players. */}
                    <div className="teams-wrapper">
                        {eventObject.teams.map((team, teamIndex) => (
                            <div
                                className="teams-wrapper__team-wrapper"
                                key={teamIndex}
                                style={{
                                    border: team.isWinner
                                        ? "2px solid gold"
                                        : null,
                                }}
                            >
                                {/* Display crown icon for the winning team. */}
                                {team.isWinner && (
                                    <FontAwesomeIcon
                                        className="crown"
                                        icon={faCrown}
                                    />
                                )}
                                {/* Display team name or default if not provided. */}
                                <div className="players-wrapper">
                                    <h4>
                                        {team.teamName
                                            ? team.teamName
                                            : `Team ${alphabet[teamIndex]}`}
                                    </h4>
                                    {/* Render players within the team. */}
                                    {team.players.map(({ playerName }) => (
                                        <div
                                            className="player"
                                            key={playerName}
                                        >
                                            {/* Display player avatar. */}
                                            <div className="avatar">
                                                <MemoizedBigHead />
                                            </div>
                                            {/* Display player name. */}
                                            <div className="player__text">
                                                {playerName}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Display K/D/A stats for each player in the team. */}
                                <div className="k-d-a">
                                    <h4>K/D/A</h4>
                                    {team.players.map(
                                        (
                                            {
                                                stats: {
                                                    kills,
                                                    deaths,
                                                    assists,
                                                },
                                                playerRating,
                                            },
                                            playerName
                                        ) => (
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
                                                {/* Display K/D/A text. */}
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
                    {/* Display creation date of the event. */}
                    <h5>creation date: {eventObject.creationDate}</h5>
                </div>
            ))}
        </>
    );
}
