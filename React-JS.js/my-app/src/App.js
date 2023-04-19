import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  return (
    <>
      <Navbar title="TextUtilites" />
      <div className="container my-3">
        <TextForm heading="Enter your text here!" mode={mode} />
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
