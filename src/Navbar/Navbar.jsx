import React from "react";
import "../App.css"
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <h3>Cybernetic MD</h3>
      </div>
      <div className="list">
        <ul className="ul">
          <Link className="link" to="home" smooth={true} duration={500}>
            <li className="li">Home</li>
          </Link>
          <Link className="link" to="about" smooth={true} duration={700}>
            <li className="li">About</li>
          </Link>
          <Link className="link" to="Qualification" smooth={true} duration={900}>
            <li className="li">Qualification</li>
          </Link>
          <Link className="link" to="skills" smooth={true} duration={900}>
            <li className="li">Skills</li>
          </Link>
          <Link className="link" to="contact" smooth={true} duration={1200}>
            <li className="li">Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
