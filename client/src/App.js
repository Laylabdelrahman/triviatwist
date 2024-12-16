import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes for v6

// Import your pages
import Home from './pages/home';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Dashboard from "./pages/Dashboard";
import TopicDashboard from "./pages/TopicDashboard";

// Styled components
import { StyledContainer } from "./components/Styles";

function App() {
    console.log("Rendering App component");

    return (
        <Router>
            <StyledContainer>
                <Routes>
                    <Route path="/" element={<Home />} /> {/* element prop for v6 */}
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/TopicDashboard" element={<TopicDashboard />} />
                </Routes>
            </StyledContainer>
        </Router>
    );
}

export default App;
