import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import NavbarComponent from "./NavbarComponent";

export default function DropdownMenuComponent({ toggleMenu, isOpen }) {
    return (
        <>
            <FontAwesomeIcon
                className="header__hamburger-menu"
                icon={isOpen ? faX : faBars}
                onClick={toggleMenu}
            />
            <NavbarComponent
                nameClass={`header__dropdown${isOpen ? "--active" : ""}`}
                toggleMenu={toggleMenu}
            />
        </>
    );
}
