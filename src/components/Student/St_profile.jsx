import React from "react";
import "./Attendance/attend.css";
import Timetable from "./TimeTable/student-TT"; 
import SideBar from "./SideBar/sidebar";
import SubjectAttend from "./Attendace2/Attendance";
import Student from "../Student-profile/student";
import Dashboard from "../Dashboard/Dashboard";
import Updates from "./Updates/Updates";
function StProfile (){
    return <>
    <div className="StudentTimeTable">
    <Updates />
    {/* <Timetable /> */}
    {/* <Student /> */}
    {/* <Dashboard /> */}
    <SideBar />
    {/* <SubjectAttend /> */}
    {/* <Attendance /> */}
    </div>
    </>
}
export default StProfile;