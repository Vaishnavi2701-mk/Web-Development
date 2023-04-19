import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
//import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtilites" />
      {/* <div className="container my-3">
        <TextForm heading= "Enter your text here!"/>
      </div> */}

      <About />
    </>
  );
}

export default App;
