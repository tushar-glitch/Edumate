import React, { useState, useEffect } from "react";
import Background from "../Background/Background";
import ResetImg from "./resPwdImg";
import {Link} from "react-router-dom";
import "./resetPwd.css";
import axios from "axios";

function ResetPwd() {
  const [pass, setPass] = useState("");
  function handlepass(e) {
    setPass(e.target.value);
  }
  const [Cpass, setCPass] = useState("");
  function handleCfmPass(e) {
    setCPass(e.target.value);
  }
  const [isPass, setIsPass] = useState(false);
  const [isCPass, setIsCPass] = useState(false);
  const rightpass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  useEffect(() => {
    if (rightpass.test(pass)) {
      document.getElementById("wrongpass").style.display = "none";
setIsPass(true)
      console.log("true");
    } else if (pass) {
      document.getElementById("wrongpass").style.display = "block";
    }
  }, [pass]);
  useEffect(() => {
    if (rightpass.test(pass)) {
      document.getElementById("wrongpass").style.display = "none";
      setIsCPass(true);
      console.log("true");
    } else if (pass) {
      document.getElementById("wrongpass").style.display = "block";
    }
  }, [Cpass]);
const [rdtLogin, setRdtLogin] = useState(false);
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
            setRdtLogin(true);
           alert("Password changed");
          })
          .catch((err) => {
            console.log(err);
            alert("Password is not changed, try it again");
          });
      }
      else{
          document.getElementById("wrongpass").style.display = "block";
      }
  }
  return (
    <>
      <Background />
      <h1 className="BgHead">&emsp;&emsp;Reset Password</h1>
      <p id="new-pass">New Password</p>
      <input
        type="text"
        id="new-pass-input"
        placeholder="New Password"
        onChange={handlepass}
        value={pass}
      />
      <span id="wrongpass">Invalid Password format</span>
      <p id="confirm-pass">Confirm Password</p>
      <input
        type="text"
        id="confirm-pass-input"
        placeholder="Confirm Password"
        onChange={handleCfmPass}
      />
      {rdtLogin?(<Link to="/">
      <button id="btn-reset" onClick={rstPassword}>RESET PASSWORD</button>
      </Link>):(<Link to="/rstPwd">
      <button id="btn-reset" onClick={rstPassword}>RESET PASSWORD</button>
       </Link>)}
      <ResetImg />
    </>
  );
}
export default ResetPwd;
