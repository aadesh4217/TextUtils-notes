//useState is a 'hook' which let us use state and other React features without writing a class
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    // console.log(text);
  };

  const handleDownClick = () => {
    setText(text.toLowerCase());
    // console.log(text);
  };

  const handleReset = (event) => {
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="8"
            placeholder="Enter text here."
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.length === 0 ? 0 : (text.trim().split(" "))[0]===""? 0 : text.trim().split(" ").length} words and{" "}
          {text.trim().length} characters
        </p>
      </div>
      <div className="container my-3">
        <h1>Text preview :</h1>
        <h5>
          {text}
        </h5>
      </div>
    </>
  );
}
