import React, { useState } from "react";
import "./LoginStyles.css";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Userpage from "../userpage/Userpage";

export default function (props) {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleLogin(event) {
    event.preventDefault();
    login(event);

    async function login(e) {
      console.log("Login for the user : " + email);

      return await axios
        .post("http://localhost:3600/auth", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log("User token: " + response.data.accessToken);
          console.log("Name:" + response.data.name);

          localStorage.setItem("token", response.data.accessToken);
          localStorage.setItem("name", response.data.name);
          navigate("/Userpage");
        })
        .catch((error) => {
          alert(
            "email or password is incorrect, please use correct username and password."
          );
          console.log(error);
        });
    }

    event.preventDefault();
  }

  function handleSignup(event) {
    signup(event);

    async function signup(e) {
      console.log(
        "Registering the new user..." +
          firstname +
          ":" +
          lastname +
          ":" +
          email +
          ":" +
          password
      );
      // e.preventDefault();
      try {
        await axios.post("http://localhost:3600/users", {
          firstName: firstname,
          lastName: lastname,
          email: email,
          password: password,
        });
      } catch (error) {
        console.log(error);
      }
      console.log("login in signup.." + email + "," + password);
      return await axios
        .post("http://localhost:3600/auth", {
          email: email,
          password: password,
        })
        .then((response) => {
          console.log("User token: " + response.data.accessToken);
          console.log("Name:" + response.data.name);

          localStorage.setItem("token", response.data.accessToken);
          localStorage.setItem("name", response.data.name);
          navigate("/Userpage");
        })
        .catch((error) => {
          alert(
            "email or password is incorrect, please use correct username and password."
          );
          console.log(error);
        });
    }

    event.preventDefault();
  }

  const activeStyle = {
    color: "black",
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                {/* <NavLink
                  to="/Userpage"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Login
                </NavLink> */}
                Login
              </button>
            </div>

            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
            <div className="loginGoogle">
              <p>or login using</p>
              <button>
                <FcGoogle className="icon" />
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  } else if (authMode === "signup") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSignup}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Login
              </span>
            </div>
            <div className="form-group mt-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g dose"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="eg jan.dose@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                {/* <NavLink
                  to="/Userpage"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  Submit
                </NavLink> */}
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}
