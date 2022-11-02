import React from 'react'
import './student.css'
import avatar from '../Assests/Images/avatar.png'
const student = () => {
    return (
        <>
            <h1 id='dash'>Dashboard &gt; My Profile</h1>
            <div id="background">
                <div id="avatar"><img src={avatar}/></div>
                <div id="heading1">Student Profile</div>
                <div id="personalinfo">Personal Info</div>
                <div id="stu-name">Student's Name Tushar Chauhan</div>
                <div id="roll">Roll No. 2100xxxxxxxxx</div>
                <div id="adm-no">Admission No. 21xxxxx</div>
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

export default student
