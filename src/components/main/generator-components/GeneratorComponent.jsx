import React from "react";
import SetPlayersComponent from "./SetPlayersComponent";
import SelectOptionsComponent from "./SelectOptionsComponent";

export default function GeneratorComponent({
    generatorState,
    handleSelectChange,
    handleToggleButton,
    setPlayerName,
    addPlayerToList,
    closePopup,
    editPlayerName,
    undoEditPlayerName,
    editPlayerInList,
    removePlayerFromList,
    clearPlayersList,
}) {
    return (
        <div className="main__container main__generator">
            {generatorState.teamOptionsIsAccepted ? (
                <SetPlayersComponent
                    setPlayerName={setPlayerName}
                    addPlayerToList={addPlayerToList}
                    closePopup={closePopup}
                    handleToggleButton={handleToggleButton}
                    generatorState={generatorState}
                    editPlayerName={editPlayerName}
                    undoEditPlayerName={undoEditPlayerName}
                    editPlayerInList={editPlayerInList}
                    removePlayerFromList={removePlayerFromList}
                    clearPlayersList={clearPlayersList}
                />
            ) : (
                <SelectOptionsComponent
                    handleToggleButton={handleToggleButton}
                    handleSelectChange={handleSelectChange}
                />
            )}
        </div>
    );
}
