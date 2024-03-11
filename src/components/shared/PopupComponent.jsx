import React from "react";
// FontAwesomeIcon component for displaying icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importing the 'faX' icon from Font Awesome.
import { faX } from "@fortawesome/free-solid-svg-icons";

// PopupComponent: Renders a popup with a message and a close button.
export default function PopupComponent({ message, closePopup }) {
    return (
        <div className="popup">
            {/* Display the message passed as props. */}
            {message}
            {/* Close button for the popup */}
            <button onClick={closePopup}>
                {/* FontAwesomeIcon for the 'faX' icon. */}
                <FontAwesomeIcon className="icon-style1" icon={faX} />
            </button>
        </div>
    );
}
