import React, { useEffect, useRef } from "react";
import "./NavbarStyles.css";
import video from "../../images/video.mp4";
import { FcSearch } from "react-icons/fc";

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
          <li>Home</li>
          <li>Login</li>
          <li>Contact</li>
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
