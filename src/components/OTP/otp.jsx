import React, { useState } from "react";
import { Link} from "react-router-dom";
import Background from "../Background/Background";
import OTPImg from "./otpImg";
import "./otp.css";
import axios from "axios";

function OTP(props) {
  const [otp, setOtp] = useState("");
  function handleotp(e) {
    setOtp(e.target.value);
  }
  const isnum = /^\d+$/;
  function postotp(){
    var email = localStorage.getItem("email")
    console.log(email);
    var data = { email, otp }
    axios.post("https://erp-edumate.herokuapp.com/api/user/verifyotp/", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    localStorage.setItem("otp",otp)
  }
  return (
    <>
      <Background />
      <h1 className="BgHead">&emsp;&ensp;OTP Verification </h1>
      <p id="OTPid">Enter OTP sent on your email</p>
      <input
        type="text"
        id="input-box"
        placeholder="0 0 0 0"
        value={otp}
        onChange={handleotp}
      />
      <br />
      <span id="no-otp-recieved">Don’t recieve an OTP?</span>
      <button id="resend-otp">Resend OTP</button>
      <Link to="/rstPwd">
        <button id="btn-continue" onClick={postotp}>CONTINUE</button>
      </Link>
      <OTPImg />
    </>
  );
}
export default OTP;