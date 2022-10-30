import React, { useEffect, useState } from "react";
import axios from "axios";
import Background from "../Background/Background";
import "./Form-login.css";
import EmailIMG from "./email-icon";
import LockIMG from "./LockImg";
import { Link } from "react-router-dom";
import Loginimg from "./loginImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
  const Formlogin = () => {
  const [userID, setuserID] = useState("");
  const [password, setPassword] = useState("");
  function handleuserID(e) {
    setuserID(e.target.value);
  }
  function handlepass(e) {
    setPassword(e.target.value);
  }
  const [show, setShow] = useState(false);
  function showHide() {
    setShow(!show);
  }
  var isnum = /^\d+$/;
  const [iscorrectpass, setIsCorrectPass] = useState(false);
  const [iscorrectid, setIsCorrectId] = useState(false);
  const rightpass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  useEffect(() => {
    if (rightpass.test(password)) {
      document.getElementById("wrongpass").style.display = "none";
      // document.getElementById("fgtPwd").style.bottom = "1000";
      document.getElementById("btn-submit").style.top = "500";
      console.log("true");
      setIsCorrectPass(true);
    } else if (password) {
      document.getElementById("wrongpass").style.display = "block";
      setIsCorrectPass(false);
    }
  }, [password]);
  useEffect(() => {
    if (isnum.test(userID)) {
      document.getElementById("wrongid").style.display = "none";
      console.log("true");
      setIsCorrectId(true);
    } else if (userID) {
      document.getElementById("wrongid").style.display = "block";
      setIsCorrectId(false);
    }
  }, [userID]);
  const [credentials, setCredentials] = useState("");
  var data = { userID, password };
  function postdata() {
    if (iscorrectid && iscorrectpass) {
      axios
        .post("https://erp-edumate.herokuapp.com/api/user/login/", data)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          if (localStorage.getItem("token")) alert("Login successfull");
        })
        .catch((err) => {
          console.log(err);
          setCredentials("Invalid credentials.Please check your User Id or Password");
        });
    }
    else {
      document.getElementById("wrongid").style.display = "block";
      document.getElementById("wrongpass").style.display = "block";
      setCredentials("")
    }
  }
  return (
    <div>
      <Background />
      <h5 id="user-id">User id</h5>
      <EmailIMG />
      <input
        type="text"
        id="input-box1"
        placeholder="Enter your username"
        onChange={handleuserID}
        value={userID}
        required
      />
      <span id="wrongid">Incorrect userId. Please try again.</span>
      <Link to="/fgtEmail"><span id="fgtPwd">Forgot Password ?</span></Link>
      <h5 id="password">Password</h5>
      <LockIMG />
      <h1 id="heading">&emsp;Welcome to Edumate</h1>
      <input
        type={show ? "text" : "password"}
        id="input-box2"
        placeholder="Enter your password"
        onChange={handlepass}
        value={password}
      />
      {show ? (
        <FontAwesomeIcon icon={faEye} id="eye" onClick={showHide} />
      ) : (
        <FontAwesomeIcon icon={faEyeSlash} id="eye" onClick={showHide} />
      )}
      <span id="wrongpass">Invalid Password format. The password should atleast contain 1 uppercase 1 lowercase 1 number 1 special digit character and must have length greater than equal to 8.</span>
      <button id="btn-submit" type="submit" onClick={postdata}>
        LOGIN
      </button>
      <span id="credential">{credentials}</span>
      <Loginimg />
    </div>
  );
};

export default Formlogin;
