import axios from "axios";
import React from "react";
import { useState } from "react";
 import "./UpdateEmail.css";
 import updateEmailImg from "./updateEmailImg.svg";
function UpdateEmail(){
    const [email,setEmail] = useState("")
    function handleEmail(e){
        setEmail(e.target.value);
    }
    const accessToken = sessionStorage.getItem("access token");
    console.log(accessToken);
    const config = {
       headers:{
          Authorization: `Bearer ${accessToken}`
       }
    }
    const [emailMsg,setEmailMsg]= useState("");
    const [boolOTP,setBoolOtp] = useState(false);

    function handleUpdateEmail(){
        axios.post("https://erp-edumate.herokuapp.com/api/user/updateemail/",{
            email
        },config).then((res)=>{
            console.log(res);
            setEmailMsg(res.data.msg);
            setBoolOtp(true);
        }).catch((err)=>{
            console.log(err);
            setBoolOtp(false);
        })

        if(boolOTP)
        document.getElementById("fieldOtp").style.display="block";
        else
        document.getElementById("fieldOtp").style.display="none";
    }
return<>
    <div className="updateWhiteDiv" id="UpdateEmailDiv">
    <h1 className="updateGreyRow">Email Address</h1>
    <h1 className="updateEmail">Email Address</h1>
    <input type="text" className="emailInput" value={email} onChange={handleEmail}></input>
    <img src={updateEmailImg} className="updateEmailImg" />
    <button className="emailButton" onClick={handleUpdateEmail}>Done</button>
    <p className="emailMsgShow">{emailMsg}</p>
    {/* <input type="text" id="fieldOtp" value={otp} onChange={handleOtp}></input> */}


    </div>
</>
}
export default UpdateEmail;