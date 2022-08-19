import React, { useState } from "react";
import "./LoginStyles.css";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Login = () => {
  // const [popupStyle, showPopup] = useState("hide");

  // const popup = () => {
  //   showPopup("login-popup");
  //   setTimeout(() => showPopup("hide"), 3000);
  // };

  const activeStyle = {
    color: "red",
  };

  return (
    <div className="container">
      <div className="cover">
        <h1 className="login">Login</h1>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button>
          <NavLink
            to="/Userpage"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Login
          </NavLink>
        </button>
        <p className="text">Or login using</p>
        <div className="alt-login">
          <button>
            <FcGoogle className="icon" />
          </button>
        </div>
      </div>
      {/* <div className={popupStyle}></div> */}
    </div>
  );
};

export default Login;

// import React from "react";
// import login from "../../images/login.jpg";
// import { NavLink } from "react-router-dom";
// import "./LoginStyles.css";
// import { useRef, useState, useEffect } from "react";

// function Login() {
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     userRef.current.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSuccess(true);
//     setPwd("");
//     setUser("");
//   };

//   return (
//     <>
//       {success ? (
//         <section>
//           <h1>Welcome,You are successfully logged in!</h1>
//           <br />
//           <p>
//             <a href="#">Go to Home</a>
//           </p>
//         </section>
//       ) : (
//         <section>
//           <p
//             ref={errRef}
//             className={errMsg ? "errmsg" : "offscreen"}
//             aria-live="assertive"
//           >
//             {errMsg}
//           </p>
//         </section>
//       )}
//       <div className="loginImage">
//         {/* <img src={login} alt="backgroungImage" height={900} /> */}
//       </div>
//       <div className="login">
//         <form onSubmit={handleSubmit}>
//           <h1>Login</h1>
//           <div className="username">
//             <label>Username</label>
//             <input
//               type="text"
//               id="username"
//               placeholder="Username"
//               ref={userRef}
//               autoComplete="off"
//               value={user}
//               required
//               onChange={(e) => setUser(e.target.value)}
//             />
//           </div>
//           <div className="email">
//             <label>Email</label>
//             <input type="email" id="email" placeholder="Email" />
//           </div>
//           <div className="password">
//             <label>Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               value={pwd}
//               required
//               onChange={(e) => setPwd(e.target.value)}
//             />
//           </div>
//           <button className="Sign">Sign In</button>
//           <p>
//             Need an Account? <br />
//             <a href="#" className="Register">
//               Register for Free
//             </a>
//           </p>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;
