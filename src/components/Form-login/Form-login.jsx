import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Form-login.css'
import EmailIMG from './email-icon'
import LockIMG from './LockImg'
import Loginimg from "./loginImg";

// import LoginImg from "./Loginimg";
const Formlogin = () => {
    const [userID, setuserID] = useState(0)
    const [password, setPassword] = useState("")
    function handleuserID(e) {
        setuserID(e.target.value)
    }
    function handlepass(e) {
        setPassword(e.target.value)
    }
    var isnum = /^\d+$/;
    const [iscorrectpass, setIsCorrectPass] = useState(false)
    const[iscorrectid,setIsCorrectId] = useState(false)
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
    useEffect(() => {
        if (rightpass.test(password)) {
            document.getElementById('wrongpass').style.display = "none";
            console.log('true');
            setIsCorrectPass(true)
        }
        else if(password){
            document.getElementById('wrongpass').style.display = "block";
            setIsCorrectPass(false)
        }
    }, [password])
    useEffect(() => {
        if (isnum.test(userID)) {
            document.getElementById('wrongid').style.display = "none";
            console.log('true');
            setIsCorrectId(true)
        }
        else if(userID){
            document.getElementById('wrongid').style.display = "block";
            setIsCorrectId(false)
        }
    }, [userID])
    var data = { userID, password }
    console.log(data);
    function postdata() {
        if (iscorrectid&&iscorrectpass) {
            axios.post('https://erp-edumate.herokuapp.com/api/user/login/', data)
                .then(res => {
                    console.log(res);
                })
            .catch(err => {
                    console.log(err);
                })
        }
    }
    return (
        <>
            {/* <h1 id='heading'>Welcome to Edumate</h1> */}
            <h5 id='user-id'>User id</h5>
            <EmailIMG />
            <input type="text" id='input-box1' placeholder='Enter your username' onChange={handleuserID} value={userID} /><br />
            <span id='wrongid'>Incorrect userID. Please try again.</span>
            <h5 id='password'>Password</h5>
            <LockIMG />
            <h1 id='heading'>Welcome to Edumate</h1>
            <h5 id='user-id'>User id</h5>
            <input type="text" id='input-box1' placeholder='Enter your username' onChange={handleuserID} value={userID} /><br />
            <span id='wrongid'>Incorrect userID. Please try again.</span>
            <h5 id='password'>Password</h5>
            <input type="text" id='input-box2' placeholder='Enter your password' onChange={handlepass} value={password} /><br />
            <span id="wrongpass">Invalid Password format</span>
            <button id="forgot-pass">Forgot password?</button>
            <button id="btn-submit" type='submit' onClick={postdata}>LOGIN</button>
            <Loginimg />
        </>
    )
}

export default Formlogin
