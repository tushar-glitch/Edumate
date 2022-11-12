import React from "react";

function SAttendCard(props){
    return <>
    <div className="stA1CardRow">
<span id="SCdDate1">{props.date}</span>
<span id="SCdDay1">{props.day}</span>
<span id="ScdTime1">{props.period}</span>
<div id="attendbarNew">
<span id="SCdStatus1">true</span>
   </div>
   </div>
    </>
}
export default SAttendCard;