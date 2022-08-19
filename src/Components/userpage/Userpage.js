import React from "react";
import { NavLink } from "react-router-dom";
import "./Userpage.css";
import Createpage from "../CreatePage/Createpage";

function Userpage() {
  const activeStyle = {
    color: "red",
  };

  const handleCreate = () => {
    return "create memories";
  };

  const handleStore = () => {
    return "store memories";
  };

  return (
    <div>
      <div className="buttons">
        <button>
          <NavLink
            to="/Createpage"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Create Memories
          </NavLink>
        </button>

        {/* <NavLink
          to="/Createpage"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <button className="createButton" onClick={handleCreate}>
            Create Memories
          </button>
        </NavLink> */}
        <button onClick={handleStore}>Store Memories</button>
      </div>
    </div>
  );
}

export default Userpage;
