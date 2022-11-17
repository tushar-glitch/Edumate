import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

import './logout.css'

const Logout = () => {
  const [log,setLog] = useState(false)
  const navigate = useNavigate();
  const USERID= sessionStorage.getItem("LoggedInUserId");
  function handlelogout() {
    sessionStorage.clear();
    setLog(true)
    sessionStorage.setItem("LogOut",log)
    navigate("/")
  }
  function cancelLogOut (){
    console.log("bdsjh")
    if(USERID==1)
navigate("/facDashboard")
    else if(USERID==2)
navigate("/stu_dashboard")
    else if(USERID==9)
    navigate("/admin_dashboard")
  }
  return (
    <>
    <Navbar />
      <div id="bg-logout">
        <div id="logout_head"><span id="logout_heading">Log Out?</span><br /><span id='logout_text'>Are you sure you want to logout?</span></div>
        <Link to='/'><button id='btn_logout' onClick={handlelogout}>Log Out</button></Link>
        <button id='btn_logout_cancel' onClick={cancelLogOut}>Cancel</button>
      </div>
      {/* {log?<Link to='/'/>:null} */}
    </>
  )
}

export default Logout