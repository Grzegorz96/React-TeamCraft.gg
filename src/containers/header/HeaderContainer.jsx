// Import necessary dependencies from React library.
import React, { useState, useEffect } from "react";
// Import HeaderComponent from the specified location.
import HeaderComponent from "../../components/header/HeaderComponent";

// Define a functional component named HeaderContainer.
export default function HeaderContainer() {
    // State variable to manage the open/closed state of the menu.
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu state.
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // useEffect hook to handle window resize events.
    useEffect(() => {
        // Event handler to close the menu if window width is greater than 768 pixels.
        const handleResize = () => {
            if (window.innerWidth > 768 && isOpen) {
                toggleMenu();
            }
        };

        // Add an event listener for the resize event.
        window.addEventListener("resize", handleResize);

        // Cleanup: remove the event listener when the component unmounts.
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isOpen]); // useEffect dependency array to watch changes in isOpen state.

    // Render the HeaderComponent, passing toggleMenu and isOpen as props.
    return <HeaderComponent toggleMenu={toggleMenu} isOpen={isOpen} />;
}
