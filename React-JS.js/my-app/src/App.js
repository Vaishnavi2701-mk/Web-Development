import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#04203c";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Navbar title="TextUtilites" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter your text here!" />
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
