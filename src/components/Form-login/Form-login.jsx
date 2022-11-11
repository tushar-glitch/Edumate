import React, { useEffect, useState } from "react";
import axios from "axios";
import Background from "../Background/Background";
import "./Form-login.css";
import EmailIMG from "./email-icon";
import LockIMG from "./LockImg";
import { Link, useNavigate } from "react-router-dom";
import Loginimg from "./loginImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import instance from "../API";
import useRefreshToken from "../refreshToken";
import axiosInstance from "../utils/axiosInstance";
const Formlogin = () => {
  const [userID, setuserID] = useState("");
  const [password, setPassword] = useState("");
  // const refresh_call = useRefreshToken()
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
  const [iscorrectid, setIsCorrectId] = useState(false);
  
  useEffect(() => {
    if (isnum.test(userID)) {
      document.getElementById("wrongid").style.display = "none";
      setIsCorrectId(true);
    } else if (userID) {
      document.getElementById("wrongid").style.display = "block";
      setIsCorrectId(false);
    }
  }, [userID]);
  const [credentials, setCredentials] = useState("");
  var data = { userID, password };
  const navigate = useNavigate();
  localStorage.removeItem("protectedRouteKey");
  localStorage.removeItem("protRouteKey");
 
  // let postdata = async () => {
  //   if (iscorrectid) {
  //     let res = await axiosInstance.post('https://erp-edumate.herokuapp.com/api/user/login/',data)
  //       // .then((res) => {
  //         console.log(res.data);
  //         localStorage.setItem("token", res.data.token);
  //         const accessToken = res.data.token.access;
  //         const refreshToken = res.data.token.refresh;
  //         console.log(accessToken);
  //         console.log(refreshToken);
  //         if (accessToken && refreshToken) {
  //           setTimerStart(true);
  //           storeTokenData(accessToken, refreshToken);
  //           setTokenApi(true);
  //           // navigate("/profile");
  //           axios.defaults.headers = {
  //             accesstoken: accessToken,
  //             refreshtoken: refreshToken
  //           }
  //           axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  //           // console.log(timerStart);
  //           // console.log(tokenApi);
  //           // navigate("/profile");
  //         }
  //         localStorage.setItem("access token:", res.data.token.access);
  //         console.log(tokenApi);
  //       // })
  //       // .catch((err) => {
  //         // console.log(err);
  //       //   setCredentials("Invalid credentials.Please check your User Id or Password");
  //       // });
  //   }
  //     else {
  //     document.getElementById("wrongid").style.display = "block";
  //     setCredentials("")
  //   }
    
  // }
// // console.log(timerToken);
// sessionStorage.setItem("expiry time",timerToken);
/*LOADING SCREEN*/

const [loadingScreen , setLoadingScreen] = useState(false);
const [protectedRoute,setProtectedRoute] = useState(false);
const [bool,setBool] = useState(false);
// function postdataCheck(){
//   console.log("hsmv")
// if(!bool)
// setBool(true);
// else
// setBool(false);
// }
// useEffect(()=>{
//   console.log(loadingScreen)
// },[loadingScreen])
console.log(bool)
const userIdFirstDigit = String(userID)[0];
  async function postdata() {
    if (iscorrectid) {
       await axios
        .post("https://erp-edumate.herokuapp.com/api/user/login/", data)
         .then((res) => {
          console.log(res);
          setLoadingScreen(true);
          console.log(loadingScreen)
          const accessToken = res.data.token.access;
          const refreshToken = res.data.token.refresh;
          console.log(accessToken);
          console.log(refreshToken);
          if (accessToken && refreshToken) {
            // storeTokenData(accessToken, refreshToken);
            // {
              if (userIdFirstDigit == 1) {
              
              navigate("/facProfile")
              console.log("aDBHMASHF");
              sessionStorage.setItem("Faculty_access_token", accessToken);
            }
            else
            {
              navigate("/");
              sessionStorage.removeItem("Faculty_access_token")
              }
            // };
            
              if (userIdFirstDigit == 2) {
              console.log(userIdFirstDigit);
              navigate("/profile")
              sessionStorage.setItem("access token", accessToken);
            }
            else
            {
              navigate("/");
              sessionStorage.removeItem("access token")
            }
            if(userIdFirstDigit==9){
              // navigate("/facProfile")
              console.log("aDBHMASHF");
              sessionStorage.setItem("Admin_access_token", accessToken);
            }
            else
            {
              navigate("/");
              sessionStorage.removeItem("Admin_access_token")
            }
          }
          localStorage.setItem("access token:", res.data.token.access)
        })
        .catch((err) => {
          console.log(err);
          setCredentials("Invalid credentials.Please check your User Id or Password");
        });
    }
      else {
      document.getElementById("wrongid").style.display = "block";
      setCredentials("")
    }
  }
  // useEffect(()=>{
  //   if(bool)
  //   postdata();
  // },[bool])
  // console.log(loadingScreen)
// // console.log(timerToken);
// sessionStorage.setItem("expiry time",timerToken);


  // function postdata() {
  //   if (iscorrectid) {
  //      axios
  //       .post("https://erp-edumate.herokuapp.com/api/user/login/", data)
  //       .then((res) => {
  //         console.log(res);
  //         // localStorage.setItem("token", res.data.token);
  //         const accessToken = res.data.token.access;
  //         const refreshToken = res.data.token.refresh;
  //         console.log(accessToken);
  //         console.log(refreshToken);
  //         if (accessToken && refreshToken) {
  //           setProtectedRoute(true);
  //           console.log(protectedRoute);
  //           localStorage.setItem("protRouteKey",protectedRoute);
  //           storeTokenData(accessToken, refreshToken);
  //           {userIdFirstDigit==2?navigate("/profile"):navigate("/")};
  //           // {userIdFirstDigit==1?navi}
            
  //           // axios.defaults.headers = {
  //           //   accesstoken: accessToken,
  //           //   refreshtoken: refreshToken
  //           // }
  //           // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  //           // console.log(timerStart);
  //           // console.log(tokenApi);
  //           // navigate("/profile");
  //         }
  //         // localStorage.setItem("access token:", res.data.token.access);
  //         // console.log(tokenApi);
  //       })
  //       .catch((err) => {
  //         setProtectedRoute(false);
  //         localStorage.removeItem("protRouteKey");
  //         console.log(err);
  //         setCredentials("Invalid credentials.Please check your User Id or Password");
  //       });
  //   }
  //   else {
  //     document.getElementById("wrongid").style.display = "block";
  //     setCredentials("")
  //   }
  // }
  // useEffect(()=>{
  //   setProtectedRoute(RouteKey);
  // },[RouteKey])
  // console.log(protectedRoute);
  // localStorage.setItem("protectedRouteKey",protectedRoute);

  function storeTokenData(accessToken, refreshToken) {
    sessionStorage.setItem("access token", accessToken);
    sessionStorage.setItem("refresh token", refreshToken);
  }
  return (
    <div className="AUTHENTICATION">
      <Background />
      <h5 id="user-id">User id</h5>
      <EmailIMG />
      {/* <p id="timerToken">{timerToken}</p> */}
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
      <button id="btn-submit" type="submit" onClick={postdata}>
        LOGIN
      </button>
      <span id="credential">{credentials}</span>
      <Loginimg />
    </div>
  );
};

export default Formlogin;
