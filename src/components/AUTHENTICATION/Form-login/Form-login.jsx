import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Background from "../Background/Background";
import "./Form-login.css";
import EmailIMG from "./email-icon";
import LockIMG from "./LockImg";
import { Link, useNavigate } from "react-router-dom";
import Loginimg from "./loginImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as ReactBootStrap from "react-bootstrap";
import Instance from "../../utils/axiosInterceptors";
// import instance from "../API";
// import useRefreshToken from "../refreshToken";
// import axiosInstance from "../utils/axiosInstance";

const Formlogin = () => {
  sessionStorage.clear();
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
  const [iscorrectid, setIsCorrectId] = useState(false);
  const [isCorrectPwd, setIsCorrectPwd] = useState(false);

  useEffect(() => {
    if (isnum.test(userID)) {
      document.getElementById("wrongid").style.display = "none";
      setIsCorrectId(true);
    } else if (userID) {
      document.getElementById("wrongid").style.display = "block";
      setIsCorrectId(false);
    }
  }, [userID]);

  useEffect(()=>{
if(password){
  document.getElementById("wrongPassLogin").style.display="block";
  setIsCorrectPwd(false);
}
else if(!password)
{
  document.getElementById("wrongPassLogin").style.display="none";
  setIsCorrectPwd(true);
}
  },[password])
  const [credentials, setCredentials] = useState("");
  var data = { userID, password };
  const navigate = useNavigate();
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
const [loadBool,setLoadBool] = useState(false);
const [playLoad, setPlayLoad] = useState(false);

const [routeToLogin ,setRouteToLogin]= useState(false);
const userIdFirstDigit = String(userID)[0];
 function postdata() {
  
  console.log(playLoad)
  setLoadBool(!loadBool);
    if (iscorrectid) {
      setPlayLoad(!playLoad)
      setLoadBool(true)
    axios
        .post("https://erp-edumate.herokuapp.com/api/user/login/", data)
         .then((res) => {
          toast.success("Login Succcessful",{
            position: "top-center",
        background:"none"
          })
          console.log("dsbjh")
          console.log(res);
            //  window.location.reload();
          setLoadBool(false);
         console.log(loadBool)
          const accessToken = res.data.token.access;
          const refreshToken = res.data.token.refresh;
          console.log(accessToken);
          console.log(refreshToken);

          if (accessToken && refreshToken) {
            toast.success("Login Succcessful",{
              position: "top-center",
            })
            storeTokenData(accessToken, refreshToken);
setRouteToLogin(true);
console.log(routeToLogin)
sessionStorage.setItem("Route_to_login",routeToLogin);
            console.log(userIdFirstDigit)
            sessionStorage.setItem("LoggedInUserId" ,userIdFirstDigit)
            sessionStorage.setItem("UserIdLogger",userID);
            sessionStorage.setItem("User_name",res.data.Username)
            console.log(res.data.Username)
          
            {if(userIdFirstDigit==1){
           
              navigate("/facDashboard")
              console.log("aDBHMASHF");
              sessionStorage.setItem("Faculty_userId",userID)
              sessionStorage.setItem("Faculty_access_token", accessToken);
              console.log(accessToken)
            }
            if(userIdFirstDigit==2)
            {
              // window.location.reload();
              navigate("/stu_dashboard")
              sessionStorage.setItem("Student_userId",userID)
              sessionStorage.setItem("access token", accessToken);
              console.log(accessToken)
            }
          else if(userIdFirstDigit==9){
            // window.location.reload();
            navigate("/admin_dashboard")
            console.log("aDBHMASHF");
            sessionStorage.setItem("Admin_userId",userID)
            sessionStorage.setItem("Admin_access_token", accessToken)
            console.log(accessToken)
          }
       };
      }
        })
        .catch((err) => {
          // console.log(err.response.data.errors.non_field_errors)
          toast.error("UserID or Password is not Valid",{
            position: "top-center",
          })
          console.log(err);
          console.log("dsbjh")
          setLoadBool(false);
          console.log(loadBool)
          // setCredentials("Invalid credentials.Please check your User Id or Password");
        });
    }
      else {
        setLoadBool(false)
        console.log("dsbjh")
      document.getElementById("wrongid").style.display = "block";
      document.getElementById("wrongPassLogin").style.display = "block";
      setCredentials("")
    }
  }
localStorage.removeItem("expiry time");
  function storeTokenData(accessToken, refreshToken) {
    sessionStorage.setItem("access token", accessToken);
    sessionStorage.setItem("refresh token", refreshToken);
  }
  useEffect(()=>{
    if(loadBool)
    document.body.style.opacity="0.5"
    else
    document.body.style.opacity="1"
  },[loadBool])

/*Reset Pwd to Login*/

  const pwdToLogin=sessionStorage.getItem("NavToLogin");

  useEffect(()=>{
   if(pwdToLogin){
    toast.success("Password has been changed Successfuly !!",{
      position: "top-center",
  background:"none"
    })
    console.log("ddsvbmhcx")
  }
  },[pwdToLogin])
/**/ 
  return (
 
    <div className="AUTHENTICATION">
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
      <span id="wrongPassLogin">Please fill out this field</span>
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
      {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}

      <ToastContainer />
     {/* {loadBool?navigate("/loadingScreen"):null} */}
    </div>
  );
};

export default Formlogin;
