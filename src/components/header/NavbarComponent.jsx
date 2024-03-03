import React from "react";
import { NavLink } from "react-router-dom";
import { navLinkStyles } from "../../utils/ui-styles/navLinkStyles";

export default function NavbarComponent({ nameClass, toggleMenu }) {
    return (
        <nav className={nameClass}>
            <NavLink
                style={navLinkStyles}
                to="/generate-teams"
                onClick={toggleMenu}
            >
                Generate
            </NavLink>
            <NavLink style={navLinkStyles} to="/my-teams" onClick={toggleMenu}>
                My Teams
            </NavLink>
            <NavLink style={navLinkStyles} to="/stats" onClick={toggleMenu}>
                Stats
            </NavLink>
        </nav>
    );
}
