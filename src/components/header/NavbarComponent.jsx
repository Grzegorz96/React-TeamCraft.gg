import React from "react";
import { NavLink } from "react-router-dom";
import { navLinkStyles } from "../../utils/ui-styles/navLinkStyles";

export default function NavbarComponent() {
    return (
        <nav className="navbar">
            <NavLink style={navLinkStyles} to="/generate-teams">
                Generate
            </NavLink>
            <NavLink style={navLinkStyles} to="/history">
                History
            </NavLink>
            <NavLink style={navLinkStyles} to="/stats">
                Stats
            </NavLink>
        </nav>
    );
}
