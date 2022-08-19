import React from "react";
import Navbar from "./Components/navbar/Navbar";
import Login from "./Components/login/Login";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Contact from "./Components/contact/Contact";
import Home from "./Components/Home/Home";
import Userpage from "./Components/userpage/Userpage";
import Createpage from "./Components/CreatePage/Createpage";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Final-Project</h1>
        <Navbar />
      </header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userpage" element={<Userpage />} />
        <Route path="/Createpage" element={<Createpage />} />
      </Routes>
    </div>
  );
}

export default App;
