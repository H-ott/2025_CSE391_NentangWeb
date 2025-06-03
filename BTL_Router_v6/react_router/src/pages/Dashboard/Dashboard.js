import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📊 Dashboard</h2>

      <nav style={styles.nav}>
        <Link to="analytics" style={styles.link}>Analytics</Link>
        <Link to="reports" style={styles.link}>Reports</Link>
      </nav>

      <div style={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  },
  nav: {
    marginBottom: '20px',
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007BFF',
    padding: '10px 15px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  content: {
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
};
