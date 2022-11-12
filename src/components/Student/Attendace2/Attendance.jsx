import React from "react";
import arrow from "./arrow.svg";
import SAttendCard from "./AttendanceCard";
import SCardArray from "./AttendCardArray";
import "./Attendance2.css";
import { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useEffect } from "react";
import Navbar from "../../utils/Navbar/Navbar";
import axios from "axios";
function SubjectAttend (){
    const code = sessionStorage.getItem("subject_code");
    const subjectA = sessionStorage.getItem("subject_name");
  
    const [month,setMonth]= useState("");
    function handleMonthValues(e){
        setMonth(e.target.value)
    }
    console.log(month)
    const accessToken = sessionStorage.getItem("access token");
    console.log(accessToken);
    const config = {
       headers:{
          Authorization: `Bearer ${accessToken}`
       }
    }
    const [attendSubArray, setAttendSubArray] = useState([])
    useEffect(()=>{
        axios.get("https://erp-edumate.herokuapp.com/api/user/student/studentsubjectattendance/"+code+"/11/",config)
        .then((res)=>{
            console.log(res);
            setAttendSubArray(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    function CreateStuCard(attendSubArray){
        return (
            <SAttendCard day={attendSubArray.day} date={attendSubArray.date} is_present={attendSubArray.is_present} period={attendSubArray.period}/>
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
    <div className="tableSub">
    <table className="attendTable2" cellSpacing={0}>
    <tr><td className="attendHead2"  colspan={3}>Attendance</td></tr> 
    <tr><td className="attendEachSub"  colspan={3}>{subjectA}&emsp;{code}</td></tr> 
    <tr className="greyRow">
    <td className="month2">mo</td>
<td className="date2">Date</td>
<td className="day2">Day</td>
<td className="time2">Time-Slot</td>
<td className="status2">Status</td>
    </tr>
    </table>
    <div className="SCardCall">
    {attendSubArray.map(CreateStuCard)}
    </div>
    </div>
    <select className="monthListNew" onChange={handleMonthValues}>
            <option>Select</option>
                <option value={"1"} className="visibleListItem1">January</option>
                <option value={"2"} className="visibleListItem2">February</option>
                <option value={"3"} className="visibleListItem3">March</option>
                <option value={"4"} className="visibleListItem3">April</option>
                <option value={"5"} className="visibleListItem3">May</option>
                <option value={"6"} className="visibleListItem3">June</option>
                <option value={"7"} className="visibleListItem3">July</option>
                <option value={"8"} className="visibleListItem3">August</option>
                <option value={"9"} className="visibleListItem3">September</option>
                <option value={"10"} className="visibleListItem3">October</option>
                <option value={"11"} className="visibleListItem3">November</option>
                <option value={"12"} className="visibleListItem3">December</option>
            </select>
    {/* </div> */}
    {/* {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null} */}
   </>
} 
export default SubjectAttend;