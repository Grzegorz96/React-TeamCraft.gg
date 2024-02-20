import React from "react";
import DisplayEventsComponent from "./DisplayEventsComponent";
import EditEventComponent from "./EditEventComponent";

export default function MyTeamsComponent({
    setEditedEvent,
    removeEvent,
    myTeamsState,
    setTeamName,
    setEventName,
    editEvent,
    backFromEditing,
    setEditedPlayer,
    statsInputsHandler,
    setStats,
}) {
    return (
        <div className="main__container main__my-teams">
            {myTeamsState.editedEvent ? (
                <EditEventComponent
                    myTeamsState={myTeamsState}
                    setTeamName={setTeamName}
                    setEventName={setEventName}
                    editEvent={editEvent}
                    backFromEditing={backFromEditing}
                    setEditedPlayer={setEditedPlayer}
                    statsInputsHandler={statsInputsHandler}
                    setStats={setStats}
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
