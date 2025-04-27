import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../pages/firebase/firebase'; // import your auth

const ProtectedRoute = ({ children }) => {
    const user = auth.currentUser;

    if (!user) {
        // 🔥 If no user, redirect to login
        return <Navigate to="/Login" replace />;
    }

    // ✅ If logged in, show the page
    return children;
};

export default ProtectedRoute;
