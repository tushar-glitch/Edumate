import axios from "axios";
import React from "react";
import { useState , useEffect} from "react";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "../utils/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { truncate } from "fs";
function StUpdateEmail() {
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState('')
    const userLId = sessionStorage.getItem("LoggedInUserId")
    function handleotp(e) {
        setOtp(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    const accessToken = sessionStorage.getItem("access token");
    console.log(accessToken);
    const config = {
       headers:{
          Authorization: `Bearer ${accessToken}`
       }
    }
    const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const[ckEmail,setCkEmail] = useState(false);
      useEffect(()=> {
        if (rightemail.test(email)) {
          document.getElementById("wrongUpdEmail").style.display = "none";
          console.log("true");
          setCkEmail(true);
        } else if (email) {
          document.getElementById("wrongUpdEmail").style.display = "block";
          setCkEmail(false)
        }
      },[email]);

      const [seconds, setSeconds] = useState(59);
      // const [minutes, setMinutes] = useState(0)
    
      useEffect(() => {
       const timer=
        seconds>0 && setInterval(() => {
          setSeconds(seconds-1)
        },1000);
        return ()=> clearInterval(timer);
      },[seconds]);

const [loadBool,setLoadBool] = useState(false)
    function handleUpdateEmail() {
        console.log(email);
        if(ckEmail){
            setLoadBool(true)
        axios.post("https://erp-edumate.herokuapp.com/api/user/updateemail/", {
            email
        }, config).then((res) => {
            toast.success(res.data.msg,{
                position: "top-center",
              })
            console.log(res);
            setLoadBool(false)
           
        }).catch((err) => {
            console.log(err);
            toast.error(err.response.data.msg,{
                position: "top-center",
              })
            setLoadBool(false)
        })
    }
    }
    function checkotp() {
        setLoadBool(true)
        axios.put("https://erp-edumate.herokuapp.com/api/user/updateemail/", { email,otp }, config)
            .then((res) => {
                toast.success(res.data.msg,{
                    position: "top-center",
                  })
                setLoadBool(false)
                console.log(res);
            })
            .catch((err) => {
                toast.error(err.response.data.msg,{
                    position: "top-center",
                  })
                setLoadBool(false)
                console.log(err);
            })
    }
    useEffect(()=>{
        if(loadBool)
        document.body.style.opacity="0.5"
        else
        document.body.style.opacity="1"
      },[loadBool])

     
    
     
    //   const navigate = useNavigate();
    // function postResendOtp(){
    //   setLoadBool(true);
    //   var data = { email }
    //   setSeconds(59);
    //   axios.post("https://erp-edumate.herokuapp.com/api/user/sendotp/", data)
    //     .then((res) => {
    //       console.log(res);
    //       toast.success("OTP sent successfully on "+email,{
    //         position: "top-center",
    //     background:"none"
    //       })
    //       localStorage.setItem("otp",otp)
    //       setLoadBool(false);
    //       setNavigateOtpToPwd(true);
    //       sessionStorage.setItem("NavigatePassword",navigateOtpToPwd)
    //       // navigate("/rstPwd");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       toast.error(err.response.data.msg+" "+email,{
    //         position: "top-center",
    //     background:"none"
    //       })
    //       setLoadBool(false);
    //       setNavigateOtpToPwd(false);
    //     })
    // }
    return <>
        <Navbar />
        <div className="CHNGEMAIL">
            <h1 className="updateGreyRow">Email Address</h1>
            <h1 className="updateEmail">Email Address</h1>
            <input type="text" className="emailInput" value={email} onChange={handleEmail}></input>
            <span id="wrongUpdEmail">Please enter a valid email id</span>
            {/* <img src={updateEmailImg} className="updateEmailImg" /> */}
            <button className="emailButton" onClick={handleUpdateEmail}>Done</button>
            {/* <p className="emailMsgShow">{emailMsg}</p> */}
            {/* <input type="text" id="fieldOtp" value={otp} onChange={handleOtp}></input> */}
            <div id="send_otp_info">Enter otp sent to {email}</div>
            <input type="text" id="update_email_otp_input" onChange={handleotp}/>
            {/* <span id="no-otp-recieved">Don’t recieve an OTP?</span>
      <button id="resend-otp" onClick={postResendOtp}>Resend OTP</button>
      <span id="timer">00:{seconds}</span> */}
            <button id="update_email_otp_btn" onClick={checkotp}>SEND</button>
        </div>
        {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
        <ToastContainer />
    </>
}
export default StUpdateEmail;