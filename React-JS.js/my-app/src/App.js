import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";

import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#04203c";
      showAlert("Dark mode is enabled!", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled!", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar title="TextUtilites" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading="Enter your text here!" mode={mode} />
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
