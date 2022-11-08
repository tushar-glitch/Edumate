import React from 'react'
import './Navbar.css'
import profileicon from '../Assests/Images/profile-icon.png'
import nameimg from '../Assests/Images/Name.png'
import ch_em from '../Assests/Images/change_email.png'
import ch_pas from '../Assests/Images/change_pass.png'
import logout from '../Assests/Images/Logout.png'
import { useState } from 'react'
import attendanceicon from "../Student/SideBar/attendanceicon.svg";
import feedbackicon from "../Student/SideBar/feedbackicon.svg";
import ph_student from "../Student/SideBar/ph_student.svg";
import timetableicon from "../Student/SideBar/timetableicon.svg";
import updatesicon from "../Student/SideBar/updatesicon.svg";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
// import SideBar from '../Student/SideBar/sidebar'
const Navbar = () => {
    const [show,setShow] = useState(false)
    function toggle_dropdown() {
        if (!show) {
            setShow(true);
            document.getElementById('dropdown').style.display = "block";
        }
        else {
            setShow(false)
            document.getElementById('dropdown').style.display = "none";
        }
    }
    return (
        <>
         <div className="sideB">
            <h1 className="edum">Edumate</h1>
            <FontAwesomeIcon icon={faXmark} className="XMark" />
            <ul className="sideList">
                <li><img src={ph_student} className="sidebarIcon"/><span className="sideBarListValue">My Profile</span></li>
                <li><img src={attendanceicon} className="sidebarIcon" /><span className="sideBarListValue">Attendance</span></li>
                <li><img src={feedbackicon} className="sidebarIcon" /><span className="sideBarListValue">Feedback</span></li>
                <li><img src={timetableicon} className="sidebarIcon" /><span className="sideBarListValue">Time Table</span></li>
                <li><img src={updatesicon} className="sidebarIcon" /><span className="sideBarListValue">Updates</span></li>
            </ul>
        </div>
            <div id="section">
                <div id="greetingNav">Welcome, Name</div>
                <input type="checkbox" id="NavCheck" />
                <label for="navSideBarIcon" className='navSBIcon'>
              <FontAwesomeIcon icon={faBars} id="navBarLogo" />
                </label>
                <div id="role">Name</div>
                <button id="role-logo" onClick={toggle_dropdown}><img src={profileicon} id="profile-logo" alt="" /></button>
                <div id="dropdown">
                    <div id='nav_name' className='dropdown_items'><img className='dropdown_img' id='dropdown_img1' src={nameimg} />Name</div>
                    <div id='nav_ch_em' className='dropdown_items'><img className='dropdown_img' id='dropdown_img2' src={ch_em} />Change Email</div>
                    <div id='nav_ch_pass' className='dropdown_items'><img className='dropdown_img' id='dropdown_img3' src={ch_pas} />Change Password</div>
                    <div id='nav_logout' className='dropdown_items'><img className='dropdown_img' id='dropdown_img4' src={logout} />Logout</div>
                </div>
            </div>
        </>
    )
}

export default Navbar
