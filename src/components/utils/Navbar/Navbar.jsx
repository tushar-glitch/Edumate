import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
import "../../SideBar/sideBar.css";
import profileicon from '../../Assests/Images/profile-icon.png'
import nameimg from '../../Assests/Images/Name.png'
import ch_em from '../../Assests/Images/change_email.png'
import ch_pas from '../../Assests/Images/change_pass.png'
import logout from '../../Assests/Images/Logout.png'
import attendanceicon from "../../Assests/Images/attendanceicon.svg";
import feedbackicon from "../../Assests/Images/feedbackicon.svg";
import ph_student from "../../Assests/Images/ph_student.svg";
import timetableicon from "../../Assests/Images/timetableicon.svg";
import updatesicon from "../../Assests/Images/updatesicon.svg";
import addFaculty from "../../Assests/Images/addFaculty.svg";
import dashboard from "../../Assests/Images/dashboard.svg";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer';
// import SideBar from '../Student/SideBar/sidebar'
const Navbar = () => {
    const [show,setShow] = useState(false)
    // // const facUserId = sessionStorage.getItem("Faculty_userId");
    // const stuUserId = sessionStorage.getItem("Student_userId");
    // const admUserId = sessionStorage.getItem("Admin_userId");
    const userIdLog = sessionStorage.getItem("LoggedInUserId")
    const USERID= sessionStorage.getItem("UserIdLogger");
    const StName = sessionStorage.getItem("StudentName")
    const FacName = sessionStorage.getItem("FacultyName");
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
        <Footer />
         <div className="sideB">
            <h1 className="edum">Edumate</h1>
            <FontAwesomeIcon icon={faXmark} className="XMark" />
            <ul className="sideBarList" >
           {userIdLog==1?(<Link to="/facDashboard"><li onClick={()=>{
            window.location.reload();
           }}><img src={dashboard} className="sidebarIcon"/><span className="sideBarListValue">DashBoard</span></li></Link>):(null)}
           {userIdLog==2?(<Link to="/stu_dashboard"><li><img src={dashboard} className="sidebarIcon"/><span className="sideBarListValue">DashBoard</span></li></Link>):(null)}
           {/* {userIdLog==9?(<Link to="/admin_dashboard"><li><img src={ph_student} className="sidebarIcon"/><span className="sideBarListValue">DashBoard</span></li></Link>):(null)} */}
                {userIdLog==1?(<Link to="/facProfile"><li><img src={ph_student} className="sidebarIcon"/><span className="sideBarListValue">My Profile</span></li></Link>):(null)}
                {userIdLog==2?(<Link to="/profile" ><li><img src={ph_student} className="sidebarIcon"/><span className="sideBarListValue">My Profile</span></li></Link>):(null)}
                {/* {userIdLog==1?(<Link to=""><li><img src={ph_student} className="sidebarIcon"/><span className="sideBarListValue">My Profile</span></li></Link>):(null)} */}
                {userIdLog==2?(<Link to="/stAttendance"><li><img src={attendanceicon} className="sidebarIcon" /><span className="sideBarListValue">Attendance</span></li></Link>):(null)}
             {userIdLog==1?(<Link to="/facFeed"><li><img src={feedbackicon} className="sidebarIcon" /><span className="sideBarListValue">Feedback</span></li></Link>):(null)}
             {userIdLog==2?(<Link to="/feedback"><li><img src={feedbackicon} className="sidebarIcon" /><span className="sideBarListValue">Feedback</span></li></Link>):(null)}
                {userIdLog==1?(<Link to="/ftimetable"><li><img src={timetableicon} className="sidebarIcon" /><span className="sideBarListValue">Time Table</span></li></Link>):(null)}
                {userIdLog==2?(<Link to="/stTimetable"><li><img src={timetableicon} className="sidebarIcon" /><span className="sideBarListValue">Time Table</span></li></Link>):(null)}
                {userIdLog==1?(<Link to="/Fupdate"><li><img src={updatesicon} className="sidebarIcon" /><span className="sideBarListValue">Updates</span></li></Link>):(null)}
                {userIdLog==2?(<Link to="/updates"><li><img src={updatesicon} className="sidebarIcon" /><span className="sideBarListValue">Updates</span></li></Link>):(null)}
                </ul>
        </div>
            <div id="section">
                <div id="greetingNav">Welcome, Name</div>
                {userIdLog==2?( <div id="greetingNav">Welcome, {StName}</div>):(null)}
                {userIdLog==1?( <div id="greetingNav">Welcome, {FacName}</div>):(null)}
                {userIdLog==9?( <div id="greetingNav">Welcome, Admin</div>):(null)}
                <input type="checkbox" id="NavCheck" />
                <label for="navSideBarIcon" className='navSBIcon'>
              <FontAwesomeIcon icon={faBars} id="navBarLogo" />
                </label>
                <div id="role">{USERID}</div>
                <button id="role-logo" onClick={toggle_dropdown}><img src={profileicon} id="profile-logo" alt="" /></button>
                <div id="dropdown">
                {/* <div id='nav_name' className='dropdown_items'><img className='dropdown_img' id='dropdown_img1' src={nameimg} />Name</div> */}
                   {userIdLog==1?(<Link to="/facProfile"><div id='nav_name' className='dropdown_items'><img className='dropdown_img' id='dropdown_img1' src={nameimg} />Name</div></Link>):(null)}
                   {userIdLog==2?(<Link to="/profile"><div id='nav_name' className='dropdown_items'><img className='dropdown_img' id='dropdown_img1' src={nameimg} />Name</div></Link>):(null)}
                   {/* {userIdLog==9?(<Link to=""><div id='nav_name' className='dropdown_items'><img className='dropdown_img' id='dropdown_img1' src={nameimg} />Name</div></Link>):(null)} */}
                   {userIdLog==1?( <Link to="/facUpdateEmail"><div id='nav_ch_em' className='dropdown_items'><img className='dropdown_img' id='dropdown_img2' src={ch_em} />Change Email</div></Link>):(null)}
                   {userIdLog==2?( <Link to="/stUpdateEmail"><div id='nav_ch_em' className='dropdown_items'><img className='dropdown_img' id='dropdown_img2' src={ch_em} />Change Email</div></Link>):(null)}
                    {userIdLog==2?(<Link to="/studChngPwd"><div id='nav_ch_pass' className='dropdown_items'><img className='dropdown_img' id='dropdown_img3' src={ch_pas} />Change Password</div></Link>):(null)}
                    {userIdLog==1?(<Link to="/facChngPwd"><div id='nav_ch_pass' className='dropdown_items'><img className='dropdown_img' id='dropdown_img3' src={ch_pas} />Change Password</div></Link>):(null)}
                    <Link to="/logout"><div id='nav_logout' className='dropdown_items'><img className='dropdown_img' id='dropdown_img4' src={logout} />Logout</div></Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
