import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    //console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleVowel = () => {
    for (count = 0; count < text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countVowel++;
        setCount(countVowel);
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
      }
    }
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
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-danger mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={speak}>
        Speak
      </button>
      <button className="btn btn-primary mx-1" onClick={handleVowel}>
        Count No. of vowels
      </button>
      <button className="btn btn-primary mx-1" onClick={handleConsonants}>
        Count No. of consonants
      </button>

      <div className="my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters and {count}{" "}
          No. of vowels as well as {count1} No. of consonants.
        </p>
        <p>It takes {0.008 * text.split(" ").length} minutes to read. </p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
