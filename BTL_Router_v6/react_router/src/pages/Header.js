import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo">💼 HR Management</div>
        <nav className="nav-menu">
          <NavLink to="/" end className="nav-item">
            Home
          </NavLink>
          <NavLink to="/contact" className="nav-item">
            Contact
          </NavLink>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
          <NavLink to="/dashboard" className="nav-item">
            Dashboard
          </NavLink>
        </nav>
      </div>

      <div className="header-right">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-btn">🔍</button>
      </div>
    </header>
  );
}
