import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Background from "../Background/Background";
import OTPImg from "./otpImg";
import axios from "axios";
import "./otp.css";
function OTP() {
  const [otp, setOtp] = useState("");
  const [isCorrectOtp,setIsCorrectOtp] = useState(false);
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
  let email = localStorage.getItem("email")
  const [ckOtp,setCkOtp] = useState(false);
  const [incOTP,setIncOtp] = useState("");
  const navigate = useNavigate();
  function postotp(){
    // if(isCorrectOtp){
    console.log(email);
    var data = { email, otp }
    axios.post("https://erp-edumate.herokuapp.com/api/user/verifyotp/", data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("otp",otp)
        setCkOtp(true);
        navigate("/rstPwd");
      })
      .catch((err) => {
        console.log(err);
        setIncOtp("Incorrect OTP");
      })
      console.log(otp);
  // }
}
  console.log(ckOtp);
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
      {/* {ckOtp?(<Link to="/rstPwd">
        <button id="btn-continue" onClick={postotp}>CONTINUE</button>
      </Link>):(<Link to="/otp">
        <button id="btn-continue" onClick={postotp}>CONTINUE</button>
      </Link>)} */}
        <button id="btn-continue" onClick={postotp}>CONTINUE</button>
        <span id="inOtp">{incOTP}</span>
      <OTPImg />
    </>
  );
}
export default OTP;
