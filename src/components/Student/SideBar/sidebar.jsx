import React from "react";
import attendanceicon from "./attendanceicon.svg";
import feedbackicon from "./feedbackicon.svg";
import ph_student from "./ph_student.svg";
import timetableicon from "./timetableicon.svg";
import updatesicon from "./updatesicon.svg";
import "./sideBar.css";
function SideBar (){
    return <>
        <div className="sideB">
            <h1 className="edum">Edumate</h1>
            <ul className="sideList">
                <li><img src={ph_student} className="sidebarIcon"/>My Profile</li>
                <li><img src={attendanceicon} className="sidebarIcon" />Attendance</li>
                <li><img src={feedbackicon} className="sidebarIcon" />Feedback</li>
                <li><img src={timetableicon} className="sidebarIcon" />Time Table</li>
                <li><img src={updatesicon} className="sidebarIcon" />Updates</li>
            </ul>
        </div>
    </>

}
export default SideBar;