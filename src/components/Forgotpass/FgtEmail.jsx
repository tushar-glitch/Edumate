import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Background from "../Background/Background";
import EmailImg from "./emailImg";
import "./FgtEmail.css";
import EmailIcon from "./emailIcon";
import axios from 'axios'
import perdata from '../test'
function FgtEmail() {
  const [email, setEmail] = useState("");
  function handleemail(e) {
    setEmail(e.target.value);
  }
  const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  function checkemail(e) {
    e.preventDefault();
    if (rightemail.test(email)) {
      document.getElementById("wrongemail").style.display = "none";
      console.log("true");
    } else if (email) {
      document.getElementById("wrongemail").style.display = "block";
    }
  }
  var data = {email}
  function postemail() {
    axios.post("https://erp-edumate.herokuapp.com/api/user/sendotp/", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    localStorage.setItem("email", email);
    // console.log(perdata);
  }
  // perdata = JSON.stringify(data);
  return (
    <div>
      <Background />
      <h1 className="BgHead">Forgot your Password ?</h1>
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
      <Link to="/otp">
        <button id="btnContinue" onClick={postemail}>
          CONTINUE
        </button>
      </Link>
      <EmailImg />
    </div>
  );
}
export default FgtEmail;
