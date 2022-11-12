
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../../Student/Updates/update.css";
import "./Fupdate.css";
import updateImage from "../../Student/Updates/updateImage.svg";
import UpdateCard from "../../Student/Updates/updateCard";
import axios from "axios";
import Navbar from "../../utils/Navbar/Navbar";
import * as ReactBootStrap from "react-bootstrap";
 function FUpdate(){
const facAccessToken = sessionStorage.getItem("Faculty_access_token");
console.log(facAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${facAccessToken}`
    }
 }

const [updateFCdArr,setUpdateFCdArr]=useState([]);
const [loadBool,setLoadBool] = useState(false)
useEffect(()=>{
    setLoadBool(true)
    axios.get("https://erp-edumate.herokuapp.com/api/user/updatesection/0/",config).
    then((res)=>{
        setLoadBool(false)
        console.log(res.data[0]);
        setUpdateFCdArr(res.data[0]);
    })
    .catch((err)=>{
        setLoadBool(false)
        console.log(err);
    })
},[])
useEffect(()=>{
    if(updateFCdArr.length==0){
        document.getElementById("updateImage").style.display = "block";
        // document.getElementById("imageFacDiv").style.height = "400px";
        document.getElementById("noUpdate").innerHTML="No Updates";
    }
    else{
        document.getElementById("updateImage").style.display = "none";
        // document.getElementById("imageDiv").style.height = "400px";
        document.getElementById("noUpdate").innerHTML="Updates";
    }
},[updateFCdArr])
function CreateUpdateCard(updateFCdArr){
    return (
    <UpdateCard title={updateFCdArr.title} desc={updateFCdArr.description} />
    )
}
useEffect(()=>{
    if(loadBool)
    document.body.style.opacity="0.5"
    else
    document.body.style.opacity="1"
  },[loadBool])
    return <>
    <Navbar />
        <h1 className="update">Dashboard : Updates</h1>
        <div className="updateFacDiv">
            <h1 className="updateFacRow" id="noUpdate">Updates</h1>
            <div className="UpdateFacCardCall">
    {updateFCdArr.map(CreateUpdateCard)}
</div>
            <img id="updateImage" src={updateImage} alt="update" />
        </div>
        {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
    </>
 }
 export default FUpdate;