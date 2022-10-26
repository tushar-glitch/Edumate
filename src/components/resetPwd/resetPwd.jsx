import React, {useState, useEffect} from "react";
import Background from "../Background/Background";
import ResetImg from "./resPwdImg";
import './resetPwd.css'

function ResetPwd (){
    const [pass, setPass] = useState("")
    function handlepass(e) {
        setPass(e.target.value)
    }
    const [conpass, setConPass] = useState("")
    function handleconpass(e) {
        setConPass(e.target.value)
        if (pass == (e.target.value)) {
            console.log("same!!");
            document.getElementById('not-matched').style.display = "none";
        }
        else if((e.target.value)){
            document.getElementById('not-matched').style.display = "block";
        }
    }
    const rightpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/
    useEffect(() => {
        if (rightpass.test(pass)) {
            document.getElementById('wrongpass1').style.display = "none";
            console.log('true');
        }
        else if(pass){
            document.getElementById('wrongpass1').style.display = "block";
        }
    }, [pass])
    return <>
    <Background />
        <h1 className="BgHead">&emsp;&ensp;Reset Password</h1>
        <p id="new-pass">New Password</p>
        <input type="password" id="new-pass-input" placeholder="New Password" onChange={handlepass} value={pass} />
        <span id="wrongpass1">Invalid Password format</span>
        <p id="confirm-pass">Confirm Password</p>
        <input type="password" id="confirm-pass-input" placeholder="Confirm Password" onChange={handleconpass} value={conpass} /> 
        {/* <span id="not-matched">Password not matched!</span> */}
        <button id="btn-reset">RESET PASSWORD</button>
        <ResetImg />
    </>
}
export default ResetPwd;