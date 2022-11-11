
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../../Student/Updates/update.css";
import updateImage from "../../Student/Updates/updateImage.svg";
import UpdateCard from "../../Student/Updates/updateCard";
import axios from "axios";
 function FUpdate(){
const facAccessToken = sessionStorage.getItem("Faculty_access_token");
console.log(facAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${facAccessToken}`
    }
 }

const [updateFCdArr,setUpdateFCdArr]=useState([]);
useEffect(()=>{
    axios.get("https://erp-edumate.herokuapp.com/api/user/updatesection/0/",config).
    then((res)=>{
        console.log(res.data[0]);
        setUpdateFCdArr(res.data[0]);
    })
    .catch((err)=>{
        console.log(err);
    })
},[])
useEffect(()=>{
    if(updateFCdArr.length==0){
        document.getElementById("updateImage").style.display = "block";
        document.getElementById("imageDiv").style.height = "400px";
        document.getElementById("noUpdate").innerHTML="No Updates";
    }
},[updateFCdArr])
function CreateUpdateCard(updateFCdArr){
    return (
    <UpdateCard title={updateFCdArr.title} desc={updateFCdArr.description} />
    )
}
    return <>
        <h1 className="update">Dashboard : Updates</h1>
        <div className="updateWhiteDiv"  id="imageDiv">
            <h1 className="updateGreyRow" id="noUpdate">Updates</h1>
            <div className="UpdateCardCall">
    {updateFCdArr.map(CreateUpdateCard)}
</div>
            <img id="updateImage" src={updateImage} alt="update" />
        </div>
    </>
 }
 export default FUpdate;