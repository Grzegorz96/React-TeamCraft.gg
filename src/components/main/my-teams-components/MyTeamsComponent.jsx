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
}) {
    return (
        <div className="main__container main__my-teams">
            {myTeamsState.editedEvent ? (
                <EditEventComponent
                    myTeamsState={myTeamsState}
                    setTeamName={setTeamName}
                    setEventName={setEventName}
                    editEvent={editEvent}
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
