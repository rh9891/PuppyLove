import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = props => 
  <nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <Link className="navbar-brand" to="/">
      Puppy Love
    </Link>
      <ul className="navbar-nav">
        <li className={window.location.pathname === "/" || window.location.pathname === "/about" ? "active" : ""}>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className={window.location.pathname === "/" || window.location.pathname === "/discover" ? "active" : ""}>
          <Link className="nav-link" to="/discover">
            Discover
          </Link>
        </li>
        <li className={window.location.pathname === "/" || window.location.pathname === "/search" ? "active" : ""}>
          <Link className="nav-link" to="/search">
            Search
          </Link>
        </li>
      </ul>
  </nav>

export default Navbar;
