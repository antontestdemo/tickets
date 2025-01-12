import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PerformancesPage from "./pages/PerformancesPage";
import AddPerformancePage from "./pages/AddPerformancePage";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/performances"
            element={
              <ProtectedRoute>
                <PerformancesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-performance"
            element={
              <ProtectedRoute>
                <AddPerformancePage />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
