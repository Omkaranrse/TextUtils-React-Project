import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Successfully converted to upper case", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Successfully converted to lower case", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared", "success");
    }
    const handleCopyClick = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removes extra spaces from the the text", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
  const [text, setText] = useState('Enter text here...');
    // text = 'new text'; //wrong way to change the state
    // setText('New text here'); //correct way to change the state 
  return (
    <>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>

    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.trim().split(/\s+/).slice(0).join(" ").split(" ").length} words and {text.replace(/\s/g, "").length} characters</p>
        <p>It will take {0.008 * text.trim().split(/\s+/).filter(Boolean).length} minutes to read the text</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Write the text in the above text box to preview it here!"}</p>
    </div>

    </>
  )
}
