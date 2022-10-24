import React, {useState, useEffect} from "react";
import Background from "../Background/Background";
import ResetImg from "./resPwdImg";
import './resetPwd.css'

function ResetPwd (){
    const [pass, setPass] = useState("")
    function handlepass(e) {
        setPass(e.target.value)
    }
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
    return <>
    <Background />
        <h1 className="BgHead">&emsp;&ensp;Reset Password</h1>
        <p id="new-pass">New Password</p>
        <input type="text" id="new-pass-input" placeholder="New Password" onChange={handlepass} value={pass} />
        <span id="wrongpass">Invalid Password format</span>
        <p id="confirm-pass">Confirm Password</p>
        <input type="text" id="confirm-pass-input" placeholder="Confirm Password" />
        <button id="btn-reset">RESET PASSWORD</button>
        <ResetImg />
    </>
}
export default ResetPwd;