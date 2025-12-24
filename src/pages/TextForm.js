import { clear } from "@testing-library/user-event/dist/clear";
import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

export default function TextForm(props) {
  const upperCaseClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const LowerCaseClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clear = () => {
    console.log("uppercase was clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };
  const SentenceCaseClick = () => {
    console.log("sentencecase was clicked" + text);
    let lowerStr = text.toLowerCase();
    let newText = lowerStr.charAt(0).toUpperCase() + lowerStr.slice(1);
    setText(newText);
  };
  const handleCopy=()=>{
    let text=document.getElementById("myTextarea");
    text.select();
    navigator.clipboard.writeText(text.value);


  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    
  }
  const [text, setText] = useState("enter text here");
  return (
    <>
    <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h4>{props.heading}</h4>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          value={text}
          id="myTextarea"
          rows="4"
          onChange={handleOnChange}
          style={{ backgroundColor: props.mode === 'dark'? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black' }}
        ></textarea>
        <label htmlFor="my text"></label>
      </div>
      <button className="btn-btn-primary my-3 mx-2" onClick={upperCaseClick}>
        Convert to Uppercase
      </button>
      <button className="btn-btn-primary my-3 mx-2" onClick={LowerCaseClick}>
        Convert to Lowercase
      </button>
      <button className="btn-btn-primary my-3 mx-2" onClick={clear}>
        Clear
      </button>
      <button className="btn-btn-primary my-3 mx-2" onClick={SentenceCaseClick}>
        sentence case
      </button>
      <button className="btn-btn-primary my-3 mx-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn-btn-primary my-3 mx-2" onClick={handleExtraSpaces}>
        Remove ExtraSpaces
        </button>
    
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
        
      <h3>your text summary</h3>
      <p>
        {text.split(" ").length} words {text.length} characters
      </p>
      <p>
        {0.008 * text.split(" ").length} Minutes read
      </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}

