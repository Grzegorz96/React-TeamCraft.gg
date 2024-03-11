import React from "react";
// Import DisplayEventsComponent for rendering events.
import DisplayEventsComponent from "./DisplayEventsComponent";
// Import EditEventComponent for rendering edit events.
import EditEventComponent from "./EditEventComponent";
// Import PopupComponent for displaying popups.
import PopupComponent from "../../shared/PopupComponent";

// Component for rendering the "My Teams" section.
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
            {/* Render the PopupComponent if there is a popup message. */}
            {myTeamsState.popup && (
                <PopupComponent
                    message={myTeamsState.popup}
                    closePopup={closePopup}
                />
            )}

            {/* Conditionally render the editing or display view based on the state. */}
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
