import React, { useState, useEffect } from "react";
import Background from "../Background/Background";
import ResetImg from "./resPwdImg";
import {Link, useNavigate} from "react-router-dom";
import "./resetPwd.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function ResetPwd() {
  const [pass, setPass] = useState("");
  function handlepass(e) {
    setPass(e.target.value);
  }
  const [Cpass, setCPass] = useState("");
  function handleCfmPass(e) {
    setCPass(e.target.value);
  }
  const [show1, setShow1] = useState(false);
  function showHide1() {
    setShow1(!show1);
  }
  const [show2, setShow2] = useState(false);
  function showHide2() {
    setShow2(!show2);
  }
  const [isPass, setIsPass] = useState(false);
  const [isCPass, setIsCPass] = useState(false);
  const rightpass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  useEffect(() => {
    if (rightpass.test(pass)) {
      document.getElementById("wrongpass1").style.display = "none";
      document.getElementById("confirm-pass").style.top = 348 +'px';
      document.getElementById("confirm-pass-input").style.top = 370 +'px';
      document.getElementById("pEye2").style.top = 383 +'px';
      document.getElementById("btn-reset").style.top = 470 +'px';
      document.getElementById("passMatch").style.top=412+'px';
setIsPass(true)
      console.log("true");
    } else if (pass) {
      document.getElementById("wrongpass1").style.display = "block";
      document.getElementById("confirm-pass").style.top = 371 +'px';
      document.getElementById("confirm-pass-input").style.top = 393 +'px';
      document.getElementById("pEye2").style.top = 406 +'px';
      document.getElementById("btn-reset").style.top = 490 +'px';
      document.getElementById("passMatch").style.top=438+'px';
    }
  }, [pass]);
  useEffect(() => {
    if (rightpass.test(pass)) {
      document.getElementById("passMatch").style.display = "none";
      setIsCPass(true);
      console.log("true");
    } else if (pass) {
      document.getElementById("passMatch").style.display = "block";
    }
  }, [Cpass]);
  const navigate = useNavigate();
const [passMsg,setPassMsg] = useState("");
  function rstPassword(){
    var email = localStorage.getItem("email")
    console.log(email);
    var otp = localStorage.getItem("otp");
    var data={email,otp,password:pass,confirmpassword:Cpass};
      if (isPass && isCPass && pass===Cpass) {
        axios
          .post("https://erp-edumate.herokuapp.com/api/user/changepassword/",data)
          .then((res) => {
            console.log(res.data);
            // confirm("Password changed");
            setPassMsg("Password changed")
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            setPassMsg("Password reset failed")
          });
      }
      else{
          document.getElementById("passMatch").style.display = "block";
      }
  }
  return (
    <>
    <div className="AUTHENTICATION">
      <Background />
      <h1 className="BgHead">&emsp;&emsp;Reset Password</h1>
      <p id="new-pass">New Password</p>
      <input
        type={show1?"text":"password"}
        id="new-pass-input"
        placeholder="New Password"
        onChange={handlepass}
        value={pass}
      />
        <span id="wrongpass1">Invalid Password format.</span>
      <p id="confirm-pass">Confirm Password</p>
      <input
        type={show2?"text":"password"}
        id="confirm-pass-input"
        placeholder="Confirm Password"
        onChange={handleCfmPass}
      />
       {show1 ? (
            <FontAwesomeIcon icon={faEye} id="pEye1" onClick={showHide1} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} id="pEye1" onClick={showHide1} />
          )}
          {show2 ? (
            <FontAwesomeIcon icon={faEye} id="pEye2" onClick={showHide2} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} id="pEye2" onClick={showHide2} />
          )}
       <span id="passMatch">Passwords do not match</span>
       <button id="btn-reset" onClick={rstPassword}>RESET PASSWORD</button>
       <span id="pwdMsg">{passMsg}</span>
      <ResetImg />
      </div>
    </>
  );
}
export default ResetPwd;
