import React from "react";
import { useState } from "react";
import "./Fattend2.css";
function ToggleAttend() {
    function handleAbsent() {
        document.getElementById("present").style.backgroundColor = "white";
        document.getElementById("absent").style.backgroundColor = "#FF939E";
    }
    function handlePresent() {
        document.getElementById("present").style.backgroundColor = "#62DDB0";
        document.getElementById("absent").style.backgroundColor = "white";
    }
    return <>
        <div id="present" onClick={handlePresent}>P</div>
        <div id="absent" onClick={handleAbsent}>A</div>
    </>
}
export default ToggleAttend;