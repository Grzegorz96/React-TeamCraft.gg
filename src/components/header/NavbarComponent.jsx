import React from "react";
// NavLink component from react-router-dom for navigation links.
import { NavLink } from "react-router-dom";
// Styles for navigation links.
import { navLinkStyles } from "../../utils/ui-styles/navLinkStyles";
// FontAwesomeIcon component for displaying icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importing specific icons from Font Awesome.
import {
    faUsersGear,
    faChartSimple,
    faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

// NavbarComponent: Renders the navigation menu with links.
export default function NavbarComponent({ nameClass, toggleMenu }) {
    return (
        <nav className={nameClass}>
            {/* NavLink for generating teams. */}
            <NavLink
                style={navLinkStyles}
                to="/generate-teams"
                onClick={toggleMenu}
                // tabIndex -1 is used for closed dropdown menu.
                tabIndex={nameClass === "header__dropdown" ? -1 : 0}
            >
                <FontAwesomeIcon icon={faUsersGear} />
                Generate
            </NavLink>
            {/* NavLink for viewing user's teams */}
            <NavLink
                style={navLinkStyles}
                to="/my-teams"
                onClick={toggleMenu}
                tabIndex={nameClass === "header__dropdown" ? -1 : 0}
            >
                <FontAwesomeIcon icon={faPeopleGroup} />
                My Teams
            </NavLink>
            {/* NavLink for viewing statistics */}
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
