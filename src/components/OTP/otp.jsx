import React, { useState } from "react";
import OTPImg from "./otpImg";
import './otp.css'

function OTP() {
    const [email, setEmail] = useState('')
    function handleemail(e) {
        setEmail(e.target.value)
    }
    const isnum = /^\d+$/;

    // function checkemail(e) {
    //     e.preventDefault()
    //     if (rightemail.test(email)) {
    //         document.getElementById('wrongemail').style.display = "none";
    //         console.log('true');
    //     }
    //     else if (email) {
    //         document.getElementById('wrongemail').style.display = "block";
    //     }
    // }
    return <>
        <h1 className="BgHead">&emsp;&emsp;OTP Verification </h1>
        <p>Enter OTP sent to example@gmail.com </p>
        <input type="text" id='input-box' placeholder='  0 0 0 0' value={email} onChange={handleemail} /><br />
        <span id="no-otp-recieved">Don’t recieve an OTP?</span>
        <button id="resend-otp">Resend OTP</button>
        <button id="btn-continue">CONTINUE</button>
        <OTPImg />
    </>
}
export default OTP;