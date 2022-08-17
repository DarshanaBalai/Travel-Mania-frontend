import React from "react";
import Navbar from "./Components/Navbar/Navbar";
//import first from "./images/first.jpg";
import diary from "./images/diary.jpg";

function App() {
  return (
    <div className="App">
      <header className="Final-Project">
        <h1>Darshana-Final-Project</h1>
        <img src={diary} alt="first-image" height={300} width={null} />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
