import React, { useEffect, useState } from 'react'
import './Form-login.css'
import EmailIMG from './email-icon'
import LockIMG from './LockImg'
const Formlogin = () => {
    const [userid, setUserId] = useState("")
    const [pass, setPass] = useState("")
    function handleuserid(e) {
        setUserId(e.target.value)
    }
    function handlepass(e) {
        setPass(e.target.value)
    }
    // const rightpass = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
    var isnum = /^\d+$/;
    
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
    useEffect(() => {
        if (rightpass.test(pass)) {
            document.getElementById('wrongpass').style.display = "none";
            console.log('true');
        }
        else if(pass){
            document.getElementById('wrongpass').style.display = "block";
        }
    }, [pass])
    useEffect(() => {
        if (isnum.test(userid)) {
            document.getElementById('wrongid').style.display = "none";
            console.log('true');
        }
        else if(userid){
            document.getElementById('wrongid').style.display = "block";
        }
    }, [userid])
    var data = { userid, pass }
    console.log(data);
    return (
        <>
            {/* <h1 id='heading'>Welcome to Edumate</h1> */}
            <h5 id='user-id'>User id</h5>
            <EmailIMG />
            <input type="text" id='input-box1' placeholder='Enter your username' onChange={handleuserid} value={userid} /><br />
            <span id='wrongid'>Incorrect userId. Please try again.</span>
            <h5 id='password'>Password</h5>
            <LockIMG />
            <input type="text" id='input-box2' placeholder='Enter your password' onChange={handlepass} value={pass} /><br />
            <span id="wrongpass">Invalid Password format</span>
            <button id="btn-submit">LOGIN</button>
        </>
    )
}

export default Formlogin
