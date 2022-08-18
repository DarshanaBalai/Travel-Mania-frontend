import React, { useEffect, useRef } from "react";
import "./NavbarStyles.css";
import video from "../../images/video.mp4";
import { FcSearch } from "react-icons/fc";
import { NavLink } from "react-router-dom";

function Navbar() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  const activeStyle = {
    color: "red",
  };

  return (
    <>
      <div>
        <form className="form">
          <div>
            <input type="text" placeholder="Search Destinations" />
          </div>
          <div>
            <button>
              <FcSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
      <div>
        <ul className="Navbar">
          <li>
            {/* <a href="/home">Home</a> */}
            {/* <NavLink to="/">Home</NavLink>  */}
            <NavLink
              //   className="link"
              to="/home"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="/login">Login</NavLink> */}
            <NavLink
              //   className="link"
              to="/login"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              //   className="link"
              to="/contact"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="backgroundMain">
        <video
          autoPlay
          muted
          playsInline
          loop
          id="video"
          src={video}
          type="video/mp4"
          ref={videoEl}
        ></video>
      </div>
      <div className="overlay"></div>
      <div className="content">
        <h1>"Make your Vacation Planning easy with us"</h1>
        <h2>&</h2>
        <h1>" Save your MEMORIES LifeLong"</h1>
      </div>
    </>
  );
}

export default Navbar;
