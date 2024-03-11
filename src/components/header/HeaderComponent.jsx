// Import Link component.
import { Link } from "react-router-dom";
// Import the logo image.
import logo from "../../assets/images/logo.png";
// Import components for the header.
import NavbarComponent from "./NavbarComponent";
import DropdownMenuComponent from "./DropdownMenuComponent";

// HeaderComponent: Renders the main header for the application.
export default function HeaderComponent({ toggleMenu, isOpen }) {
    return (
        <header className="header">
            {/* Link to the home page with the application logo. */}
            <Link
                className="header__icon"
                to="/"
                onClick={isOpen ? toggleMenu : null}
            >
                <img src={logo} alt="header-logo" />
            </Link>
            {/* NavbarComponent to display the main navigation menu. */}
            <NavbarComponent nameClass="header__navbar" />
            {/* DropdownMenuComponent for responsive menu on smaller screens. */}
            <DropdownMenuComponent toggleMenu={toggleMenu} isOpen={isOpen} />
        </header>
    );
}
