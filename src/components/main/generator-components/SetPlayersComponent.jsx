import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrash,
    faPenToSquare,
    faRotateLeft,
    faUsersSlash,
    faDice,
    faPlus,
    faCheck,
    faRankingStar,
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import { generateButtonConditions } from "../../../utils/ui-styles/conditionsForGenerateButton";
import { BigHead } from "@bigheads/core";
const MemoizedBigHead = React.memo(BigHead);

export default function SetPlayersComponent({
    setPlayerName,
    addPlayerToList,
    handleAcceptAndBackButton,
    generatorState,
    editPlayerNameInList,
    removePlayerFromList,
    clearPlayersList,
    toggleEditPlayerName,
    generate,
    toogleRating,
    setRatingForPlayer,
}) {
    return (
        <>
            <div className="buttons-wrapper">
                <button className="button" onClick={handleAcceptAndBackButton}>
                    <FontAwesomeIcon icon={faRotateLeft} />
                    Back
                </button>
                <button
                    className="button"
                    onClick={generate}
                    disabled={generateButtonConditions(generatorState)}
                >
                    <FontAwesomeIcon icon={faDice} /> Generate
                </button>
                <button
                    className="button"
                    onClick={clearPlayersList}
                    disabled={!generatorState.actualListOfPlayers.length}
                >
                    <FontAwesomeIcon icon={faUsersSlash} /> Clear
                </button>
                <button
                    style={{
                        backgroundColor: generatorState.isRatingOn
                            ? "gold"
                            : null,
                    }}
                    className="button"
                    onClick={toogleRating}
                    disabled={!generatorState.actualListOfPlayers.length}
                >
                    <FontAwesomeIcon icon={faRankingStar} /> Rating
                </button>
            </div>
            <div className="set-players-wrapper">
                <h2>
                    {`Players to enter: ${
                        generatorState.numberOfTeams *
                            generatorState.numberOfTeamPlayers -
                        generatorState.actualListOfPlayers.length
                    }`}
                </h2>
                <div className="input-button">
                    <input
                        placeholder="Player name"
                        name="player-name-input"
                        type="text"
                        value={generatorState.nameOfPlayer}
                        onChange={(e) => setPlayerName(e)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                if (generatorState.nameOfEditingPlayer) {
                                    editPlayerNameInList();
                                } else {
                                    addPlayerToList();
                                }
                            }
                        }}
                    />
                    <button
                        onClick={
                            generatorState.nameOfEditingPlayer
                                ? editPlayerNameInList
                                : addPlayerToList
                        }
                    >
                        <FontAwesomeIcon
                            icon={
                                generatorState.nameOfEditingPlayer
                                    ? faCheck
                                    : faPlus
                            }
                        />
                    </button>
                </div>
                {generatorState.actualListOfPlayers.length ? (
                    <div className="players">
                        {generatorState.actualListOfPlayers.map(
                            ({ playerName, playerRating }) => (
                                <div className="player" key={playerName}>
                                    <div className="player__info">
                                        <MemoizedBigHead className="avatar--modifier1" />
                                        <div className="player__text">
                                            {playerName}
                                        </div>
                                    </div>
                                    <div className="rating-wrapper">
                                        {Array.from({ length: 5 }).map(
                                            (_, index) => (
                                                <button
                                                    style={{
                                                        color:
                                                            parseFloat(
                                                                (
                                                                    0.2 *
                                                                    (index + 1)
                                                                ).toFixed(1)
                                                            ) <= playerRating
                                                                ? "gold"
                                                                : null,
                                                    }}
                                                    disabled={
                                                        !generatorState.isRatingOn
                                                    }
                                                    key={index}
                                                    onClick={() =>
                                                        setRatingForPlayer(
                                                            playerName,
                                                            parseFloat(
                                                                (
                                                                    0.2 *
                                                                    (index + 1)
                                                                ).toFixed(1)
                                                            )
                                                        )
                                                    }
                                                >
                                                    <FontAwesomeIcon
                                                        icon={faStar}
                                                    />
                                                </button>
                                            )
                                        )}
                                    </div>
                                    <div className="player__buttons">
                                        <button
                                            className="player__button"
                                            onClick={() =>
                                                toggleEditPlayerName(
                                                    generatorState.nameOfEditingPlayer ===
                                                        playerName
                                                        ? undefined
                                                        : playerName
                                                )
                                            }
                                        >
                                            <FontAwesomeIcon
                                                className="icon-style1"
                                                icon={
                                                    generatorState.nameOfEditingPlayer ===
                                                    playerName
                                                        ? faRotateLeft
                                                        : faPenToSquare
                                                }
                                            />
                                        </button>
                                        <button
                                            className="player__button"
                                            onClick={() =>
                                                removePlayerFromList(playerName)
                                            }
                                        >
                                            <FontAwesomeIcon
                                                className="icon-style1"
                                                icon={faTrash}
                                            />
                                        </button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                ) : null}
            </div>
        </>
    );
}
