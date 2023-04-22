import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#04203c";
      showAlert("Dark mode is enabled!", "success");
      document.title = "Textutils- Dark Mode";
      setInterval(() => {
        document.title = "Textutils is amazing app!";
      }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled!", "success");
      document.title = "Textutils- Light Mode";
      setInterval(() => {
        document.title = "Install Textutils!";
      }, 2000);
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
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* /user --> component-1 /user/home --> component-2 This will lead to
        confusion if we dont add exact! */}
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Try TextUtils - Word Counter, Character Counter and Remove Extra Spaces!"
                showAlert={showAlert}
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
