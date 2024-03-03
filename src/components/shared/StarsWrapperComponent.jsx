import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarsWrapperComponent({ playerRating }) {
    return (
        <div className="rating-wrapper">
            {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    style={{
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
