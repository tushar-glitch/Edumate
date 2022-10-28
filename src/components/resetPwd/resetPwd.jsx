import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../Background/Background";
import ResetImg from "./resPwdImg";
import './resetPwd.css'
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/fontawesome-free-solid";

function ResetPwd() {
    const [password, setPassword] = useState("")
    const [truepass, setTruePass] = useState(false)
    const [passmatch, setPassMatch] = useState(false)
    function handlepass(e) {
        setPassword(e.target.value)
    }
    const [ispasschanged, setIsPassChanged] = useState(true)
    const [confirmpassword, setConfirmPassword] = useState("")
    function handleconpass(e) {
        setConfirmPassword(e.target.value)
        if (password == (e.target.value)) {
            console.log("same!!");
            document.getElementById('not-matched1').style.display = "none";
            setPassMatch(true)
        }
        else if ((e.target.value)) {
            document.getElementById('not-matched1').style.display = "block";
        }
    }
    const [rdtLogin, setRdtLogin] = useState(true);
    const [show1, setShow1] = useState(false);
    function showHide1() {
        setShow1(!show1);
    }
    const [show2, setShow2] = useState(false);
    function showHide2() {
        setShow2(!show2);
    }
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
    useEffect(() => {
        if (rightpass.test(password)) {
            document.getElementById('wrongpass1').style.display = "none";
            setTruePass(true)
        }
        else if (password) {
            document.getElementById('wrongpass1').style.display = "block";
        }
    }, [password])
    function postpass() {
        if (truepass && passmatch) {
            var email = localStorage.getItem("email")
            var otp = localStorage.getItem('otp')
            var data = { email, otp, password, confirmpassword }
            console.log(data);
            axios.post("https://erp-edumate.herokuapp.com/api/user/changepassword/", data)
                .then((res) => {
                    console.log(res);
                    alert('Your password has been changed successfully!')
                    setIsPassChanged(true)
                    setRdtLogin(true);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
    return <>
        <Background />
        <h1 className="BgHead">&emsp;&ensp;Reset Password</h1>
        <p id="new-pass">New Password</p>
        <input type={show1 ? "text" : "password"}  id="new-pass-input" placeholder="New Password" onChange={handlepass} value={password} /><br />
        {show1 ? (
            <FontAwesomeIcon icon={faEye} id="eye1" onClick={showHide1} />
        ) : (
            <FontAwesomeIcon icon={faEyeSlash} id="eye1" onClick={showHide1} />
        )}
        {show2 ? (
            <FontAwesomeIcon icon={faEye} id="eye2" onClick={showHide2} />
        ) : (
            <FontAwesomeIcon icon={faEyeSlash} id="eye2" onClick={showHide2} />
        )}
        {/* {ispasschanged?(<Link to="/"></Link>):(<Link to="/rstPwd"></Link>)} */}
        <span id="wrongpass1">Invalid Password format</span>
        <p id="confirm-pass">Confirm Password</p>
        <input type={show2 ? "text" : "password"} id="confirm-pass-input" placeholder="Confirm Password" onChange={handleconpass} value={confirmpassword} />
        <span id="not-matched1">Password not matched!</span>
        {(truepass&&passmatch)?(<Link to="/">
      <button id="btn-reset" onClick={postpass}>RESET PASSWORD</button>
      </Link>):(<Link to="/rstPwd">
      <button id="btn-reset" onClick={postpass}>RESET PASSWORD</button>
       </Link>)}
        <ResetImg />
    </>
}
export default ResetPwd;