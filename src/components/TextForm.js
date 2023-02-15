import React from "react";
import { useState } from "react";
export default function TextForm(props) {
  const [text, changeText] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi id laborum deserunt suscipit dicta, repellendus dolore cumque aliquid quaerat earum perferendis illo doloribus a! Rem voluptate minima delectus exercitationem consequuntur"
  );

  const setOnChangeToUpper = () => {
    let mytext = text.toUpperCase();
    changeText(mytext);
    props.showAlert("Uppcase Sucessful","success")
  };

  const setOnChangeToLower = () => {
    let mytext = text.toLowerCase();
    changeText(mytext);
    props.showAlert("LowerCase Sucessful","success")
  };

  const setOnChangeValue = (event) => {
    changeText(event.target.value);
  };

  const clearScreen = () => {
    changeText("");
    props.showAlert("Screen Cleared","warning")
  };

  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          onClick={clearScreen}
          onChange={setOnChangeValue}
          value={text}
          type="text"
          rows="8"
        />
        <br></br>
        <button
          type="button"
          onClick={setOnChangeToUpper}
          className="btn btn-primary mx-2"
        >
          Text to UpperCase
        </button>
        <button
          type="button"
          onClick={setOnChangeToLower}
          className="btn btn-primary "
        >
          Text to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          type="button"
          onClick={clearScreen}
        >
          clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
      </div>
      <div className="container my-3">
        <h2>Preview Text</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
