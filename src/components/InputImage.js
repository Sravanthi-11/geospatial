import React from 'react'
import { useState } from "react";
import './InputImage.css';

function InputImage() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div className="model">
            <h2>Add Image:  </h2><br></br>
            <input accept="image/*" type="file" onChange={handleChange} />
            <img src={file} />
  
        </div>
  
  )
}

export default InputImage