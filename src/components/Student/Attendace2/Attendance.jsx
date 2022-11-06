import React from "react";
import arrow from "./arrow.svg";
import SAttendCard from "./AttendanceCard";
import SCardArray from "./AttendCardArray";
import "./Attendance2.css";
function SubjectAttend (){
    function CreateStuCard(SCardArray){
        return (
            <SAttendCard month={SCardArray.month} date={SCardArray.date} status={SCardArray.status} />
        )
    }
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
    </table>
    <div className="SCardCall">
    {SCardArray.map(CreateStuCard)}
    </div>
    {/* <tr>
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
    </table> */}
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