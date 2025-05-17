// src/components/Navbar.jsx
import React from 'react';
import { useUser, SignOutButton } from '@clerk/clerk-react';

export default function Navbar() {
    const { user } = useUser();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container-fluid">

                {/* left – brand */}
                <a className="navbar-brand fw-bold ms-3" href="#">
                    Country Explorer
                </a>

                {/* center – menu */}
                <div className="mx-auto">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/game">Game</a>
                        </li>
                    </ul>
                </div>

                {/* right – user greeting + logout */}
                {user && (
                    <div className="d-flex align-items-center gap-3 me-3 text-white">
                        <span className="fw-semibold">
                            Hi, {user.firstName || user.username || 'User'}
                        </span>
                        <SignOutButton>
                            <button className="btn btn-outline-light btn-sm">Logout</button>
                        </SignOutButton>
                    </div>
                )}
            </div>
        </nav>
    );
}
