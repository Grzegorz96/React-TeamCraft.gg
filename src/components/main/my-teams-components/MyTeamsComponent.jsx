import React from "react";
import DisplayEventsComponent from "./DisplayEventsComponent";
import EditEventComponent from "./EditEventComponent";
import PopupComponent from "../../shared/PopupComponent";

export default function MyTeamsComponent({
    setEditedEvent,
    removeEvent,
    myTeamsState,
    setTeamName,
    setEventName,
    editEvent,
    backFromEditing,
    toggleEditPlayerStats,
    statsInputsHandler,
    setStats,
    closePopup,
    setWinner,
}) {
    return (
        <div className="main__my-teams">
            {myTeamsState.popup && (
                <PopupComponent
                    message={myTeamsState.popup}
                    closePopup={closePopup}
                />
            )}
            {myTeamsState.editedEvent ? (
                <EditEventComponent
                    myTeamsState={myTeamsState}
                    setTeamName={setTeamName}
                    setEventName={setEventName}
                    editEvent={editEvent}
                    backFromEditing={backFromEditing}
                    toggleEditPlayerStats={toggleEditPlayerStats}
                    statsInputsHandler={statsInputsHandler}
                    setStats={setStats}
                    closePopup={closePopup}
                    setWinner={setWinner}
                />
            ) : (
                <DisplayEventsComponent
                    setEditedEvent={setEditedEvent}
                    removeEvent={removeEvent}
                />
            )}
        </div>
    );
}
