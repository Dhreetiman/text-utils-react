
import React ,{useState} from "react";



export default function TextForm(props) {

  const [text, setText] = useState("Enter your Text");

  let handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  let handleOnChange = (event) => {
    setText(event.target.value)
  }

  let handleLoClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  let handleClearClick = () => {
    let newText = ''
    setText(newText)
  }

  let handleCopy = () => {
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  let handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Enter Your Text to Analyze</h1>
      <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}
