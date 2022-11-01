import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [seconds, setSeconds] = useState(59);
  // const [minutes, setMinutes] = useState(0)

  useEffect(() => {
   const timer=
    seconds>0 && setInterval(() => {
      setSeconds(seconds-1)
    },1000);
    return ()=> clearInterval(timer);
  },[seconds]);

  let email = localStorage.getItem("email")
  const [incOTP,setIncOtp] = useState("");
  const navigate = useNavigate();
  function postotp(){
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
        localStorage.setItem("otp",otp)
        setIncOtp("");
        navigate("/rstPwd");
      })
      .catch((err) => {
        console.log(err);
      })
}
  const navigate = useNavigate()

const [newOtp,setNewOtp]= useState("");
function postResOtp(){
  var data = { email }
  setSeconds(59);
  axios.post("https://erp-edumate.herokuapp.com/api/user/sendotp/", data)
    .then((res) => {
      console.log(res);
      localStorage.setItem("otp",otp)
      setIncOtp("");
setNewOtp("OTP sent, check your email");
    })
    .catch((err) => {
      console.log(err);
      setIncOtp("");
      setNewOtp("OTP sent, check your email");
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
      <button id="resend-otp" onClick={postResOtp}>Resend OTP</button>
      <span id="timer">00:{seconds}</span>
      <span id="newOtp">{newOtp}</span>
        <button id="btn-continue" onClick={postotp}>CONTINUE</button>
        <span id="inOtp">{incOTP}</span>
      <OTPImg />
    </>
  );
}
export default OTP;
