import React from "react";
import "./header_.css";
import { Phone } from "react-feather";

function Header() {
  return (
    <header className="header-container">

      <div className="logo">
        Janani.
      </div>

      <nav>
        <ul className="nav-links">
          <li className="active"><a href="/">Home</a></li>
          <li><a href="/about">About Me</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/speaking">Speaking</a></li>
          <li><a href="/insights">Insights</a></li>
        </ul>
      </nav>


      <button className="contact-btn">
        <Phone size={15}/>
        Contact
      </button>

    </header>
  );
}

export default Header;