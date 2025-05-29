import React from "react";
import "./About.css";
export default function About() {
  return (
    <main className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our HR Management System! We are dedicated to helping
        organizations manage their workforce efficiently and effectively. Our
        platform provides tools for employee management, tracking, and
        communication, ensuring a seamless experience for both HR professionals
        and employees.
      </p>
      <p>
        Our mission is to empower businesses with innovative solutions that
        streamline HR processes, improve employee engagement, and foster a
        productive workplace.
      </p>
      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>
            <strong>Integrity:</strong> We maintain honesty and transparency in
            all we do.
          </li>
          <li>
            <strong>Innovation:</strong> Continuously improving with the latest
            technology.
          </li>
          <li>
            <strong>Customer Focus:</strong> Putting our users at the center of
            our development.
          </li>
          <li>
            <strong>Collaboration:</strong> Working together to achieve the best
            results.
          </li>
        </ul>
      </section>
    </main>
  );
}
