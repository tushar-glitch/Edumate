import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Background from "../Background/Background";
import OTPImg from "./otpImg";
import axios from "axios";
import "./otp.css";
function OTP() {
  const [otp, setOtp] = useState("");
  function handleotp(e) {
    setOtp(e.target.value);
  }
  const isnum = /^\d+$/;
  const [seconds, setSeconds] = useState(59);
  // const [minutes, setMinutes] = useState(0)

  useEffect(() => {
   const timer=
    seconds>0 && setInterval(() => {
      setSeconds(seconds-1)
    }, 1000);
    if (seconds <= 0) {
      document.getElementById('resend-otp').disabled = false;
    }
    return () => clearInterval(timer);
    
  },[seconds]);

  let email = localStorage.getItem("email")
  const [incOTP,setIncOtp] = useState("");
  const [loadBool,setLoadBool] = useState(false);
  const navigate = useNavigate();
  function postotp(){
    setLoadBool(true);
    console.log(email);
    var data = { email, otp }
    axios.post("https://erp-edumate.herokuapp.com/api/user/verifyotp/", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("otp",otp)
        setNavigateOtpToPwd(true);
        sessionStorage.setItem("NavigatePassword",navigateOtpToPwd)
        navigate("/rstPwd");
        setLoadBool(false)
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg,{
          position: "top-center",
      background:"none"
        })
        setLoadBool(false)
        setNavigateOtpToPwd(false);
      })
}
const [newOtp,setNewOtp]= useState("");
const [navigateOtpToPwd,setNavigateOtpToPwd] = useState(false);
function postResOtp(){
  setLoadBool(true);
  localStorage.removeItem("otp");
  var data = { email }
  setSeconds(59);
  axios.post("https://erp-edumate.herokuapp.com/api/user/sendotp/", data)
    .then((res) => {
      console.log(res);
      toast.success("OTP sent successfully on "+email,{
        position: "top-center",
    background:"none"
      })
      localStorage.setItem("otp",otp)
      setLoadBool(false);
      setNavigateOtpToPwd(true);
      sessionStorage.setItem("NavigatePassword",navigateOtpToPwd)
      // navigate("/rstPwd");
    })
    .catch((err) => {
      console.log(err);
      toast.error(err.response.data.msg+" "+email,{
        position: "top-center",
    background:"none"
      })
      setLoadBool(false);
      setNavigateOtpToPwd(false);
    })
}
useEffect(()=>{
  if(loadBool)
  document.body.style.opacity="0.5"
  else
  document.body.style.opacity="1"
},[loadBool])

useEffect(()=>{
  toast.success("OTP sent successfully on "+email,{
    position: "top-center",
background:"none"
  })
},[])
  return (
    <>
    <div className="AUTHENTICATION">
      <Background />
      <h1 className="BgHead" id="OTPHead">&emsp;&ensp;OTP Verification </h1>
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
      <button id="resend-otp" onClick={postResOtp} disabled>Resend OTP</button>
      <span id="timer">00:{seconds}</span>
        <button id="btn-continue" onClick={postotp}>CONTINUE</button>
      <OTPImg />
      {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
      </div>
      <ToastContainer />
    </>
  );
}
export default OTP;