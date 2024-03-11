import React from "react";
// Custom components for different sections of the generator.
import SetPlayersComponent from "./SetPlayersComponent";
import SelectOptionsComponent from "./SelectOptionsComponent";
import GeneratedTeamsComponent from "./GeneratedTeamsComponent";
import PopupComponent from "../../shared/PopupComponent";

// GeneratorComponent is a functional component responsible for rendering different sections of the team generator based on the generator state.
export default function GeneratorComponent({
    generatorState,
    handleSelectChange,
    handleAcceptAndBackButton,
    setPlayerName,
    addPlayerToList,
    closePopup,
    editPlayerNameInList,
    removePlayerFromList,
    clearPlayersList,
    toggleEditPlayerName,
    generate,
    setListOfGeneratedTeams,
    acceptGeneratedTeams,
    setEventName,
    setTeamName,
    toogleRating,
    setRatingForPlayer,
    calculateWiningChance,
}) {
    return (
        <div className="main__generator">
            {/* Render the PopupComponent if there is a popup message. */}
            {generatorState.popup && (
                <PopupComponent
                    message={generatorState.popup}
                    closePopup={closePopup}
                />
            )}

            {/* Render the GeneratedTeamsComponent if team options are accepted and there are generated teams. */}
            {generatorState.isTeamOptionsAccepted ? (
                generatorState.generatedTeams.length ? (
                    <GeneratedTeamsComponent
                        setListOfGeneratedTeams={setListOfGeneratedTeams}
                        generatorState={generatorState}
                        generate={generate}
                        acceptGeneratedTeams={acceptGeneratedTeams}
                        setEventName={setEventName}
                        setTeamName={setTeamName}
                        calculateWiningChance={calculateWiningChance}
                    />
                ) : (
                    /* Render the SetPlayersComponent if team options are accepted but there are no generated teams. */
                    <SetPlayersComponent
                        setPlayerName={setPlayerName}
                        addPlayerToList={addPlayerToList}
                        closePopup={closePopup}
                        handleAcceptAndBackButton={handleAcceptAndBackButton}
                        generatorState={generatorState}
                        editPlayerNameInList={editPlayerNameInList}
                        removePlayerFromList={removePlayerFromList}
                        clearPlayersList={clearPlayersList}
                        toggleEditPlayerName={toggleEditPlayerName}
                        generate={generate}
                        toogleRating={toogleRating}
                        setRatingForPlayer={setRatingForPlayer}
                    />
                )
            ) : (
                /* Render the SelectOptionsComponent if team options are not yet accepted. */
                <SelectOptionsComponent
                    handleAcceptAndBackButton={handleAcceptAndBackButton}
                    handleSelectChange={handleSelectChange}
                    generatorState={generatorState}
                />
            )}
        </div>
    );
}
