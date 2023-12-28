import React, { useState } from 'react';

export default function TextForm(props) {
    
    

    const [text, setText] = useState("");
    return (<>
        <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>

            <h1>{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control"
                    style={{
                        backgroundColor: props.mode === "dark" ? "#212121" : "white"
                        , color: props.mode === "dark" ? "white" : "black"
                    }}

                    value={text} onChange={(e) => {
                        setText(e.target.value)
                    }} id="myBox" rows="10"></textarea>
            </div>



            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle mx-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Case
                </button>
                <ul class="dropdown-menu">
                    <button class="dropdown-item" onClick={() => {
                        let newText = text.toUpperCase()
                        setText(newText)
                    }}>

                        UPPER CASE
                    </button>
                    <button class="dropdown-item" onClick={() => {
                        let newText = text.toLowerCase()
                        setText(newText)
                    }}>

                        lower case
                    </button>
                </ul>
               
                <button className='btn btn-outline-danger mx-2' onClick={() => { setText(""); }}>Clear</button>
                <button className='btn btn-outline-success mx-1' onClick={() => {
                    var text = document.getElementById("myBox");
                    text.select();
                    navigator.clipboard.writeText(text.value);
                }}>Copy</button>

            </div>
        </div>

        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h4>Text Summary</h4>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Nothing to preview !"}</p>
        </div>

    </>
    )
}
