import React, { useState, useEffect } from "react";
import Background from "../Background/Background";
import EmailImg from "./emailImg";
import './email.css'
function Email() {
  const [email, setEmail] = useState('')
  function handleemail(e) {
    setEmail(e.target.value)
  }
  const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  function checkemail(e) {
    e.preventDefault()
    if (rightemail.test(email)) {
            document.getElementById('wrongemail').style.display = "none";
            console.log('true');
        }
        else if(email){
            document.getElementById('wrongemail').style.display = "block";
        }
  }
  return (
    <>
      <h1 className="BgHead">Forgot your Password ?</h1>
      <p>We’ll send you a One Time Password on this email.</p>
      <input type="text" id='input-box' placeholder='Enter your email' value={email} onChange={handleemail} /><br />
      <span id='wrongemail'>Please enter a valid email id</span>
      <button id="resend-otp"></button>
      <button id="btn-continue" onClick={checkemail}>CONTINUE</button>
      <EmailImg />
      
    </>
  );
}
export default Email;
