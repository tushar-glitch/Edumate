import React from "react";
import RowComponent from "./attend_row_comp";
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
        {/* <tr >
            <td className="attendData">KCS 301</td>
            <td className="attendSub">Data Structures</td>
            <td className="attendData"></td>
            <td className="attendData">Total Classes</td>
            <td className="attendPer">Attendance in %</td>
        </tr> */}
        </table>
        <RowComponent code="KCS 301" name="Data-Structures" attend="15" total="20"  />
        <RowComponent code="KCS 351" name="DSTL" attend="12" total="20"  />
        <RowComponent code="KCS 301" name="Data-Structures" attend="15" total="20"  />
</div>
    </>
 }
 export default Attendance;