import React from 'react'
import './Navbar.css'
import profileicon from '../Assests/Images/profile-icon.png'
import nameimg from '../Assests/Images/Name.png'
import ch_em from '../Assests/Images/change_email.png'
import ch_pas from '../Assests/Images/change_pass.png'
import logout from '../Assests/Images/Logout.png'
import { useState } from 'react'
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
            <div id="section">
                <div id="greeting">Welcome, Name</div>
                <div id="role">Name</div>
                <button id="role-logo" onClick={toggle_dropdown}><img src={profileicon} alt="" /></button>
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
