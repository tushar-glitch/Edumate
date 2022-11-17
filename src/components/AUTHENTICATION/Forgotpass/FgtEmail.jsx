import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Background from "../Background/Background";
import EmailImg from "./emailImg";
import "./FgtEmail.css";
import EmailIcon from "./emailIcon";
import axios from "axios";
function FgtEmail() {
  const [email, setEmail] = useState("");
  function handleemail(e) {
    setEmail(e.target.value);
  }
  const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const[ckEmail,setCkEmail] = useState(false);
  useEffect(()=> {
    if (rightemail.test(email)) {
      document.getElementById("wrongemail").style.display = "none";
      console.log("true");
      setCkEmail(true);
    } else if (email) {
      document.getElementById("wrongemail").style.display = "block";
    }
  },[email]);
const [emValid,setEmValid] = useState("");
const [loadBool,setLoadBool] = useState(false);
const [navigateOtp,setNavigateOtp] = useState(false);
const navigate = useNavigate();
function postemail() {

  console.log("ahgfj");
  if(ckEmail){
    setLoadBool(true);
  axios.post("https://erp-edumate.herokuapp.com/api/user/sendotp/", {email})
    .then((res) => {
      toast.success("OTP sent successfully",{
        position: "top-center",
    background:"none"
      })
      console.log(res.data);
      navigate("/otp")
      localStorage.setItem("email", email);
      setNavigateOtp(true);
      sessionStorage.setItem("NavigateOtp",navigateOtp)
      setLoadBool(false);
      // {value2?<Navigate to="/otp" />:null}
      navigate("/otp")
    })
    
    .catch((err) => {
      toast.error(err.response.data.msg+" "+email,{
        position: "top-center",
    background:"none"
      })
      console.log(err);
      setLoadBool(false);
    })
}
else
{
  document.getElementById("wrongemail").style.display = "block";
}
}
useEffect(()=>{
  if(loadBool)
  document.body.style.opacity="0.5"
  else
  document.body.style.opacity="1"
},[loadBool])
  return (
    <div className="AUTHENTICATION">
      <Background />
      <h1 className="BgHead" id="Forgot">Forgot your Password ?</h1>
      <h1 id="bghead" >Forgot Password ?</h1>
      <p id="pwdHead">We’ll send you a One Time Password on this email.</p>
      <input
        type="text"
        id="inputBox"
        placeholder="Enter your email"
        value={email}
        onChange={handleemail}
      />
      <EmailIcon />
      <br />
      <span id="wrongemail">Please enter a valid email id</span>
      <button id="resend-otp"></button>
      <button id="btnContinue" onClick={postemail}>
          CONTINUE
        </button>
        <span id="emailValid">{emValid}</span>
      <EmailImg />
      {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
      <ToastContainer />
    </div>
  );
}
export default FgtEmail;

