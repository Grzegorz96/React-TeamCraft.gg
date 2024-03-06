import React from "react";
import { generatorActions } from "../../../reducers/generator-reducer/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { customSelectStyles } from "../../../utils/ui-styles/customSelectStyles";

export default function SelectOptionsComponent({
    handleSelectChange,
    handleAcceptAndBackButton,
}) {
    return (
        <>
            <button className="button" onClick={handleAcceptAndBackButton}>
                <FontAwesomeIcon icon={faCheck} />
                Accept
            </button>
            <div className="select-options-wrapper">
                <div className="select-wrapper">
                    <h4>Select team count:</h4>
                    <Select
                        options={Array.from({ length: 10 }, (_, index) => ({
                            value: index + 1,
                            label: `${index + 1} ${index ? "teams" : "team"}`,
                        }))}
                        isSearchable={false}
                        placeholder="Select..."
                        styles={customSelectStyles}
                        onChange={({ value }) =>
                            handleSelectChange(
                                value,
                                generatorActions.setNumberOfTeams
                            )
                        }
                    />
                </div>
                <div className="select-wrapper">
                    <h4>Select team size:</h4>
                    <Select
                        options={Array.from({ length: 20 }, (_, index) => ({
                            value: index + 1,
                            label: `${index + 1} ${
                                index ? "players" : "player"
                            }`,
                        }))}
                        isSearchable={false}
                        placeholder="Select..."
                        styles={customSelectStyles}
                        onChange={({ value }) =>
                            handleSelectChange(
                                value,
                                generatorActions.setNumberOfTeamPlayers
                            )
                        }
                    />
                </div>
            </div>
        </>
    );
}
