// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">Country Explorer</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Cards</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/map">Map</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
