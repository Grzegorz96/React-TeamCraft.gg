// Import necessary dependencies from React and react-router-dom library.
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import various containers and components.
import HomeComponent from "../../components/main/HomeComponent";
import GeneratorContainer from "./GeneratorContainer";
import MyTeamsContainer from "./MyTeamsContainer";
import StatsContainer from "./StatsContainer";
import NotFoundComponent from "../../components/main/NotFoundComponent";

// Define a functional component named MainContainer.
export default function MainContainer() {
    // Render the main container component.
    return (
        <main className="main">
            {/* Define routes for different paths using the Routes and Route components. */}
            <Routes>
                {/* Route for the home page. */}
                <Route path="/" element={<HomeComponent />} />
                {/* Route for generating teams. */}
                <Route
                    path="/generate-teams"
                    element={<GeneratorContainer />}
                />
                {/* Route for displaying user's teams. */}
                <Route path="/my-teams" element={<MyTeamsContainer />} />
                {/* Route for displaying statistics. */}
                <Route path="/stats" element={<StatsContainer />} />
                {/* Route for handling any other paths (404 not found). */}
                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </main>
    );
}
