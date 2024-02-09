import React from "react";
import { generatorActions } from "../../../reducers/generator-reducer/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function SelectOptionsComponent({
    handleSelectChange,
    handleToggleButton,
}) {
    return (
        <>
            <button className="button" onClick={handleToggleButton}>
                <FontAwesomeIcon icon={faCheck} />
                Accept
            </button>
            <div className="select-options-wrapper">
                <div className="select">
                    <label htmlFor="select-team-quantitiy">
                        Select the number of teams:
                    </label>
                    <select
                        id="select-team-quantitiy"
                        onChange={(e) =>
                            handleSelectChange(
                                e,
                                generatorActions.setNumberOfTeams
                            )
                        }
                    >
                        {Array.from(
                            { length: 10 },
                            (_, index) => index + 1
                        ).map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="select">
                    <label htmlFor="select-players-quantitiy">
                        Select players per team:
                    </label>
                    <select
                        id="select-players-quantitiy"
                        onChange={(e) =>
                            handleSelectChange(
                                e,
                                generatorActions.setNumberOfTeamPlayers
                            )
                        }
                    >
                        {Array.from(
                            { length: 20 },
                            (_, index) => index + 1
                        ).map((number) => (
                            <option key={number} value={number}>
                                {number}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    );
}
