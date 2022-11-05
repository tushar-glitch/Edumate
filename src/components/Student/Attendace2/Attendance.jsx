import React from "react";
import arrow from "./arrow.svg";
function SubjectAttend (){
    function handleDropDown() {
        console.log("hi");
    }
   return <>
    <div className="tableSub">
    <img src={arrow} className="arrow" onClick={handleDropDown}/>
    <table className="attendTable2" cellSpacing={0}>
    <tr><td className="attendHead2"  colspan={3}>Attendance</td></tr> 
    <tr><td className="attendEachSub"  colspan={3}>Data Structures KCS 301</td></tr> 
    <tr className="greyRow">
<td className="month">Month</td>
<td className="date">Date</td>
<td className="status">Status</td>
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
    </table>
    </div>
    <div className="monthList">
        <ul>
            <li>January</li>
            <li>February</li>
            <li>March</li>
            <li>April</li>
            <li>May</li>
            <li>June</li>
            <li>July</li>
            <li>August</li>
            <li>September</li>
            <li>October</li>
            <li>November</li>
            <li>December</li>
        </ul>
    </div>
   </>
} 
export default SubjectAttend;