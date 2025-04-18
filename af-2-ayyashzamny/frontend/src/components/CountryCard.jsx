// src/components/CountryCard.jsx
import React from "react";
import "../styles/CountryCard.css";

const CountryCard = ({ country }) => {
    return (
        <div className="card country-card shadow-sm">
            <img
                src={country.flags?.png}
                alt={country.name?.common}
                className="card-img-top img-fluid"
            />
            <div className="card-body">
                <h5 className="card-title fw-bold">{country.name?.common}</h5>
                <ul className="list-unstyled mb-2">
                    <li><strong>Population:</strong> {country.population?.toLocaleString()}</li>
                    <li><strong>Region:</strong> {country.region}</li>
                    <li><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</li>
                    <li><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</li>
                </ul>
            </div>
        </div>
    );
};

export default CountryCard;
