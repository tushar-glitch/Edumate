import React from "react";
import ProgressBar from "./ProgressBar";
import "./attend.css";
 function Attendance(){
    return <>
     <h1 className="dbTT">Dashboard : Attendance </h1>
<div className="attend">
    <table className="attendTable" cellSpacing={0}>
         <tr><td className="attendHead"  colspan={5}>Attendance</td></tr> 
        <tr className="attendRow2">
            <td className="attendData">Subject Code</td>
            <td className="attendSub">Subject Name</td>
            <td className="attendData">Attended Classes</td>
            <td className="attendData">Total Classes</td>
            <td className="attendPer">Attendance in %</td>
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
<ProgressBar id="bar3"/>
<ProgressBar id="bar4"/>
<ProgressBar id="bar5"/>
<ProgressBar id="bar6"/>
</div>
    </>
 }
 export default Attendance;