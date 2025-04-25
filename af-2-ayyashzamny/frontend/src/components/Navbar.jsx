// src/components/Navbar.jsx
import React from 'react';
import { useUser, SignOutButton } from '@clerk/clerk-react';

export default function Navbar() {
    const { user } = useUser();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand fw-bold" href="#">
                    Country Explorer
                </a>
                <div className="d-flex align-items-center gap-3 text-white">
                    {user && (
                        <>
                            <span className="fw-semibold">
                                Hi, {user.firstName || user.username || "User"}
                            </span>
                            <SignOutButton>
                                <button className="btn btn-outline-light btn-sm">Logout</button>
                            </SignOutButton>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
