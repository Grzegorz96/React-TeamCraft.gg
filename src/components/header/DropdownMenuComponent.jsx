// Import React library.
import React from "react";
// Import FontAwesome icons for menu.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
// Import the NavbarComponent.
import NavbarComponent from "./NavbarComponent";

// DropdownMenuComponent: Renders the dropdown menu for the header.
export default function DropdownMenuComponent({ toggleMenu, isOpen }) {
    return (
        <>
            {/* Button to toggle the menu, with dynamic icon based on the menu state. */}
            <button className="header__hamburger-menu" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faX : faBars} />
            </button>
            {/* NavbarComponent to display the actual menu. */}
            <NavbarComponent
                // Adding a modifier class based on the menu state.
                nameClass={`header__dropdown${isOpen ? "--active" : ""}`}
                toggleMenu={toggleMenu}
            />
        </>
    );
}
