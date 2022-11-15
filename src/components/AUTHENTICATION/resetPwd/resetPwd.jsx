import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Background from "../Background/Background";
import ResetImg from "./resPwdImg";
import {Link, useNavigate} from "react-router-dom";
import "./resetPwd.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as ReactBootStrap from "react-bootstrap";

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
setIsPass(true)
      console.log("true");
    } else if (pass) {
      document.getElementById("wrongpass1").style.display = "block";
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
const [loadBool,setLoadBool] = useState(false);
const [navRstToLogin, setNavRstToLogin] = useState(false)
  function rstPassword(){
   
    var email = localStorage.getItem("email")
    console.log(email);
    var otp = localStorage.getItem("otp");
    var data={email,otp,password:pass,confirmpassword:Cpass};
      if (isPass && isCPass && pass===Cpass) {
        setLoadBool(true)
        axios
          .post("https://erp-edumate.herokuapp.com/api/user/changepassword/",data)
          .then((res) => {
            console.log(res.data);
            toast.success(res.data.msg,{
              position: "top-center",
          background:"none"
            })
            setNavRstToLogin(true)
            sessionStorage.setItem("Nav_rst_Login",navRstToLogin)
            setLoadBool(false)
            sessionStorage.setItem("previous_password",Cpass)
            navigate("/");
            localStorage.clear();
          })
          .catch((err) => {
            console.log(err);
            toast.error(err.response.data.msg,{
              position: "top-center",
          background:"none"
            })
            setLoadBool(false)
          });
      }
      else{
          document.getElementById("passMatch").style.display = "block";
      }
    }
    useEffect(()=>{
      if(loadBool)
      document.body.style.opacity="0.5"
      else
      document.body.style.opacity="1"
    },[loadBool])
  return (
    <>
    <div className="AUTHENTICATION">
      <Background />
      <h1 className="BgHead" id="RESET">&emsp;&emsp;Reset Password</h1>
      <p id="new-pass">New Password</p>
      <input
        type={show1?"text":"password"}
        id="new-pass-input"
        placeholder="New Password"
        onChange={handlepass}
        value={pass}
      />
        <span id="wrongpass1">Password must be 1 uppercase 1 lowercase 1 number 1 special digit character and 8 or more characters </span>
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
      {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
      <ToastContainer />
      </div>
    </>
  );
}
export default ResetPwd;
