import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../Background/Background";
import OTPImg from "./otpImg";
import "./otp.css";

function OTP() {
  const [email, setEmail] = useState("");
  function handleemail(e) {
    setEmail(e.target.value);
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
  return (
    <>
      <Background />
      <h1 className="BgHead">&emsp;&ensp;OTP Verification </h1>
      <p id="OTPid">Enter OTP sent on your email</p>
      <input
        type="text"
        id="input-box"
        placeholder="0 0 0 0"
        value={email}
        onChange={handleemail}
      />
      <br />
      <span id="no-otp-recieved">Don’t recieve an OTP?</span>
      <button id="resend-otp">Resend OTP</button>
      <Link to="/rstPwd">
        <button id="btn-continue">CONTINUE</button>
      </Link>
      <OTPImg />
    </>
  );
}
export default OTP;