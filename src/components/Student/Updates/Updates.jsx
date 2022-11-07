import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import updateImage from "./updateImage.svg";
import "./update.css";
import UpdateCard from "./updateCard";
import axios from "axios";
 function Updates(){
const accessToken = sessionStorage.getItem("access token");
console.log(accessToken);
const config = {
    headers:{
       Authorization: `Bearer ${accessToken}`
    }
 }
 const [updateTitle,setUpdateObject]=useState({});
const [updateCdArr,setUpdateCdArr]=useState([]);
useEffect(()=>{
    axios.get("https://erp-edumate.herokuapp.com/api/user/updatesection/10/",config).
    then((res)=>{
        console.log(res.data[0]);
        setUpdateCdArr(res.data[0]);
        // updateCdArr.push_back()
    })
    .catch((err)=>{
        console.log(err);
    })
},[])
function CreateUpdateCard(updateCdArr){
    return (
    <UpdateCard title={updateCdArr.title} desc={updateCdArr.description} />
    )
}
    return <>
        <h1 className="update">Dashboard : Updates</h1>
        <div className="updateWhiteDiv">
            <h1 className="updateGreyRow">Updates</h1>
            <div className="UpdateCardCall">
    {updateCdArr.map(CreateUpdateCard)}
</div>
            {/* <img id="updateImage" src={updateImage} alt="update" /> */}
        </div>
    </>
 }
 export default Updates;