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
import { useNavigate } from "react-router-dom";
import useRefreshToken from "../refreshToken";
const Formlogin = () => {
  const [userID, setuserID] = useState("");
  const [password, setPassword] = useState("");
  const refresh_call = useRefreshToken()
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
  const navigate = useNavigate();
  const [tokenApi, setTokenApi] = useState(false);

  const [timerToken, setTimerToken] = useState(240);
  const [timerStart, setTimerStart] = useState(false);

  useEffect(() => {
    // console.log("asjbds,");
    let intervalId = null;
    if (timerToken < 230) {
      setTimerToken(240)
      refresh_call()
    }
    console.log(timerStart);
    // if(timerStart){
    // console.log("asjbds,");
    intervalId = setInterval(() => {
      setTimerToken(timerToken - 1);
    }, 1000);
    return () => clearInterval(intervalId)
    // }
    
  }, [timerToken]);

  console.log(timerToken);
  
  sessionStorage.setItem("expiry time", timerToken);

  function postdata() {
    if (iscorrectid && iscorrectpass) {
      axios
        .post("https://erp-edumate.herokuapp.com/api/user/login/", data)
        .then((res) => {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          const accessToken = res.data.token.access;
          const refreshToken = res.data.token.refresh;
          console.log(accessToken);
          console.log(refreshToken);
          if (accessToken && refreshToken) {
            setTimerStart(true);
            storeTokenData(accessToken, refreshToken);
            setTokenApi(true);
            // axios.defaults.headers = {
            //   accesstoken: accessToken,
            //   refreshtoken: refreshToken
            // }
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
            // console.log(timerStart);
            // console.log(tokenApi);
            // navigate("/profile");
          }
          localStorage.setItem("access token:", res.data.token.access);
          console.log(tokenApi);
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

  function storeTokenData(accessToken, refreshToken) {
    sessionStorage.setItem("access token", accessToken);
    sessionStorage.setItem("refresh token", refreshToken);
  }
  return (
    <div className="AUTHENTICATION">
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
      <button id='test-btn' onClick={()=>refresh_call()}>Refresh</button>
      <span id="credential">{credentials}</span>
      <Loginimg />
    </div>
  );
};

export default Formlogin;
