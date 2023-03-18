import React, { useState } from "react";
import "./PAdjust.css";
// import { ButtonSearch } from "./ButtonSearch";
import axios from "axios";
// import Form from 'react-bootstrap/Form';
// import { ButtonPAnnounce } from "./ButtonPAnnounce";
// import InputImage from "./InputImage";

function PAdjust() {
  const [state, setState] = useState(false);
  let url =
    "https://internal.imd.gov.in/section/nhac/dynamic/FAQ_heat_wave.pdf";
  const [data, setdata] = useState("");
  let urln = window.location.href.split("/");
  var option = urln.pop();
  var location = urln.pop();
  const [value, onChange] = useState(1);
  function APIcall(month) {
    console.log(location);
    var backend_URL = `http://localhost:8000/Districts/Predictions/${option.toUpperCase()}/${location}/${month}`;
    axios
      .get(backend_URL)

      .then(function(response) {
        console.log(response);
        setdata(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="adjust-page">
        <video src="/videos/video3.mp4" autoPlay loop muted></video>
        <h1 className="location"></h1>
        <div className="adjust-container">
          <div className="adjust-left">
            <h2 className="headadjust">ADJUSTMENTS</h2>
            <div className="adjust-bar">
              <div className="slider-parent">
                <input
                  type="range"
                  min="1"
                  max="5000"
                  value={value}
                  onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
                />
              </div>
              <div className="slider-parent">
                <input
                  type="range"
                  min="1"
                  max="5000"
                  value={value}
                  onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
                />
              </div>
              <div className="slider-parent">
                <input
                  type="range"
                  min="1"
                  max="5000"
                  value={value}
                  onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
                />
              </div>
              <div className="slider-parent">
                <input
                  type="range"
                  min="1"
                  max="5000"
                  value={value}
                  onChange={({ target: { value: radius } }) => {
                    onChange(radius);
                  }}
                />
              </div>
            </div>
          </div>
          {/* <div className="adjust-right">
            <h2>PREDICTIONS</h2>
            <div className="value">
            
        
            </div>
            
          </div> */}
        </div>
      </div>
    </>
  );
}

export default PAdjust;
