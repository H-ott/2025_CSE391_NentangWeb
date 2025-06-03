import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo">💼 HR Management</div>

        <nav className="nav-menu">
          <a className="nav-item" href="/">
            Home
          </a>
          <a className="nav-item" href="/contact">
            Contact
          </a>
          <a className="nav-item" href="/about">
            About
          </a>
          <a className="nav-item" href="/dashboard">
            Dashboard
          </a>
          {/* <Link to="/" end className="nav-item">
            Home
          </Link>
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/dashboard" className="nav-item">
            Dashboard
          </Link> */}
        </nav>
      </div>

      <div className="header-right">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-btn">🔍</button>
      </div>
    </header>
  );
}
