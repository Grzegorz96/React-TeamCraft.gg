import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/header/HeaderComponent";

export default function HeaderContainer() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                toggleMenu();
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]);

    return <HeaderComponent toggleMenu={toggleMenu} isOpen={isOpen} />;
}
