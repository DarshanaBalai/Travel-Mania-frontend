import React from "react";
import { NavLink } from "react-router-dom";
import "./Userpage.css";
import Createpage from "../CreatePage/Createpage";
import { RiAccountBoxFill } from "react-icons/ri";
import romePic from "../../images/rome.jpg";
import praguePic from "../../images/prague1.jpg";
import parisPic from "../../images/paris1.jpg";
import switzPic from "../../images/switzerland.jpg";

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
      <div>
        <ul className="memoriesCardContainer">
          <li>
            <div className="cardMemories" style={{ minHeight: 300 }}>
              <img src={romePic} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Rome</h5>
                <p className="card-text">
                  Date: 19-12-2021
                  <br />
                  Days: 5days
                </p>
                <a href="#" className="btn btn-primary">
                  Visit
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="cardMemories" style={{ minHeight: 300 }}>
              <img src={praguePic} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Prague</h5>
                <p className="card-text">
                  Date: 19-12-2021
                  <br />
                  Days: 5days
                </p>
                <a href="#" className="btn btn-primary">
                  Visit
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="cardMemories" style={{ minHeight: 300 }}>
              <img src={parisPic} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Paris</h5>
                <p className="card-text">
                  Date: 19-12-2021
                  <br />
                  Days: 5days
                </p>
                <a href="#" className="btn btn-primary">
                  Visit
                </a>
              </div>
            </div>
          </li>

          <li>
            <div className="cardMemories" style={{ minHeight: 300 }}>
              <img src={switzPic} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Switzerland</h5>
                <p className="card-text">
                  Date: 19-12-2021
                  <br />
                  Days: 5days
                </p>
                <a href="#" className="btn btn-primary">
                  Visit
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Userpage;
