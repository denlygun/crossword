/**
 * Root application component.
 * Handles global layout and routing.
 * @component
 * @returns {JSX.Element}
 */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReduxProvider from "./components/ReduxProvider";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";
import UserProfile from "./pages/UserProfile";
import ResultsTable from "./pages/ResultsTable";
import "./styles/global.css";

function App() {
    return (
        <ReduxProvider>
            <Router>
                <div className="app">
                    <Routes>
                        <Route path="/" element={<StartPage />} />
                        <Route path="/user/:userId" element={<StartPage />} />
                        <Route path="/game/:userId" element={<GamePage />} />
                        <Route path="/result/:userId" element={<ResultPage />} />
                        <Route path="/profile/:userId" element={<UserProfile />} />
                        <Route path="/results" element={<ResultsTable />} />
                    </Routes>
                </div>
            </Router>
        </ReduxProvider>
    );
}

export default App;