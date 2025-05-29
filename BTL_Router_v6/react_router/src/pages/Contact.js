import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <main className="contact-container">
      <h1>Contact Us</h1>

      <section className="contact-item">
        <span role="img" aria-label="email" className="contact-icon">
          📧
        </span>
        <div>
          <h3>Email</h3>
          <a href="mailto:hrmanagement@example.com">hrmanagement@example.com</a>
        </div>
      </section>

      <section className="contact-item">
        <span role="img" aria-label="phone" className="contact-icon">
          📞
        </span>
        <div>
          <h3>Phone</h3>
          <a href="tel:1234567890">123-456-7890</a>
        </div>
      </section>
    </main>
  );
}
