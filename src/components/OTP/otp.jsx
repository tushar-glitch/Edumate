import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Background from "../Background/Background";
import OTPImg from "./otpImg";
import axios from "axios";
import OtpTimer from 'otp-timer'
import "./otp.css";
function OTP() {
  const [otp, setOtp] = useState("");
  const [isCorrectOtp, setIsCorrectOtp] = useState(false);
  function handleotp(e) {
    setOtp(e.target.value);
  }
  
  const isnum = /^\d+$/;
  useEffect(() => {
    if (isnum.test(otp)) {
      document.getElementById("wrongid1").style.display = "none";
      console.log("true");
      setIsCorrectOtp(true);
    } else if (otp) {
      document.getElementById("wrongid1").style.display = "block";
      setIsCorrectOtp(false);
    }
  }, [otp]);
  const [seconds, setSeconds] = useState(59)
  const [minutes, setMinutes] = useState(0)
  var timer
  useEffect(() => {
    timer=setInterval(() => {
      setSeconds(seconds-1)
    }, 1000);
  })
  var email = localStorage.getItem("email")
  const [ckOtp, setCkOtp] = useState(false);
  function postotp() {
    // if(isCorrectOtp){
    console.log(email);
    var data = { email, otp }
    axios.post("https://erp-edumate.herokuapp.com/api/user/verifyotp/", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("otp", otp)
        setCkOtp(true);
        if (res.status == 200) {
          navigate("/rstPwd")
        }
        // setIsCorrectOtp(true)
        // console.log(isCorrectOtp);
      })
      .catch((err) => {
        console.log(err);
      })
    // }

  }
  const navigate = useNavigate()

  function resendotp() {
    axios.post("https://erp-edumate.herokuapp.com/api/user/sendotp/", { email })
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("email")
        localStorage.setItem("email", email);
      })
      .catch((err) => {
        console.log(err);
        // document.getElementById("wrongemail").style.display = "block";
        // localStorage.setItem("email","");
      })
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
        maxLength="4"
      />
      <br />
      <span id="wrongid1">Invalid OTP format</span>
      <span id="no-otp-recieved">Don’t recieve an OTP?</span>
      <button id="resend-otp" onClick={resendotp}>Resend OTP</button>
      {/* <span id="timer">{minutes}:{seconds}</span> */}
      {/* <div id="timer">
        <OtpTimer seconds= {3} minutes={0} ButtonText="Resend OTP" background="orangered" buttonColor="white"/>
      </div> */}
      <button id="btn-continue" onClick={postotp}>CONTINUE</button>
      <OTPImg />
    </>
  );
}
export default OTP;
