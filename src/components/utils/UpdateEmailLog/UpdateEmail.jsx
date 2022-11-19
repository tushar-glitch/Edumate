import axios from "axios";
import React from "react";
import { useState , useEffect} from "react";
import "./UpdateEmail.css";
import updateEmailImg from "./updateEmailImg.svg";
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
function UpdateEmail() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState('')
    const userLId = sessionStorage.getItem("LoggedInUserId")
    function handleotp(e) {
        setOtp(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    const [accessToken, setAccessToken] = useState("");
    useEffect(()=>{
        // {userLId==2?setAccessToken(sessionStorage.getItem("access token")):null}
        // {userLId==1? setAccessToken(sessionStorage.getItem("Faculty_access token")):null}
        // {userLId==9?setAccessToken(sessionStorage.getItem("Admin_access_token")):null}
    
    },[])
    var token = {userLId}
   
    // const accessToken = {userId==2?(sessionStorage.getItem("access token")):null}
    console.log(accessToken);
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    const [emailMsg, setEmailMsg] = useState("");
const [loadBool,setLoadBool] = useState(false)
    function handleUpdateEmail() {
        setLoadBool(true)
        console.log(email);
        axios.post("https://erp-edumate.herokuapp.com/api/user/updateemail/", {
            email
        }, config).then((res) => {
            console.log(res);
            setEmailMsg(res.data);
            setLoadBool(false)
            // if (res.status == 200) {
            //     console.log("asdfsdf");
                document.getElementById('update_email_otp_input').style.display = "block"
                document.getElementById('update_email_otp_btn').style.display = "block"
                document.getElementById('send_otp_info').style.display = "block"
            // }
        }).catch((err) => {
            console.log(err);
            setLoadBool(false)
        })
    }
    function checkotp() {
        axios.put("https://erp-edumate.herokuapp.com/api/user/updateemail/", { email,otp }, config)
            .then((res) => {
                console.log(res);
                if (res.status == 200) {
                    navigate('/')
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(()=>{
        if(loadBool)
        document.body.style.opacity="0.5"
        else
        document.body.style.opacity="1"
      },[loadBool])
    return <>
        <Navbar />
        {/* <div className="updateWhiteDiv" id="UpdateEmailDiv"> */}
        <div className="CHNGEMAIL">
            <h1 className="updateGreyRow">Email Address</h1>
            <h1 className="updateEmail">Email Address</h1>
            <input type="text" className="emailInput" value={email} onChange={handleEmail}></input>
            {/* <img src={updateEmailImg} className="updateEmailImg" /> */}
            <button className="emailButton" onClick={handleUpdateEmail}>Done</button>
            {/* <p className="emailMsgShow">{emailMsg}</p> */}
            {/* <input type="text" id="fieldOtp" value={otp} onChange={handleOtp}></input> */}
            <div id="send_otp_info">Enter otp sent to example@gmail.com</div>
            <input type="text" id="update_email_otp_input" onChange={handleotp}/>
            <button id="update_email_otp_btn" onClick={checkotp}>SEND</button>
        </div>
        {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
    </>
}
export default UpdateEmail;