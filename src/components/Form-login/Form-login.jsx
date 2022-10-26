import React, { useEffect, useState } from "react";
import axios from "axios";
import Background from "../Background/Background";
import "./Form-login.css";
import EmailIMG from "./email-icon";
import LockIMG from "./LockImg";
import { Link } from "react-router-dom";
import Loginimg from "./loginImg";
const Formlogin = () => {
  const [userID, setuserID] = useState("");
  const [password, setPassword] = useState("");
  function handleuserID(e) {
    setuserID(e.target.value);
  }
  function handlepass(e) {
    setPassword(e.target.value);
  }
  var isnum = /^\d+$/;
  const [iscorrectpass, setIsCorrectPass] = useState(false);
  const [iscorrectid, setIsCorrectId] = useState(false);
  const rightpass =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
  useEffect(() => {
    if (rightpass.test(password)) {
      document.getElementById("wrongpass").style.display = "none";
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
          alert("Login failed");
        });
    }
  }
  return (
    <div>
    <Background />
      <h5 id="user-id">User ID</h5>
      <EmailIMG />
      <input
        type="text"
        id="input-box1"
        placeholder="Enter your userId"
        onChange={handleuserID}
        value={userID}
      />
      <span id="wrongid">Incorrect userId. Please try again.</span>
      <Link to="/fgtEmail"><span id="fgtPwd">Forgot Password ?</span></Link>
      <h5 id="password">Password</h5>
      <LockIMG />
      <h1 id="heading">&emsp;Welcome to Edumate</h1>
      <input
        type="text"
        id="input-box2"
        placeholder="Enter your password"
        onChange={handlepass}
        value={password}
      />
      <p id="openEye"><i class="fa-solid fa-eye"></i></p>
      <span id="wrongpass">Invalid Password format</span>
      <button id="btn-submit" type="submit" onClick={postdata}>
        LOGIN
      </button>
      <Loginimg />
    </div>
  );
};

export default Formlogin;