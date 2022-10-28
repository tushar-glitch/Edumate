import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
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
  }, [email]);
  localStorage.removeItem("email")
      localStorage.setItem("email", email);
const [verEmail,setVerEmail] = useState(false);
function postemail() {
  if(ckEmail){
  axios.post("https://erp-edumate.herokuapp.com/api/user/sendotp/", {email})
    .then((res) => {
      console.log(res.data);
      localStorage.removeItem("email")
      localStorage.setItem("email", email);
      setVerEmail(true);
    })
    .catch((err) => {
      console.log(err);
      // document.getElementById("wrongemail").style.display = "block";
      // localStorage.setItem("email","");
    })
    // if(res.status==404)
    // document.getElementById("wrongemail").style.display = "block";
}
else
{
  document.getElementById("wrongemail").style.display = "block";
}
}
  return (
    <div>
      <Background />
      <h1 className="BgHead">Forgot your Password ?</h1>
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
      {ckEmail?(<Link to="/otp" >
        <button id="btnContinue" onClick={postemail}>
          CONTINUE
        </button>
      </Link>):(<Link to="/fgtEmail" >
        <button id="btnContinue" onClick={postemail}>
          CONTINUE
        </button>
      </Link>)}
      <EmailImg />
    </div>
  );
}
export default FgtEmail;
