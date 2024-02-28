import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "../../components/main/HomeComponent";
import GeneratorContainer from "./GeneratorContainer";
import MyTeamsContainer from "./MyTeamsContainer";
import StatsContainer from "./StatsContainer";
import NotFoundComponent from "../../components/main/NotFoundComponent";

export default function MainContainer() {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route
                    path="/generate-teams"
                    element={<GeneratorContainer />}
                />
                <Route path="/my-teams" element={<MyTeamsContainer />} />
                <Route path="/stats" element={<StatsContainer />} />
                <Route path="*" element={<NotFoundComponent />} />
            </Routes>
        </main>
    );
}
