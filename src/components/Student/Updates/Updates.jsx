import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import updateImage from "./updateImage.svg";
import "./update.css";
import UpdateCard from "./updateCard";
import axios from "axios";
import Navbar from "../../utils/Navbar/Navbar";
import * as ReactBootStrap from "react-bootstrap";
 function Updates(){
const accessToken = sessionStorage.getItem("access token");
console.log(accessToken);
const config = {
    headers:{
       Authorization: `Bearer ${accessToken}`
    }
 }
 const [loadBool,setLoadBool] = useState(false)
const [updateCdArr,setUpdateCdArr]=useState([]);
useEffect(()=>{
    setLoadBool(true)
    axios.get("https://erp-edumate.herokuapp.com/api/user/updatesection/0/",config).
    then((res)=>{
        console.log(res.data[0]);
        setLoadBool(false)
        setUpdateCdArr(res.data[0]);
    })
    .catch((err)=>{
        setLoadBool(false)
        console.log(err);
    })
},[])
// const [imageShow,setImageShow] = useState(false);
useEffect(()=>{
    if(updateCdArr.length==0){
        document.getElementById("updateImage").style.display = "block";
        // document.getElementById("imageStUpdDiv").style.height = "400px";
        document.getElementById("noUpdate").innerHTML="No Updates";
    }
    else{
        document.getElementById("updateImage").style.display = "none";
        // document.getElementById("imageDiv").style.height = "400px";
        document.getElementById("noUpdate").innerHTML="Updates";
    }
},[updateCdArr])
function CreateUpdateCard(updateCdArr){
    return (
    <UpdateCard title={updateCdArr.title} desc={updateCdArr.description} />
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
        <div className="updateDivBlock">
<img id="updateImage" src={updateImage} alt="update" />
            <h1 className="stUpdRowS" id="noUpdate">Updates</h1>
            <div className="SUpdateCardCall">
    {updateCdArr.map(CreateUpdateCard)}
</div>

        </div>
        {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
    </>
 }
 export default Updates;                  