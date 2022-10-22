import React from "react";
import "./Background.css";
import Image from "./image";

function Background() {
  return (
    <>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <p className="edumate">Edumate</p>
      <div className="panel1">
      <p><Image /></p>
        {/* <img className="pumpkin" src= alt="pumpkin" /> */}
      </div>
      <div className="panel2"></div>
    </>
  );
}
export default Background;
