import React from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#042743" : "white",
  };

  // const [btnText, setbtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setmyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Enable Light Mode");
  //   } else {
  //     setmyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setbtnText("Enable Dark Mode");
  //   }
  // };

  return (
    <div className="container my-3">
      <h1
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Textutilis gives youa way to analyze your text quickly and
                efficiently.Be it word count, character count or changing it to
                uppercase or lowercase.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                Textutils is a free character counter tool that provides instant
                character count and word count statistics for a given a text.
                Textutils reports number of words and characters. Thus it is
                suitable for writing text with word/character limits.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                This word counter software works in any browser such as Chrome,
                Firefox, Internet Explorer, Safari, Opera. It suits to count
                character in facebook, blogs, books, excel document, pdf
                document, essays etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button className="btn btn-primary" onClick={toggleStyle}>
          Enable Dark Mode
        </button>
      </div> */}
    </div>
  );
}
