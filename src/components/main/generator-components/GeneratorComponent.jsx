import React from "react";
import SetPlayersComponent from "./SetPlayersComponent";
import SelectOptionsComponent from "./SelectOptionsComponent";
import GeneratedTeamsComponent from "./GeneratedTeamsComponent";

export default function GeneratorComponent({
    generatorState,
    handleSelectChange,
    handleAcceptAndBackButton,
    setPlayerName,
    addPlayerToList,
    closePopup,
    editPlayerInList,
    removePlayerFromList,
    clearPlayersList,
    toggleEditPlayerName,
    generate,
    setListOfGeneratedTeams,
    acceptGeneratedTeams,
}) {
    return (
        <div className="main__container main__generator">
            {generatorState.isTeamOptionsAccepted ? (
                generatorState.generatedTeams.length ? (
                    <GeneratedTeamsComponent
                        setListOfGeneratedTeams={setListOfGeneratedTeams}
                        generatorState={generatorState}
                        generate={generate}
                        acceptGeneratedTeams={acceptGeneratedTeams}
                    />
                ) : (
                    <SetPlayersComponent
                        setPlayerName={setPlayerName}
                        addPlayerToList={addPlayerToList}
                        closePopup={closePopup}
                        handleAcceptAndBackButton={handleAcceptAndBackButton}
                        generatorState={generatorState}
                        editPlayerInList={editPlayerInList}
                        removePlayerFromList={removePlayerFromList}
                        clearPlayersList={clearPlayersList}
                        toggleEditPlayerName={toggleEditPlayerName}
                        generate={generate}
                    />
                )
            ) : (
                <SelectOptionsComponent
                    handleAcceptAndBackButton={handleAcceptAndBackButton}
                    handleSelectChange={handleSelectChange}
                />
            )}
        </div>
    );
}
