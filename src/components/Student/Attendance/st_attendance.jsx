import React from "react";

import "./attend.css";
 function Attendance(){
    function handleEdit(){
        console.log("dhjkhk");
document.getElementById("name").innerHTML = "dhSJDB";
document.getElementById("name").style.color="green";
    }
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
            <td>Attendance in %</td>
        </tr>
        <tr >
            <td>KCS 301</td>
            <td>Data Structures</td>
            <td></td>
            <td>Total Classes</td>
            <td>Attendance in %</td>
        </tr>
        <tr >
            <td>KCS 301</td>
            <td>Data Structures</td>
            <td></td>
            <td>Total Classes</td>
            <td>Attendance in %</td>
        </tr>
        <tr >
            <td>KCS 301</td>
            <td>Data Structures</td>
            <td></td>
            <td>Total Classes</td>
            <td>Attendance in %</td>
        </tr>
        <tr >
            <td>KCS 301</td>
            <td>Data Structures</td>
            <td></td>
            <td>Total Classes</td>
            <td>Attendance in %</td>
        </tr>
        </table>
        <p>name</p>
        <p id="name">Sanika Goyal</p>
        <button type="submit" onClick={handleEdit}>Edit profile</button>
</div>
    </>
 }
 export default Attendance;