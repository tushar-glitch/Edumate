import React from "react";
import { useState } from "react";
import "./Fattend2.css";
 function ToggleAttend (){
    const [absent, setAbsent] = useState(false);
    function handleAbsent(){
if(!absent){
    setAbsent(true);
    document.getElementById("present").style.backgroundColor="white";
    document.getElementById("absent").style.backgroundColor="#F67280";
}
else{
    setAbsent(false);
    document.getElementById("present").style.backgroundColor="#62DDB0";
    document.getElementById("absent").style.backgroundColor="white";
}
}
    return <>
<div id="present">P</div>
<div id="absent" onClick={handleAbsent}>A</div>
    </>
 }
 export default ToggleAttend;