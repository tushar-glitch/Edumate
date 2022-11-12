import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Student/SideBar/sidebar'
import './logout.css'
const Logout = () => {
  const [log,setLog] = useState(false)
  function handlelogout() {
    sessionStorage.removeItem('access token')
    setLog(true)
  }
  return (
    <>
      <Navbar />
      <SideBar/>
      <div id="bg-logout">
        <div id="logout_head"><span id="logout_heading">Log Out?</span><br /><span id='logout_text'>Are you sure you want to logout?</span></div>
        <Link to='/'><button id='btn_logout' onClick={handlelogout}>Log Out</button></Link>
        <button id='btn_logout_cancel'>Cancel</button>
      </div>
      {/* {log?<Link to='/'/>:null} */}
    </>
  )
}

export default Logout
