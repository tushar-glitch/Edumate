import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import updateImage from "./updateImage.svg";
import "./update.css";
import UpdateCard from "./updateCard";
import axios from "axios";
import Navbar from "../../utils/Navbar/Navbar";
 function Updates(){
const accessToken = sessionStorage.getItem("access token");
console.log(accessToken);
const config = {
    headers:{
       Authorization: `Bearer ${accessToken}`
    }
 }
const [updateCdArr,setUpdateCdArr]=useState([]);
useEffect(()=>{
    axios.get("https://erp-edumate.herokuapp.com/api/user/updatesection/0/",config).
    then((res)=>{
        console.log(res.data[0]);
        setUpdateCdArr(res.data[0]);
    })
    .catch((err)=>{
        console.log(err);
    })
},[])
// const [imageShow,setImageShow] = useState(false);
useEffect(()=>{
    if(updateCdArr.length==0){
        document.getElementById("updateImage").style.display = "block";
        document.getElementById("imageDiv").style.height = "400px";
        document.getElementById("noUpdate").innerHTML="No Updates";
    }
},[updateCdArr])
function CreateUpdateCard(updateCdArr){
    return (
    <UpdateCard title={updateCdArr.title} desc={updateCdArr.description} />
    )
}
    return <>
    <Navbar />
        <h1 className="update">Dashboard : Updates</h1>
        <div className="updateWhiteDiv" id="imageDiv">
            <h1 className="updateGreyRow" id="noUpdate">Updates</h1>
            <div className="UpdateCardCall">
    {updateCdArr.map(CreateUpdateCard)}
</div>

<img id="updateImage" src={updateImage} alt="update" />
        </div>
    </>
 }
 export default Updates;                  