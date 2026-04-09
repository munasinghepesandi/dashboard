import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer-shell">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="PM Education Logo" />
          <span>PM Education</span>
        </div>

        <nav className="footer-links">
          <a href="#">Dashboard</a>
          <a href="#">Courses</a>
          <a href="#">Students</a>
          <a href="#">Support</a>
        </nav>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} P&M Technologies. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
