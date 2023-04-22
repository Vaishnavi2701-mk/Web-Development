import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase!", "success");
  };

  const handleLoClick = () => {
    //console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speech enabled!", "success");
  };

  const handleVowel = () => {
    for (count = 0; count < text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countVowel++;
        setCount(countVowel);
        props.showAlert("Vowels Counted!", "success");
      }
    }
  };

  const handleConsonants = () => {
    for (count1 = 0; count1 < text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdefghijklmnopqrstuvwxyzBCDEFGHIJKLMNOPQRSTUVWXYZ]/)
      ) {
        countConsonant++;
        setCount1(countConsonant);
        props.showAlert("Consonants Counted!", "success");
      }
    }
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space removed!", "success");
  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Cleared Text!", "success");
  };

  const handleOnChange = (event) => {
    //console.log("onChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here!");
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  let countVowel = 0;
  let countConsonant = 0;

  // text = "new text"; wrong method to change a text
  // setText("new text"); right way to change a text
  return (
    <>
      <div
        className="container"
        style={{
          // backgroundColor: props.mode === "dark" ? "grey" : "white",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "light",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleVowel}>
          Count No. of vowels
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleConsonants}
        >
          Count No. of consonants
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>

        <div className="my-3">
          <h1>Your text summary</h1>
          <p>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words, {text.length} characters and {count} No. of vowels as well as{" "}
            {count1} No. of consonants.
          </p>
          <p>
            It takes{" "}
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes to read.{" "}
          </p>

          <h2>Preview</h2>
          <p>
            {text.length > 0
              ? text
              : "Enter something in textbox to preview it here!"}
          </p>
        </div>
      </div>
    </>
  );
}
