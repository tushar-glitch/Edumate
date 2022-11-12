import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../Navbar/Navbar';
import './changepass.css'
// import changepass from '../../Assests/Images/changepass.png'
// import changepass from "../Assests/Images/changepass.png";
import changepass from "../../Assests/Images/changepass.png"
import * as ReactBootStrap from "react-bootstrap";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Changepass = () => {
    const [pass, setPass] = useState("");
    function handlepass(e) {
      setPass(e.target.value);
    }
    const [Cpass, setCPass] = useState("");
    function handleCfmPass(e) {
      setCPass(e.target.value);
    }
    const [prevPwd, setPrevPwd] = useState("");
    function handlePrevPass(e){
      setPrevPwd(e.target.value)
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
  const [passMsg,setPassMsg] = useState("");
  const rightpass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  useEffect(() => {
    if (rightpass.test(pass)) {
      document.getElementById("chngWrongpass1").style.display = "none";
setIsPass(true)
      console.log("true");
    } else if (pass) {
      document.getElementById("chngWrongpass1").style.display = "block";
    }
  }, [pass]);
  useEffect(() => {
    if (rightpass.test(pass)) {
      document.getElementById("chngWrongpass2").style.display = "none";
      setIsCPass(true);
    } else if (pass) {
      document.getElementById("chngWrongpass2").style.display = "block";
    }
  }, [Cpass]);
  const accessToken = sessionStorage.getItem("access token");
  console.log(accessToken);
  const config = {
     headers:{
        Authorization: `Bearer ${accessToken}`
     }
  }
  const [pwdMsg,setPwdMsg] = useState("");
  const [navigatTo,setNavigateTo] = useState(false);
  const [loadBool,setLoadBool] = useState(false)
function handleUpdatePassword(){
    // var prevpassword= sessionStorage.getItem("previous_password");
    var data ={
        prevpassword:prevPwd,
        newpassword:pass,
        confirmpassword:Cpass
    }
    setLoadBool(true)
    if (isPass && isCPass && pass===Cpass) {
        axios.post("https://erp-edumate.herokuapp.com/api/user/updatepassword/",data,config).then((res)=>{
            console.log(res);
            setPwdMsg(res.data.msg)
            setNavigateTo(true);
            setLoadBool(false)
        }).catch((err)=>{
            console.log(err);
            setPwdMsg(err.response.data.msg)
            setLoadBool(false)
            console.log(pwdMsg);
        })
}
else{
    // document.getElementById("chngWrongPass2").style.display = "block";
}
}
const navigate= useNavigate();
useEffect(()=>{
  if(navigatTo)
  navigate("/")
},[navigatTo])
useEffect(()=>{
  if(loadBool)
  document.body.style.opacity="0.5"
  else
  document.body.style.opacity="1"
},[loadBool])
    return (
        <>
            <Navbar />
            <div className="updateWhiteDiv" id='updatediv'>
                {/* <div id="changepassdiv"></div> */}
                <h1 className="updateGreyRow">Change Password</h1>
                <span id="pre_pass">Previous Password</span>
                <input type="text" id="input_pre_pass" value={prevPwd} onChange={handlePrevPass}/>
                <span id="new_pass">New Password</span>
                <input type={show1?"text":"password"} id="input_new_pass" value={pass} onChange={handlepass} />
                <span id="chngWrongpass1">Password must be 1 uppercase 1 lowercase 1 number 1 special digit character and 8 or more characters </span>
                <span id="con_new_pass">Confirm New Password</span>
                <input type={show2?"text":"password"} id="input_con_new_pass" value={Cpass} onChange={handleCfmPass}/>
                {show1 ? (
            <FontAwesomeIcon icon={faEye} id="cgPwdEye1" onClick={showHide1} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} id="cgPwdEye1" onClick={showHide1} />
          )}
          {show2 ? (
            <FontAwesomeIcon icon={faEye} id="cgPwdEye2" onClick={showHide2} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} id="cgPwdEye2" onClick={showHide2} />
          )}
                <span id="chngWrongpass2">Passwords do not match</span>
                <button id="change_pass" onClick={handleUpdatePassword}>Confirm New Password</button>
                <span id="chngpassNew">{pwdMsg}</span>
                <span id="pwdMsg">{passMsg}</span>
                <img src={changepass} id='changepass-img' />
            </div>
            {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
        </>
    )
}

export default Changepass
