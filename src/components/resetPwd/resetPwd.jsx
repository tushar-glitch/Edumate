import React from "react";
import Background from "../Background/Background";
import ResetImg from "./resPwdImg";
import './resetPwd.css'

function ResetPwd (){
    return <>
    <Background />
        <h1 className="BgHead">&emsp;&ensp;Reset Password</h1>
        <p id="new-pass">New Password</p>
        <input type="text" id="new-pass-input" placeholder="New Password" />
        <p id="confirm-pass">Confirm Password</p>
        <input type="text" id="confirm-pass-input" placeholder="Confirm Password" />
        <button id="btn-reset">RESET PASSWORD</button>
        <ResetImg />
    </>
}
export default ResetPwd;