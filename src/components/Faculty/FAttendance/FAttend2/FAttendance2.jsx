import React from "react";
import "./Fattend2.css";
import FCard2 from "./FAttendCard2";
import FAttend2Array from "./FAttendArray2";
import * as ReactBootStrap from "react-bootstrap";
import { useState } from "react";
import ToggleAttend from "./ToggleAttend";
import { useEffect } from "react";
import axios from "axios";
import Navbar from '../../../utils/Navbar/Navbar'
function FAttendance2() {
    // const time = sessionStorage.getItem("fac_attend_time")
    // const id = sessionStorage.getItem("fac_attend_id")
    // const date = sessionStorage.getItem("fac_attend_date")
    const time = '8:30 - 9:20'
    const id = 'S1'
    const date = '2022-11-08'
    const [attendFacArray, setAttendFacArray] = useState([])
    const [attendFacArrayid, setAttendFacArrayId] = useState([])
    var accessToken = sessionStorage.getItem("access token")
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    useEffect(() => {
        axios.get('https://erp-edumate.herokuapp.com/api/user/teacher/StudentsinClassAttendance/' + date + '/' + id + '/' + time + '/', config)
            // axios.get('https://erp-edumate.herokuapp.com/api/user/teacher/StudentsinClassAttendance/2022-12-16/S1/11:00 - 11:50/',config)
            .then((res) => {
                console.log(res);
                setAttendFacArray(res.data)
                setAttendFacArrayId(res.data)
                // var length = Object.keys(res.data).length
                // for (let i = 1; i < length; ++i) {
                //     setAttendFacArrayId(res.data[i])
                // }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    var test1= 0
    function CreateFAttendCard2(attendFacArray) {
        console.log(test1+"1");
        return (
            <>
            <FCard2 name={attendFacArray.name} id={attendFacArray.userID} present={attendFacArray.is_present} userid={attendFacArrayid.userID} />
            {/* <ToggleAttend userid={attendFacArrayid.userID} /> */}
            </>
        )
    }
    var test = 0
    function toggleAttend2(attendFacArrayid) {
        test++;
        console.log(test);
        return (
            <>
                
                <ToggleAttend userid={attendFacArrayid.userID} />
            </>

        )
    }
    const [loadBool, setLoadBool] = useState(true)
    return <>
        <Navbar />
        <h1 className="dbAttend" id="DBAttend">Dashboard : Attendance </h1>
        <div className="FAttendanceOne">
            <h1 className="FAttendanceHead">Student : Attendance</h1>
            <div className="FRow1">
                <span id="FRollNo">Roll No.</span>
                <span id="FStNo">Student No.</span>
                <span id="FName">Name</span>
                <span id="FAttendMark">Attendance</span>
            </div>
            {/* <ToggleAttend /> */}
            {/* {attendFacArrayid.map(toggleAttend2)} */}
            <div className="FAttendCardCall">
                {attendFacArray.map(CreateFAttendCard2)}
                {/* {attendFacArray.map(toggleAttend2)} */}
            </div>
        </div>
        {loadBool ? (<ReactBootStrap.Spinner animation="border" id="apiloader" />) : null}
    </>
}
export default FAttendance2;