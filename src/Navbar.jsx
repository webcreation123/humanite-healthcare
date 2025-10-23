import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
        </Link>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link nav-underline" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-underline" to="/about">About</Link>
            </li>

            {/* Division with dropdown */}
            <li className="nav-item dropdown d-flex align-items-center">
              {/* Main Division Page */}
              <Link className="nav-link nav-underline">
                Division
              </Link>
              {/* Dropdown Toggle */}
              <a
                href="/#"
                className="nav-link dropdown-toggle no-underline"
                id="divisionDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>

              {/* Dropdown Menu */}
              <ul className="dropdown-menu" aria-labelledby="divisionDropdown">
                      <li>
                  <Link className="dropdown-item" to="/gynecology">
                    Gynecology
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/gastroenterology">
                    Gastroenterology
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/cns">
                    CNS
                  </Link>
              
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link nav-underline" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
