import React, { useEffect, useRef } from "react";
import "./NavbarStyles.css";
import video from "../../images/video.mp4";
import { FcSearch } from "react-icons/fc";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = {
    color: "red",
  };

  return (
    <>
      <div>
        <form className="form">
          <input
            id="searchField"
            type="text"
            placeholder="Search Destinations"
          />

          <div>
            <button className="searchButton">
              <FcSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
      <div>
        <ul className="Navbar">
          <li>
            <NavLink
              to="/home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
