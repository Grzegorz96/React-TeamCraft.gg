// Import necessary dependencies from React and other modules.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/index.scss";
import { BrowserRouter } from "react-router-dom";

// Rendering the main <App /> component in the element with id "root" using ReactDOM.createRoot.
ReactDOM.createRoot(document.getElementById("root")).render(
    // Wrapping the application in <React.StrictMode> for catching potential issues.
    <React.StrictMode>
        {/* 
            The <BrowserRouter> component is used to enable routing in the application.
            It provides the necessary context for routing and renders the main <App /> component.
        */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
