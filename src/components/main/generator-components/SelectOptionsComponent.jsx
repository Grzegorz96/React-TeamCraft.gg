import React from "react";
// Action types for generator state management.
import { generatorActions } from "../../../reducers/generator-reducer/actionTypes";
// FontAwesomeIcon for displaying icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// FontAwesome check icon.
import { faCheck } from "@fortawesome/free-solid-svg-icons";
// React Select component for styled dropdowns.
import Select from "react-select";
// Custom styling for React Select.
import { customSelectStyles } from "../../../utils/ui-styles/customSelectStyles";

// SelectOptionsComponent is a functional component responsible for rendering the options selection section of the team generator.
export default function SelectOptionsComponent({
    handleSelectChange,
    handleAcceptAndBackButton,
}) {
    return (
        <>
            {/* Render the accept button with FontAwesome check icon. */}
            <button className="button" onClick={handleAcceptAndBackButton}>
                <FontAwesomeIcon icon={faCheck} />
                Accept
            </button>

            {/* Render the team count and team size selection dropdowns. */}
            <div className="select-options-wrapper">
                <div className="select-options-wrapper__select-wrapper">
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
                <div className="select-options-wrapper__select-wrapper">
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
