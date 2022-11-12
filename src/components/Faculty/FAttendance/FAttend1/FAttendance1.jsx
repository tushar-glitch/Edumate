import React from "react";
import "./FAttend1.css";
import FCard1 from "./FAttendCard";
import FAttend1Array from "./FAttendArray";
import * as ReactBootStrap from "react-bootstrap";
function FAttendance1(){
    function CreateFAttendCard(FAttend1Array){
        return (
        <FCard1 date={FAttend1Array.date} time={FAttend1Array.time} subject={FAttend1Array.subject} class={FAttend1Array.class} />
        )
    }
    // useEffect(()=>{
    //     if(loadBool)
    //     document.body.style.opacity="0.5"
    //     else
    //     document.body.style.opacity="1"
    //   },[loadBool])
    return <>
     <h1 className="dbAttend" id="DbAttendance">Dashboard : Attendance </h1>
    <div className="FAttendanceOne">
    <h1 className="FAttendanceHead">Attendance</h1>
<div className="FRow1">
<span id="Fdate">Date</span>
<span id="Ftime">Time</span>
<span id="Fclass">Class</span>
<span id="Fsubject">Subject</span>
</div>
<div className="FAttendCardCall">
    {FAttend1Array.map(CreateFAttendCard)}
</div>
{/* <FCard1 date="" time="" subject="" class="" /> */}
</div>
  {/* {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null} */}
    </>
}
export default FAttendance1;