import React from "react";
import SetPlayersComponent from "./SetPlayersComponent";
import SelectOptionsComponent from "./SelectOptionsComponent";
import GeneratedTeamsComponent from "./GeneratedTeamsComponent";
import PopupComponent from "../../shared/PopupComponent";

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
            {generatorState.popup && (
                <PopupComponent
                    message={generatorState.popup}
                    closePopup={closePopup}
                />
            )}
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
                <SelectOptionsComponent
                    handleAcceptAndBackButton={handleAcceptAndBackButton}
                    handleSelectChange={handleSelectChange}
                    generatorState={generatorState}
                />
            )}
        </div>
    );
}
