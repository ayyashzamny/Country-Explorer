import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CountryExplorer from "./pages/CountryExplorer";
import LoginWithOTP from './pages/auth/LoginWithOTP';

const ProtectedRoute = ({ children }) => {
  // Check if the user is logged in (you can use localStorage, context, etc.)
  const isLoggedIn = localStorage.getItem('authToken'); // Adjust according to your auth setup

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><CountryExplorer /></ProtectedRoute>} />
      <Route path="/auth/login" element={<LoginWithOTP />} />
    </Routes>
  );
}

export default App;
