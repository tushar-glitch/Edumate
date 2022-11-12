import React from 'react'

import './dashboard1.css'
import profileimg from '../../Assests/Images/avatar.png'
import AdmBar from '../admin_bar/AdmBar'
import * as ReactBootStrap from "react-bootstrap";

const AdminDashboard = () => {
    // useEffect(()=>{
    //     if(loadBool)
    //     document.body.style.opacity="0.5"
    //     else
    //     document.body.style.opacity="1"
    //   },[loadBool])
    return (
        <>
         <AdmBar />
            <h1 id='dash'>Dashboard</h1>
            <div id="container">
                <div id="container1">
                </div>
            </div>
            <div id="background-dash">
                <div id="greeting1"><span className='bold'>Hello,</span> Name<br /><span id="greeting2">Nice to have you back, what an exciting day!</span></div>
                <div id="today_class">Add Student</div>
                <div id="class_bg1">
                    <div id="class2" className='class1'>
                        <span className="circle_name"><span className="plus">+</span></span>
                        <span className="class_name1">Add Student</span>
                    </div>
                </div>
                <div id="today_class1">Add Faculty</div>
                <div id="class_bg2">
                    <div id="class2" className='class1'>
                        <span className="circle_name"><span className="plus">+</span></span>
                        <span className="class_name1">Add Faculty</span>
                    </div>
                </div>
                <div id="right">
                    <div id="profile_details">Profile Details</div>
                    <div id="card1">
                        <img src={profileimg} alt="" id='img' />
                        <div id="student_details"><span className='bold_name'>Name</span><br/>Male<br/>admin@akgec.ac.in</div>
                    </div>
                    <div id="updates2">Updates</div>
                    <div id="card32"></div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;
