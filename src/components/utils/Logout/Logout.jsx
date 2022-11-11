import React from 'react'
import Navbar from '../Navbar/Navbar'

import './logout.css'
const Logout = () => {
  return (
    <>
    <Navbar />
      <div id="bg-logout">
        <div id="logout_head"><span id="logout_heading">Log Out?</span><br />Are you sure you want to logout?</div>
      </div>
    </>
  )
}

export default Logout
