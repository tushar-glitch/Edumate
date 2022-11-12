import React from 'react'

import './fac-dashboard.css'
import profileimg from '../../Assests/Images/avatar.png'
import updateimg from '../../Assests/Images/updates-img-removebg-preview.png'
import Chart from '../../utils/Pie/Pie'
import Navbar from '../../utils/Navbar/Navbar'
import * as ReactBootStrap from "react-bootstrap";

const FacDashboard = () => {
    // useEffect(()=>{
    //     if(loadBool)
    //     document.body.style.opacity="0.5"
    //     else
    //     document.body.style.opacity="1"
    //   },[loadBool])
    return (
        <>
           <Navbar />
            <h1 id='dash'>Dashboard</h1>
            <div id="container">
                <div id="container1">
                </div>
            </div>
            <div id="background-dash">
                <div id="greeting1"><span className='bold'>Hello,</span> Name<br /><span id="greeting2">Nice to have you back, what an exciting day!</span></div>
                <div id="today_class">Today's Classes</div>
                <div id="class_bg">
                    <div id="date">16 Nov, 2022 Wednesday</div>
                    <div id="class1" className='class'>
                        <span className="circle_name"></span>
                        <span className="class_name">Data Structure</span>
                        <span className="class_time">9:20-10:10</span>
                    </div>
                    <div id="class2" className='class'>
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
                    </div>
                </div>
                <div id="right">
                    <div id="profile_details">Profile Details</div>
                    <div id="card1">
                        <img src={profileimg} alt="" id='img' />
                        <div id="student_details"><span className='bold_name'>Name</span><br/>Male<br/>22xxxx<br/>CSE<br/>faculty@akgec.ac.in</div>
                    </div>
                    <div id="updates">Updates</div>
                    <div id="card3"></div>
                </div>
            </div>
            {/* {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null} */}
        </>
    )
}

export default FacDashboard;
