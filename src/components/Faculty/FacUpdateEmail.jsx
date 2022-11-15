import axios from "axios";
import React from "react";
import { useState , useEffect} from "react";
import Navbar from "../utils/Navbar/Navbar";
// import "./UpdateEmail.css";
// import Sidebar from "../SideBar/sidebar"
import "../utils/UpdateEmailLog/UpdateEmail.css";
// import updateEmailImg from "./updateEmailImg.svg";
import * as ReactBootStrap from "react-bootstrap";
function FacUpdateEmail() {
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState('')
    const userLId = sessionStorage.getItem("LoggedInUserId")
    function handleotp(e) {
        setOtp(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    const FacAccessToken = sessionStorage.getItem("Faculty_access_token");
   console.log(FacAccessToken);
   const config = {
      headers:{
         Authorization: `Bearer ${FacAccessToken}`
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
            if (res.status == 200) {
                console.log("asdfsdf");
                document.getElementById('update_email_otp_input').style.display = "block"
                document.getElementById('update_email_otp_btn').style.display = "block"
                document.getElementById('send_otp_info').style.display = "block"
            }
        }).catch((err) => {
            console.log(err);
            setLoadBool(false)
        })
    }
    function checkotp() {
        axios.put("https://erp-edumate.herokuapp.com/api/user/updateemail/", { email,otp }, config)
            .then((res) => {
                console.log(res);
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
        {/* <SideBar/> */}
        <div className="updateWhiteDiv" id="UpdateEmailDiv">
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
export default FacUpdateEmail;