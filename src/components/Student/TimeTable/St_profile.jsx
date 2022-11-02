import React from "react";
import Timetable from "./student-TT"; 
import SideBar from "../SideBar/sidebar";
import Attendance from "../Attendance/st_attendance";
function StProfile (){
    return <>
    <div className="StudentTimeTable">
    {/* <Timetable /> */}
    <SideBar />
    <Attendance />
    </div>
    </>
}
export default StProfile;