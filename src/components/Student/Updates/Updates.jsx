import React from "react";
import updateImage from "./updateImage.svg";
import "./update.css";
 function Updates(){
    return <>
        <h1 className="update">Dashboard : Updates</h1>
        <div className="updateWhiteDiv">
            <h1 className="updateHead2">Updates</h1>
            <h1 className="updateGreyRow">Updates</h1>
            <img id="updateImage" src={updateImage} alt="update" />
        </div>
    </>
 }
 export default Updates;