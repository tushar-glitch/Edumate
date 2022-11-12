import React from "react";
import "./Fattend2.css";
import FCard2 from "./FAttendCard2";
import FAttend2Array from "./FAttendArray2";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../../Navbar/Navbar";
import SideBar from "../../../Student/SideBar/sidebar";
function FAttendance2() {
    const accessToken = sessionStorage.getItem("access token");
    console.log(accessToken);
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    const [name, setName] = useState([])
    const [userid, setUserID] = useState([])
    var a = 0
    useEffect(() => {
        axios.get('https://erp-edumate.herokuapp.com/api/user/teacher/StudentsinClassAttendance/2022-11-14/S1/11:00 - 11:50/',config)
            .then((res) => {
                console.log(res);
                console.log(res.data[a].name);
                setName(res.data[a])
                console.log(name);
                a++;
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    function CreateFAttendCard2(FAttend2Array) {
        return (
            <FCard2 roll={FAttend2Array.roll} stNo={FAttend2Array.stNo} name={FAttend2Array.name} attend={FAttend2Array.attend} />
        )
    }
    
    return <>
        <Navbar />
        <SideBar/>
        <h1 className="dbAttend" id="DBAttend">Dashboard : Attendance </h1>
        <div className="FAttendanceOne">
            <h1 className="FAttendanceHead">Student : Attendance</h1>
            <div className="FRow1">
                <span id="FRollNo">Roll No.</span>
                <span id="FStNo">Student No.</span>
                <span id="FName">Name</span>
                <span id="FAttendMark">Attendance</span>
            </div>
            {/* <div className="FAttendCardCall">
                {FAttend2Array.map(CreateFAttendCard2)}
            </div> */}
            <div className="FAttendCardCall">
                {name.map(att => {
                    return <>
                        {console.log(name+'asdf')}
                    <div id='faculty-list'>
                        <div className="heading-1" id='fac-details'>{name}</div>
                        <div className="heading-2" id='fac-details'>fsad</div>
                        <div className="heading-5" id='fac-details'>
                            <div className="feed_circle" id='feed_circle_1'><span className='ratings'>P</span></div>
                            <div className="feed_circle" id='feed_circle_2'><span className='ratings'>A</span></div>
                        </div>
                    </div><br /><br /><br /><br /><br />
                        </>
                })}
            </div>
        </div>
    </>
}
export default FAttendance2;