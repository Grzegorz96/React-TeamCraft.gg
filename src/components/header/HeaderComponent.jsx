import { Link } from "react-router-dom";
import icon from "../../assets/images/icon.png";

export default function HeaderComponent({ children }) {
    return (
        <header className="header">
            <Link className="header__icon" to="/">
                <img src={icon} />
            </Link>
            {children}
        </header>
    );
}
