import React from 'react'

import './fac-dashboard.css'
import * as ReactBootStrap from "react-bootstrap";

import profileimg from '../../Assests/Images/avatar.png'
// import updateimg from '../Assests/Images/updates-img-removebg-preview.png'
import Chart from '../../utils/Pie/Pie'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Classcard1 from './Classcard'
import Navbar from '../../utils/Navbar/Navbar'
const FacDashboard = () => {
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
    const [loadBool,setLoadBool] = useState(false)
    useEffect(()=>{
        setLoadBool(true)
        axios.get("https://erp-edumate.herokuapp.com/api/user/student/timetable/",config).
        then((res)=>{
            console.log(res.data);
            setLoadBool(false)
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
            setLoadBool(false)
            console.log(err);
        })
    },[])
    useEffect(()=>{
        if(loadBool)
        document.body.style.opacity="0.5"
        else
        document.body.style.opacity="1"
      },[loadBool])
            return (
                <>
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
                        </div>
                        <div id="right">
                            <div id="profile_details">Profile Details</div>
                            <div id="card1">
                                <img src={profileimg} alt="" id='img' />
                                <div id="student_details"><span className='bold_name'>{name}</span><br />Male<br />{dob}<br />CSE<br />student@akgec.ac.in</div>
                            </div>
                            
                            <div id="updates1">Updates</div>
                            <div id="card31"></div>
                        </div>
                    </div>
                    {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
                </>
            )
        }

export default FacDashboard;
