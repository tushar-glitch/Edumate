import React from "react";
import "./FTimeTable/fTimeTable.css";
import FTimeTable from "../FTimeTable/FtimeTable";
import FAttendance1 from "../FAttendance/FAttend1/FAttendance1";
import FAttendance2 from "../FAttendance/FAttend2/FAttendance2";
import SideBar from "../Student/SideBar/sidebar";
import FUpdate from "./FUpdate";
import ToggleAttend from "../FAttendance/FAttend2/ToggleAttend";
function FMain(){
    return<>
    {/* <ToggleAttend /> */}
    {/* <FUpdate /> */}
    {/* <SideBar /> */}
    <FAttendance2 />
    {/* <FAttendance1 /> */}
        {/* <FTimeTable /> */}
    </>
}
export default FMain;