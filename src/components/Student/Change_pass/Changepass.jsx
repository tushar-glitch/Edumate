import React from 'react'
import Navbar from '../../Navbar/Navbar'
import SideBar from '../SideBar/sidebar'
import './changepass.css'
import changepass from '../../Assests/Images/changepass.png'
const Changepass = () => {
    return (
        <>
            <Navbar />
            <SideBar />
            <div className="updateWhiteDiv" id='updatediv'>
                {/* <div id="changepassdiv"></div> */}
                <h1 className="updateGreyRow">Change Password</h1>
                <span id="pre_pass">Previous Password</span>
                <input type="text" id="input_pre_pass" />
                <span id="new_pass">New Password</span>
                <input type="text" id="input_new_pass" />
                <span id="con_new_pass">Confirm New Password</span>
                <input type="text" id="input_con_new_pass" />
                <button id="change_pass">Confirm New Password</button>
                <img src={changepass} id='changepass-img' />
            </div>
        </>
    )
}

export default Changepass
