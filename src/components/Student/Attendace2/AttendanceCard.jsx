import React from "react";
import { useEffect } from "react";

function SAttendCard(props){
    var present = props.is_present;
    useEffect(()=>{
        if(present){
        document.getElementById("attendbarNew").style.backgroundColor =" #62DDB0";
        document.getElementById("StCdStatus1").innerHTML="Present";
    }
        else{
        document.getElementById("attendbarNew").style.backgroundColor="#FF939E";
        document.getElementById("StCdStatus1").innerHTML="Absent";
        }
    },[present])
    return <>
    {/* <div className="stAttCardRow">
<span id="StCdDate1">{props.date}</span>
<span id="StCdDay1">{props.day}</span>
<span id="StcdTime1">{props.period}</span>
<div id="attendbarNew">
<span id="StCdStatus1">true</span>
   </div>
   </div> */}
   <div className="stAttCardRowNew">
<span id="StCdDate1">{props.date}</span>
<span id="StCdDay1">{props.day}</span>
<span id="StcdTime1">{props.period}</span>
<div id="attendbarNew">
<span id="StCdStatus1">Present</span>
   </div>
   </div>
    </>
}
export default SAttendCard;