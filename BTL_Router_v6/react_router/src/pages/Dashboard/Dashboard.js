import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard Page</h2>
      <nav>
        <Link to="analytics">Analytics</Link> |{" "}
        <Link to="reports">Reports</Link>
      </nav>

      <Outlet /> {/* Route con sẽ render ở đây */}
    </div>
  );
}
