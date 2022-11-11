import axios from "axios";
import React from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../../SideBar/sidebar";
import "./UpdateEmail.css";
import updateEmailImg from "./updateEmailImg.svg";
function UpdateEmail() {
    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState('')
    function handleotp(e) {
        setOtp(e.target.value)
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    const accessToken = sessionStorage.getItem("access token");
    console.log(accessToken);
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    const [emailMsg, setEmailMsg] = useState("");

    function handleUpdateEmail() {
        console.log(email);
        axios.post("https://erp-edumate.herokuapp.com/api/user/updateemail/", {
            email
        }, config).then((res) => {
            console.log(res);
            setEmailMsg(res.data);
            if (res.status == 200) {
                console.log("asdfsdf");
                document.getElementById('update_email_otp_input').style.display = "block"
                document.getElementById('update_email_otp_btn').style.display = "block"
                document.getElementById('send_otp_info').style.display = "block"
            }
        }).catch((err) => {
            console.log(err);
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
    return <>
        <Navbar />
        <SideBar/>
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
    </>
}
export default UpdateEmail;