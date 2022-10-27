import React, {useState, useEffect} from "react";
import Background from "../Background/Background";
import ResetImg from "./resPwdImg";
import './resetPwd.css'
import axios from "axios";

function ResetPwd (){
    const [password, setPassword] = useState("")
    function handlepass(e) {
        setPassword(e.target.value)
    }
    const [confirmpassword, setConfirmPassword] = useState("")
    function handleconpass(e) {
        setConfirmPassword(e.target.value)
        if (password == (e.target.value)) {
            console.log("same!!");
            document.getElementById('not-matched').style.display = "none";
        }
        else if((e.target.value)){
            document.getElementById('not-matched').style.display = "block";
        }
    }
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
    useEffect(() => {
        if (rightpass.test(password)) {
            document.getElementById('wrongpass1').style.display = "none";
            console.log('true');
        }
        else if(password){
            document.getElementById('wrongpass1').style.display = "block";
        }
    }, [password])
    function postpass() {
        var email = localStorage.getItem("email")
        var otp = localStorage.getItem('otp')
        var data = { email, otp, password, confirmpassword }
        console.log(data);
        axios.post("https://erp-edumate.herokuapp.com/api/user/changepassword/", data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return <>
    <Background />
        <h1 className="BgHead">&emsp;&ensp;Reset Password</h1>
        <p id="new-pass">New Password</p>
        <input type="" id="new-pass-input" placeholder="New Password" onChange={handlepass} value={password} />
        <span id="wrongpass1">Invalid Password format</span>
        <p id="confirm-pass">Confirm Password</p>
        <input type="" id="confirm-pass-input" placeholder="Confirm Password" onChange={handleconpass} value={confirmpassword} /> 
        <span id="not-matched">Password not matched!</span>
        <button id="btn-reset" onClick={postpass}>RESET PASSWORD</button>
        <ResetImg />
    </>
}
export default ResetPwd;