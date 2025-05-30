import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="logo">HR Management</div>
      <nav>
        <Link
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </Link>
        <Link
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </Link>
        <Link
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </Link>
        <Link to="/dashboard" className={({ isActive }) => (isActive ? "active" : "")}>
          Dashboard
        </Link >

      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </header>
  );
}
