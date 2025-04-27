// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container d-flex justify-content-between align-items-center">
                <a className="navbar-brand fw-bold" href="#">
                    Country Explorer
                </a>
            </div>
        </nav>
    );
}
