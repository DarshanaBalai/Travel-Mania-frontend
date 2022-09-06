// /*
// const Login = () => {
//   // let email = document.getElementById("email").value;
//   // let password = document.getElementById("password").value;

//   const [email, password] = useState("");

//   // console.log(email + ":" + password);
//   // async function postName(e) {
//   //   e.preventDefault();
//   //   try {
//   //     await axios.post("http://localhost:3600/post", {
//   //       username:
//   //       password:
//   //     });
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }

//   axios
//     .post("http://localhost:3600/auth", {
//       email: email,
//       password: password,
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

//   const activeStyle = {
//     color: "red",
//   };

//   return (
//     <div className="container">
//       <div className="cover">
//         <h1 className="login">Login</h1>
//         {/* <div id="username"> */}

// //         <input type="text" name="email" id="email" required="true" />
// //         <input type="password" name="password" id="password" required />

// //         {/* </div> */}
// //         <button>
// //           <NavLink
// //             to="/Userpage"
// //             style={({ isActive }) => (isActive ? activeStyle : undefined)}
// //           >
// //             Login
// //           </NavLink>
// //         </button>
// //         <p className="text">Or login using</p>
// //         <div className="alt-login">
// //           <button>
// //             <FcGoogle className="icon" />
// //           </button>
// //         </div>
// //       </div>
// //       {/* <div className={popupStyle}></div> */}
// //     </div>
// //   );
// // };

// // console.log(User);
// // export default Login;

// // import React from "react";
// // import login from "../../images/login.jpg";
// // import { NavLink } from "react-router-dom";
// // import "./LoginStyles.css";
// // import { useRef, useState, useEffect } from "react";

// // function Login() {
// //   const userRef = useRef();
// //   const errRef = useRef();

// //   const [user, setUser] = useState("");
// //   const [pwd, setPwd] = useState("");
// //   const [errMsg, setErrMsg] = useState("");
// //   const [success, setSuccess] = useState(false);

// //   useEffect(() => {
// //     userRef.current.focus();
// //   }, []);

// //   useEffect(() => {
// //     setErrMsg("");
// //   }, [user, pwd]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSuccess(true);
// //     setPwd("");
// //     setUser("");
// //   };

// //   return (
// //     <>
// //       {success ? (
// //         <section>
// //           <h1>Welcome,You are successfully logged in!</h1>
// //           <br />
// //           <p>
// //             <a href="#">Go to Home</a>
// //           </p>
// //         </section>
// //       ) : (
// //         <section>
// //           <p
// //             ref={errRef}
// //             className={errMsg ? "errmsg" : "offscreen"}
// //             aria-live="assertive"
// //           >
// //             {errMsg}
// //           </p>
// //         </section>
// //       )}
// //       <div className="loginImage">
// //         {/* <img src={login} alt="backgroungImage" height={900} /> */}
// //       </div>
// //       <div className="login">
// //         <form onSubmit={handleSubmit}>
// //           <h1>Login</h1>
// //           <div className="username">
// //             <label>Username</label>
// //             <input
// //               type="text"
// //               id="username"
// //               placeholder="Username"
// //               ref={userRef}
// //               autoComplete="off"
// //               value={user}
// //               required
// //               onChange={(e) => setUser(e.target.value)}
// //             />
// //           </div>
// //           <div className="email">
// //             <label>Email</label>
// //             <input type="email" id="email" placeholder="Email" />
// //           </div>
// //           <div className="password">
// //             <label>Password</label>
// //             <input
// //               type="password"
// //               id="password"
// //               placeholder="Password"
// //               value={pwd}
// //               required
// //               onChange={(e) => setPwd(e.target.value)}
// //             />
// //           </div>
// //           <button className="Sign">Sign In</button>
// //           <p>
// //             Need an Account? <br />
// //             <a href="#" className="Register">
// //               Register for Free
// //             </a>
// //           </p>
// //         </form>
// //       </div>
// //     </>
// //   );
// // }

// // export default Login;
