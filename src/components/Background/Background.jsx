import React from "react";
import "./Background.css";
import Image from "./bgImage";

function Background() {
  return (
    <>
      <div className="circle1"></div>
      <div className="circle2"></div>
      <p className="edumate" id="edu">
        Edumate
      </p>
      <div className="panel1"></div>
      <div className="panel2"></div>
      <p>
        <Image />
      </p>
    </>
  );
}
export default Background;
