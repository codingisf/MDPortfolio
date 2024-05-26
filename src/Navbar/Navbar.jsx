import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  

  return <nav>
  <div className="nav-logo">
    <h3>Cybernetic MD</h3>
  </div>
  <div className="list">
    <ul className="ul">
    <Link className="link" smooth to="#home">
      <li className="li">Home</li>
      </Link>
      <Link className="link" smooth to="#about">
        <li className="li">About</li>
      </Link>
      <Link className="link" smooth to="#skills">
        <li className="li">Skills</li>
      </Link>
      <Link className="link" smooth to="#contact">
        <li className="li">Contact</li>
      </Link>
    </ul>
  </div>
</nav>;
}

export default Navbar;
