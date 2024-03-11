import React from "react";
// FontAwesomeIcon component for displaying icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the 'faStar' icon from Font Awesome.
import { faStar } from "@fortawesome/free-solid-svg-icons";

// StarsWrapperComponent: Renders a star rating based on playerRating.
export default function StarsWrapperComponent({ playerRating }) {
    return (
        <div className="rating-wrapper">
            {/* Using Array.from to create an array with a length of 5. */}
            {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{
                        // Setting the star color based on playerRating.
                        color:
                            parseFloat((0.2 * (index + 1)).toFixed(1)) <=
                            playerRating
                                ? "gold"
                                : null,
                    }}
                />
            ))}
        </div>
    );
}
