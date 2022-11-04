import React from "react";
import "./Background.css";
import Image from "./bgImage";
import BackgroundPage from "./BackgroundPage.svg";

function Background() {
  return (
    <>
    <div className="backgroundMainImg">
     <img src={BackgroundPage} alt="background image"  />
     </div>
    <div className="AUTHENTICATION">
      {/* <div className="circle1"></div> */}
      {/* <div className="circle2"></div> */}
      <p className="edumate" id="edu">
        Edumate
      </p>
      <div className="panel1"></div>
      <div className="panel2"></div>
      <p>
        <Image />
      </p>
    </div>
    </>
  );
}
export default Background;
