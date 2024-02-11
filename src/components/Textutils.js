import React, { useState } from "react";

export default function Textutils(props) {
    const [text, setText] = useState("");
  const [preview, setPreview] = useState("");

    const onChangeHandler = (e) => {
        setText(e.target.value);
      };
    
      const Capitalize = () => {
        const newPreview = text.toUpperCase();
        setText("");
        setPreview(newPreview);
        props.showAlert("capitalized","success")
      };
       console.log(props.redmode)
  return (
    <div className="container vh-100" >
      <div >
        <div className="m-4">
          <h2>Textarea</h2>
          <textarea
            className="form-control mt-4"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="add text here"
            value={text}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button onClick={Capitalize} className={`btn btn-${props.redmode==="off"?'primary':'info'} m-4`}>
          Change to UpperCase
        </button>
        {/* <button onClick={onMode} className="btn btn-primary m-4">
          {mode}
        </button> */}
      </div>
      <div className="container">
        <h3>your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{preview}</p>
      </div>
    </div>
  );
}
