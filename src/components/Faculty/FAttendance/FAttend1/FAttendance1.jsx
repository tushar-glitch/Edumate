import React from "react";
import "./FAttend1.css";
import FCard1 from "./FAttendCard";
import FAttend1Array from "./FAttendArray";
import * as ReactBootStrap from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../../utils/Navbar/Navbar";
function FAttendance1() {
    const [FAttend1Array,setFAttend1Array]= useState([]);
    const accessToken = sessionStorage.getItem("Faculty_access_token");
    console.log(accessToken);
    const config = {
       headers:{
          Authorization: `Bearer ${accessToken}`
       }
    }
    useEffect(()=>{
        setLoadBool(true)
        axios.get("https://erp-edumate.herokuapp.com/api/user/teacher/ClassAttendanceObjects/",config)
        .then((res)=>{
            console.log(res);
            setLoadBool(false)
            setFAttend1Array(res.data);
        })
        .catch((err)=>{
            console.log(err);
            setLoadBool(false)
        })
    }, [])
    const navigate = useNavigate();
    function AttendanceTwo(id,date,time){
        navigate("/f_atten2")
        sessionStorage.setItem("fac_attend_id", id)
        sessionStorage.setItem("fac_attend_date", date)
        sessionStorage.setItem("fac_attend_time",time)
    }
    const [loadBool, setLoadBool] = useState(false)
    
    function CreateFAttendCard(FAttend1Array) {
        return (
        <FCard1 date={FAttend1Array.date} time={FAttend1Array.time} navigator={()=>AttendanceTwo(FAttend1Array.class_id,FAttend1Array.date,FAttend1Array.time)} subject={FAttend1Array.subject_name} class={FAttend1Array.class_id} />
        )
    }
    // useEffect(()=>{
    //     if(loadBool)
    //     document.body.style.opacity="0.5"
    //     else
    //     document.body.style.opacity="1"
    //   },[loadBool])
    return <>
    <Navbar />
     <h1 className="dbAttend" id="DbAttendance">Dashboard : Attendance </h1>
     <div className="FAttendanceOne">
    <h1 className="FAttendanceHead">Attendance</h1>
<div className="FRow1">
<span id="Fdate">Date</span>
<span id="Ftime">Time</span>
<span id="Fclass">Class</span>
<span id="Fsubject">Subject</span>
</div>
<div className="FAttendCardCall">
    {FAttend1Array.map(CreateFAttendCard)}
</div>
{/* <FCard1 date="" time="" subject="" class="" /> */}
</div>
  {/* {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null} */}
    </>
}
export default FAttendance1;