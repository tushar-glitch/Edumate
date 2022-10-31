import React from "react";
import "./TT.css";
function TimeT (){
    return <>
        <table className="table">
            <tr><td className="timetableRow" colspan={7}>Time Table</td></tr>
            <tr className="tableRow">
                <td className="days"></td>
                <td className="days">Mon</td>
                <td className="days">Tue</td>
                <td className="days">Wed</td>
                <td className="days">Thu</td>
                <td className="days">Fri</td>
                <td className="days">Sat</td>
            </tr>
            <tr className="tableRow">
                <td className="time">8:30-9:20</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="tableRow">
                <td className="time">9:20-10:10</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="tableRow">
            <td className="time">10:10-11:00</td>
                <td colspan={6} className="break">Break</td>
            </tr>
            <tr>
                <td className="time">11:00-11:50</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td className="time">11:50-12:40</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr className="tableRow">
            <td className="time">12:40-01:30</td>
                <td colspan={6} className="lunch">Lunch</td>
            </tr>
            <tr className="tableRow">
                <td className="time">01:30-02:20</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    </>
}
export default TimeT;