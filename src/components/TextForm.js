import React, { useState } from "react";

// console.log(useState('Enter text here2 '));

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };

  // To convert text into lowercase
  const handleLoClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
  };
  const handleCapitalizeClick = () => {
    let Text = text.toLocaleLowerCase();
    let newText = Text.charAt(0).toUpperCase() + Text.slice(1);
    setText(newText);
    props.showAlert("capitalization completed","success")
  };

  // to clear the existing text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All text are cleared","success")
  };

 //to copy the text
   const handleCopy = ()=>{
      let text = document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is copied","success") 
   }

//   to handle extra spaces
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All extra spaces are removed","success")
    }

  //for allow to type in textarea
  const handleOnChange = (event) => {
    // console.log("on changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "newtext"wrong way to change the state
  //  setText("new text");correct way

  return (
    <>
      <div className="container" style={{color: props.mode === 'light'? 'black': 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === 'light'? 'white': '#042743',color: props.mode === 'light'? 'black': 'white'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCapitalizeClick}
        >
          Capitalize text
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-3"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'light'? 'black': 'white'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        {/* //how to count the time of reading of all the words */}
        <p>{0.008 * text.split(" ").length} Minuts to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text :"Enter something in the textbox above to preview it "}</p>
      </div>
    </>
  );
}
