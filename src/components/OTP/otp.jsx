import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../Background/Background";
import OTPImg from "./otpImg";
import OtpTimer from "otp-timer";
import axios from "axios";
import "./otp.css";
function OTP() {
  const [otp, setOtp] = useState("");
  const [isCorrectOtp, setIsCorrectOtp] = useState(false);
  const [timer, setTimer] = useState(59)
  function handleotp(e) {
    setOtp(e.target.value);
  }
  const isnum = /^\d+$/;
  // useEffect(()=>{
  //   if (isnum.test(otp)) {
  //     document.getElementById("wrongid").style.display = "none";
  //     console.log("true");
  //     setIsCorrectOtp(true);
  //   } else if (otp) {
  //     document.getElementById("wrongid").style.display = "block";
  //     setIsCorrectOtp(false);
  //   }
  // }, [otp]);
  var email = localStorage.getItem("email")
  const [ckOtp, setCkOtp] = useState(false);
  function postotp() {
    // if(isCorrectOtp){

    var data = { email, otp }
    axios.post("https://erp-edumate.herokuapp.com/api/user/verifyotp/", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("otp", otp)
        setCkOtp(true);
        if (res.status == 200)
          setIsCorrectOtp(true)
        console.log(isCorrectOtp);
      })
      .catch((err) => {
        console.log(err);
      })
    // }

  }

  return (
    <>
      <Background />
      <h1 className="BgHead">&emsp;&ensp;OTP Verification </h1>
      <p id="OTPid">Enter OTP sent on {email}</p>
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
      <span id="timer"><OtpTimer
        minutes={0}
        seconds={59}
        text=" "
        // ButtonText="Resend"
      /></span>
      {isCorrectOtp ? (<Link to="/rstPwd">
        <button id="btn-continue" onClick={postotp}>CONTINUE</button>
      </Link>) : (<Link to="/otp">
        <button id="btn-continue" onClick={postotp}>CONTINUE</button>
      </Link>)}
      {/* <Link to="/rstPwd">
        <button id="btn-continue" onClick={postotp}>CONTINUE</button>
      </Link> */}
      <OTPImg />
    </>
  );
}
export default OTP;