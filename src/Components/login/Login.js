import React from "react";
import login from "../../images/login.jpg";

function Login() {
  return (
    <>
      <div className="loginImage">
        <img src={login} alt="backgroungImage" />
      </div>
      <div className="Login">
        <form>
          <h1>Login</h1>
          <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
