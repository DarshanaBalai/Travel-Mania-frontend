import React, { useEffect, useRef } from "react";
import "./NavbarStyles.css";
//import "node_modules/video-react/dist/video-react.css"; // import css
import video from "../../images/video.mp4";

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
        <ul className="Navbar">
          <li>Home</li>
          <li>Login</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="backgroundMain">
        <video
          autoPlay
          playsInline
          loop
          id="video"
          src={video}
          type="video/mp4"
          ref={videoEl}
        ></video>
      </div>
    </>
  );
}

export default Navbar;
