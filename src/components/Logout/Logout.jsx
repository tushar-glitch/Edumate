import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Student/SideBar/sidebar'
import './logout.css'
const Logout = () => {
  return (
    <>
      <Navbar />
      <SideBar/>
      <div id="bg-logout">
        <div id="logout_head"><span id="logout_heading">Log Out?</span><br />Are you sure you want to logout?</div>
      </div>
    </>
  )
}

export default Logout
