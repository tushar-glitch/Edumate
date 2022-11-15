import React from "react";
import ProgressBar from "./ProgressBar";
import SCard1 from "./SAttendCard1";
import "./attend.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../../utils/Navbar/Navbar";
import * as ReactBootStrap from "react-bootstrap";
 function Attendance(){

    const accessToken = sessionStorage.getItem("access token");
    console.log(accessToken);
    const config = {
       headers:{
          Authorization: `Bearer ${accessToken}`
       }
    }
    const [loadBool, setLoadBool] = useState(false)
    const [SAttend1Array,setAttend1Array]= useState([]);
    useEffect(()=>{
        setLoadBool(true)
        axios.get("https://erp-edumate.herokuapp.com/api/user/student/studentoverallattendance/",config)
        .then((res)=>{
            console.log(res);
            setLoadBool(false)
            setAttend1Array(res.data);
        })
        .catch((err)=>{
            console.log(err);
            setLoadBool(false)
        })
    },[])
    const navigate = useNavigate();
    function AttendanceTwo(code,name){
        console.log("chdkj");
        navigate("/stAttend")
        sessionStorage.setItem("subject_code",code)
        sessionStorage.setItem("subject_name",name)
    }
    function CreateSAttendCard1(SAttend1Array){
        return (
        <SCard1 code={SAttend1Array.subject_code} navigator={()=>AttendanceTwo(SAttend1Array.subject_code,SAttend1Array.subject_name)} sub={SAttend1Array.subject_name} attendC={SAttend1Array.attended_classes} totalC={SAttend1Array.total_classes} attendPer={SAttend1Array.attendance_percent} />
        )
    }
    useEffect(()=>{
        if(loadBool)
        document.body.style.opacity="0.5"
        else
        document.body.style.opacity="1"
      },[loadBool])
    return <>
    <Navbar />
     <h1 className="dbAttend">Dashboard : Attendance </h1>
<div className="attendATTEND">
<h1 className="attendHeadSA" >Attendance</h1>
    <table className="attendTable" cellSpacing={0}>
        <tr className="attendRow2">
            <td className="attendData">Subject Code</td>
            <td className="attendSub">Subject Name</td>
            <td className="attendData">Attended Classes</td>
            <td className="attendData">Total Classes</td>
            <td className="attendPer">Attendance in %</td>
        </tr> 
        </table>
        <div className="SAttendCardCallA2">
    {SAttend1Array.map(CreateSAttendCard1)} 
    </div>
</div>
  {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
    </>
 }
 export default Attendance;