import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Final-Project</h1>
        <Navbar />
        <Login />

        <nav>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
