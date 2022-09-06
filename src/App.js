import React, { useState } from "react";
import Navbar from "./Components/navbar/Navbar";
import Login from "./Components/login/Login";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Components/contact/Contact";
import Home from "./Components/Home/Home";
import Userpage from "./Components/userpage/Userpage";
import Createpage from "./Components/CreatePage/Createpage";
import Storepage from "./Components/storepage/Storepage";
import axios from "axios";

function App() {
  const [name, setName] = useState("");

  async function postName(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3600/post", {
        name,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Triptomania</h1>
      </header>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userpage" element={<Userpage />} />
        <Route path="/Createpage" element={<Createpage />} />
        <Route path="/Storepage" element={<Storepage />} />
        <Route path="/Storepage" element={<Userpage />} />
        <Route path="/submit" element={<Userpage />} />
      </Routes>
    </div>
  );
}

export default App;
