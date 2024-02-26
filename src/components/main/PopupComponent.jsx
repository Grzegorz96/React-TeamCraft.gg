import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

export default function PopupComponent({ message, closePopup }) {
    return (
        <div className="popup">
            {message}
            <button onClick={closePopup}>
                <FontAwesomeIcon className="icon-style1" icon={faX} />
            </button>
        </div>
    );
}
