import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function routes() {
  const activeStyle = {
    color: "white",
  };
  return (
    <div>
      <nav>
        <NavLink
          //   className="link"
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Login
        </NavLink>
        {/* <Link className="link" to="/contact">
          Contact
        </Link> */}
      </nav>
    </div>
  );
}

export default routes;
