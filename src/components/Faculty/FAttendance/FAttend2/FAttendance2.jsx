import React from "react";
import "./Fattend2.css";
import FCard2 from "./FAttendCard2";
import FAttend2Array from "./FAttendArray2";
function FAttendance2(){
    function CreateFAttendCard2(FAttend2Array){
        return (
        <FCard2 roll={FAttend2Array.roll} stNo={FAttend2Array.stNo} name={FAttend2Array.name} attend={FAttend2Array.attend} />
        )
    }
    return <>
    <h1 className="dbAttend" id="DBAttend">Dashboard : Attendance </h1>
    <div className="FAttendanceOne">
    <h1 className="FAttendanceHead">Student : Attendance</h1>
<div className="FRow1">
<span id="FRollNo">Roll No.</span>
<span id="FStNo">Student No.</span>
<span id="FName">Name</span>
<span id="FAttendMark">Attendance</span>
</div>
<div className="FAttendCardCall">
    {FAttend2Array.map(CreateFAttendCard2)}
</div>
</div>
    </>
}
export default FAttendance2;