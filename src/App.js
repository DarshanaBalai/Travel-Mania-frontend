import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/login/Login";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Contact from "./Components/contact/Contact";
import Home from "./Components/home/Home";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Final-Project</h1>
        <Navbar />
        {/* <Login /> */}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
