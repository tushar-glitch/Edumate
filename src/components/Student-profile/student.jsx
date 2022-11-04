import React from 'react'
import './student.css'
import avatar from '../Assests/Images/avatar.png'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Student/SideBar/sidebar'
import EditProfile from './editProfile'
import { useState } from 'react'
const Student = (prop) => {
    var name1 = "tushar";
    const [na, setNa] = useState(name1);
    function handleEdit() {
        console.log("fhjbj");
        document.getElementsByClassName("space1").style.display = "none";
        setNa(prop.n);
    }
    return (
        <>
            <EditProfile name={name1} />
            <SideBar />
            <Navbar />
            <h1 id='dash'>Dashboard &gt; My Profile</h1>
            <div id="background">
                <div id="avatar">
                    <img src={avatar} />
                    <span id='dis-name'>TUSHAR CHAUHAN </span><br />
                    Mon 3 SEPT 2001 <br />
                    B.TECH 2ND YEAR <br />
                    CSE
                </div>
                <div id="heading1">Student Profile</div>
                <div id="personalinfo">Personal Info</div>
                <div id="stu-name">Student's Name <span className='space1'>Tushar Chauhan</span></div>
                <div id="roll">Roll No. <span className='space2'>2100xxxxxxxxx</span></div>
                <div id="adm-no">Admission No. <span className='space3'>21xxxxx</span></div>
                <div id="bl-gr">Blood Group</div>
                <div id="email">Email</div>
                <div id="heading2">Contact Details</div>
                <div id="address">Address</div>
                <div id="city">City</div>
                <div id="state">State</div>
                <div id="stu-phone">Student's Mobile No.</div>
                <div id="pin">Pincode</div>
                <div id="heading3">Parents</div>
                <div id="fat-phone">Father's Mobile No.</div>
                <div id="mot-phone">Mother's Mobile No.</div>
            </div>
        </>
    )
}

export default Student
