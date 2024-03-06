import React from "react";
import { NavLink } from "react-router-dom";
import { navLinkStyles } from "../../utils/ui-styles/navLinkStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsersGear,
    faChartSimple,
    faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function NavbarComponent({ nameClass, toggleMenu }) {
    return (
        <nav className={nameClass}>
            <NavLink
                style={navLinkStyles}
                to="/generate-teams"
                onClick={toggleMenu}
                tabIndex={nameClass === "header__dropdown" ? -1 : 0}
            >
                <FontAwesomeIcon icon={faUsersGear} />
                Generate
            </NavLink>
            <NavLink
                style={navLinkStyles}
                to="/my-teams"
                onClick={toggleMenu}
                tabIndex={nameClass === "header__dropdown" ? -1 : 0}
            >
                <FontAwesomeIcon icon={faPeopleGroup} />
                My Teams
            </NavLink>
            <NavLink
                style={navLinkStyles}
                to="/stats"
                onClick={toggleMenu}
                tabIndex={nameClass === "header__dropdown" ? -1 : 0}
            >
                <FontAwesomeIcon icon={faChartSimple} />
                Statistics
            </NavLink>
        </nav>
    );
}
