import React from "react";
import { NavLink } from "react-router-dom";
import "./Userpage.css";
import Createpage from "../CreatePage/Createpage";
import { RiAccountBoxFill } from "react-icons/ri";

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
    <div className="backgroundimage">
      <button className="account">
        <RiAccountBoxFill className="icon" />
      </button>
      <div className="welcome">
        <h1>Welcome {localStorage.getItem("name")}</h1>
      </div>
      <div className="buttons">
        <div className="createButton">
          <NavLink
            to="/Createpage"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <button type="button" class="btn btn-light btn-lg">
              Create Memories
            </button>
          </NavLink>
        </div>
        <div className="storeButton">
          <NavLink
            to="/storepage"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <button type="button" class="btn btn-light btn-lg">
              Store Memories
            </button>
          </NavLink>
        </div>
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Userpage;
