import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-warning">
    <Link
      className="navbar-brand"
      style={{ fontFamily: "Proxima Nova Soft" }}
      to="/"
    >
      Puppy Love
    </Link>
    <ul className="navbar-nav">
      <li
        className={
          window.location.pathname === "/" ||
          window.location.pathname === "/about"
            ? "active"
            : ""
        }
      >
        <Link
          style={{ fontFamily: "Proxima Nova Soft" }}
          className="nav-link"
          to="/about"
        >
          About
        </Link>
      </li>
      <li
        className={
          window.location.pathname === "/" ||
          window.location.pathname === "/discover"
            ? "active"
            : ""
        }
      >
        <Link
          style={{ fontFamily: "Proxima Nova Soft" }}
          className="nav-link"
          to="/discover"
        >
          Discover
        </Link>
      </li>
      <li
        className={
          window.location.pathname === "/" ||
          window.location.pathname === "/search"
            ? "active"
            : ""
        }
      >
        <Link
          style={{ fontFamily: "Proxima Nova Soft" }}
          className="nav-link"
          to="/search"
        >
          Search
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
