import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import NavbarComponent from "./NavbarComponent";

export default function DropdownMenuComponent({ toggleMenu, isOpen }) {
    return (
        <>
            <button className="header__hamburger-menu" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faX : faBars} />
            </button>
            <NavbarComponent
                nameClass={`header__dropdown${isOpen ? "--active" : ""}`}
                toggleMenu={toggleMenu}
            />
        </>
    );
}
