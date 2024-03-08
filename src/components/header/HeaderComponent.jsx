import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import NavbarComponent from "./NavbarComponent";
import DropdownMenuComponent from "./DropdownMenuComponent";

export default function HeaderComponent({ toggleMenu, isOpen }) {
    return (
        <header className="header">
            <Link
                className="header__icon"
                to="/"
                onClick={isOpen ? toggleMenu : null}
            >
                <img src={logo} alt="header-logo" />
            </Link>
            <NavbarComponent nameClass="header__navbar" />
            <DropdownMenuComponent toggleMenu={toggleMenu} isOpen={isOpen} />
        </header>
    );
}
