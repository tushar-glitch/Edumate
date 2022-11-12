import React from 'react'

import './dashboard.css'
import Navbar from '../Navbar/Navbar'
import profileimg from '../Assests/Images/avatar.png'
import updateimg from '../Assests/Images/updates-img-removebg-preview.png'
import Chart from '../Pie/Pie'
import SideBar from '../Student/SideBar/sidebar'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Classcard from './Classcard'
const Dashboard = () => {
    const [name, setName] = useState('')
    const [dob, setDob] = useState('')
    const accessToken = sessionStorage.getItem("access token");
    console.log(accessToken);
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    useEffect(() => {
        axios.get("https://erp-edumate.herokuapp.com/api/user/student/profiledetails/", config)
            .then((res) => {
                console.log(res);
                setName(res.data.name)
                setDob(res.data.DOB)
            })
    }, [])
    useEffect(()=>{
        axios.get("https://erp-edumate.herokuapp.com/api/user/student/timetable/",config).
        then((res)=>{
            console.log(res.data);
            for (let i = 0; i < 30; ++i){
                if (res.data[i].day === "Monday" && res.data[i].subject) {
                    console.log("asdf" + res.data[i].period);
                    console.log("fdsa" + res.data[i].subject);
                    // <Classcard time={jvdvghnvbm} />
                    // <Classcard name={res.data[i].subject} time={res.data[i].period}/>
                }
            }
        }).
        catch((err)=>{
            console.log(err);
        })
    },[])
            return (
                <>
                    <SideBar />
                    <Navbar />
                    <h1 id='dash'>Dashboard</h1>
                    <div id="container">
                        <div id="container1">
                        </div>
                    </div>
                    <div id="background-dash">
                        <div id="greeting1"><span className='bold'>Hello,</span> {name}<br /><span id="greeting2">Nice to have you back, what an exciting day!</span></div>
                        <div id="today_class">Today's Classes</div>
                        <div id="class_bg">
                            <div id="date">16 Nov, 2022 Wednesday</div>
                            {/* <Classcard /> */}
                            {/* {updateCdArr.map(CreateUpdateCard)} */}
                            {/* <div id="class1" className='class'>
                                <span className="circle_name"></span>
                                <span className="class_name">Data Structure</span>
                                <span className="class_time">9:20-10:10</span>
                            </div> */}
                            {/* <div id="class2" className='class'>
                                <span className="circle_name"></span>
                                <span className="class_name">Data Structure</span>
                                <span className="class_time">9:20-10:10</span>
                            </div>
                            <div id="class3" className='class'>
                                <span className="circle_name"></span>
                                <span className="class_name">Data Structure</span>
                                <span className="class_time">9:20-10:10</span>
                            </div>
                            <div id="class4" className='class'>
                                <span className="circle_name"></span>
                                <span className="class_name">Data Structure</span>
                                <span className="class_time">9:20-10:10</span>
                            </div>
                            <div id="class5" className='class'>
                                <span className="circle_name"></span>
                                <span className="class_name">Data Structure</span>
                                <span className="class_time">9:20-10:10</span>
                            </div> */}
                        </div>
                        <div id="right">
                            <div id="profile_details">Profile Details</div>
                            <div id="card1">
                                <img src={profileimg} alt="" id='img' />
                                <div id="student_details"><span className='bold_name'>{name}</span><br />Male<br />{dob}<br />CSE<br />student@akgec.ac.in</div>
                            </div>
                            <div id="attendance">Attendance</div>
                            <div id="card2">
                                <span id="chart"><Chart /></span>
                                <div id="attendance_details">Overall Present: 80<br />Overall Lecture: 100<br />Overall Attendance: 80%</div>
                            </div>
                            <div id="updates1">Updates</div>
                            <div id="card31"></div>
                        </div>
                    </div>
                </>
            )
        }

export default Dashboard;
