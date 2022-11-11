import React from "react";
import ProgressBar from "./ProgressBar";
import SCard1 from "./SAttendCard1";
import SAttend1Array from "./SAttendArray1";
import "./attend.css";
 function Attendance(){
    function CreateSAttendCard1(SAttend1Array){
        return (
        <SCard1 code={SAttend1Array.code} sub={SAttend1Array.sub} attendC={SAttend1Array.attendC} totalC={SAttend1Array.attendTotalC} attendPer={SAttend1Array.attendPer} />
        )
    }
    return <>
     <h1 className="dbAttend">Dashboard : Attendance </h1>
<div className="attend">
<h1 className="attendHead" >Attendance</h1>
    <table className="attendTable" cellSpacing={0}>
        <tr className="attendRow2">
            <td className="attendData">Subject Code</td>
            <td className="attendSub">Subject Name</td>
            <td className="attendData">Attended Classes</td>
            <td className="attendData">Total Classes</td>
            <td className="attendPer">Attendance in %</td>
        </tr> 
        </table>
        <div className="SAttendCardCall1">
    {SAttend1Array.map(CreateSAttendCard1)} 
    </div>
{/*  </div>
         {/* <tr >
            <td>KCS 301</td>
            <td>Data Structures</td>
            <td></td>
            <td>Total Classes</td>
            <td></td>
        </tr>
        <tr >
            <td>KCS 301</td>
            <td>Data Structures</td>
            <td></td>
            <td>Total Classes</td>
            <td></td>
        </tr>
        <tr >
            <td>KCS 301</td>
            <td>Data Structures</td>
            <td></td>
            <td>Total Classes</td>
            <td></td>
        </tr>
        <tr >
            <td>KCS 301</td>
            <td>Data Structures</td>
            <td></td>
            <td>Total Classes</td>
            <td></td>
        </tr>
        <tr >
            <td>KCS 301</td>
            <td>Data Structures</td>
            <td></td>
            <td>Total Classes</td>
            <td></td>
        </tr>
        </table>
        <div id="bar1">
<ProgressBar/>
</div>
<div id="bar2">
<ProgressBar/>
</div>
</div>
<div className="responsiveTable">
<table className="attendTableResponse" cellSpacing={0}>
    <tr className="greyRowResponse">
<td className="subjectResponse">Subject Name</td>
<td className="class">Classes</td>
<td className="responseAttend">Attendace</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </table> */}
</div>
    </>
 }
 export default Attendance;