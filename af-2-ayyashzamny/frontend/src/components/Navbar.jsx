import React from 'react';
import { useUser, SignOutButton } from '@clerk/clerk-react';

export default function Navbar() {
    const { user } = useUser();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container-fluid">
                {/* Left – Brand */}
                <a className="navbar-brand fw-bold" href="#">
                    Country Explorer
                </a>

                {/* Toggle button for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible content */}
                <div className="collapse navbar-collapse" id="navbarContent">
                    {/* Center – Menu */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-lg-2">
                            <a className="nav-link" href="/game">Game</a>
                        </li>
                    </ul>

                    {/* Right – User greeting + Logout */}
                    {user && (
                        <div className="d-flex align-items-center text-white ms-lg-auto mt-2 mt-lg-0">
                            <span className="fw-semibold me-3">
                                Hi, {user.firstName || user.username || 'User'}
                            </span>
                            <SignOutButton>
                                <button className="btn btn-outline-light btn-sm">Logout</button>
                            </SignOutButton>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
