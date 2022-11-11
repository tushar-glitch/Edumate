import React from "react";
import { useState , useEffect} from "react";
import axios from "axios";
import "../../Student/Updates/update.css";
import AUpdateCard from "./AUpdateCard";
import NewUpdateCard from "./makeNewUpdateAdmin";
import { useNavigate } from "react-router-dom";
function AUpdates(){
    const adminAccessToken = localStorage.getItem("Admin_access_token");
console.log(adminAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${adminAccessToken}`
    }
 }
 console.log(config);
 const [updateACdArr,setUpdateACdArr]=useState([]);
useEffect(()=>{
    axios.get("https://erp-edumate.herokuapp.com/api/user/updatesection/0/",config).
    then((res)=>{
        console.log(res)
        console.log(res.data[0]);
        setUpdateACdArr(res.data[0]);
        console.log(updateACdArr);
        localStorage.setItem("Admin_updates_array",JSON.stringify(updateACdArr))
    })
    .catch((err)=>{
        console.log(err);
    })
},[])
function handleDeleteUpdates(id,title,description){
    console.log(id);
    const url = `https://erp-edumate.herokuapp.com/api/user/updatesection/`;
    axios.delete((url+id),{
        headers:{
           Authorization: `Bearer ${adminAccessToken}`
        }
     })
    .then((res)=>
    console.log(res))
    .catch((err)=>{
        console.log(err)
    })
}
// delete={()=>handleDeleteUpdates(updateACdArr.id,updateACdArr.title,updateACdArr.description)}
function handleEditUpdates(editCardId,editCardTitle,editCardDescription){
    console.log(editCardId);
    localStorage.setItem("EditUpdatesId",editCardId);
    localStorage.setItem("EditUpdatesTitle",editCardTitle);
    localStorage.setItem("EditUpdatesDesc",editCardDescription);
    navigate("/editUpdates")
}

function CreateUpdateCard(updateACdArr){
    return (
    <AUpdateCard delete={()=>handleDeleteUpdates(updateACdArr.id,updateACdArr.title,updateACdArr.description)} edit={()=>handleEditUpdates(updateACdArr.id,updateACdArr.title,updateACdArr.description)} title={updateACdArr.title} desc={updateACdArr.description} />
    )
}
const navigate = useNavigate();
function createNewUpdate(){
navigate("/newUpdate");
}
   return <>
  <h1 className="update">Dashboard : Updates</h1>
        <div className="updateWhiteDiv" id="adminUpdatesDiv">
            <h1 className="updateGreyRow">Events</h1>
            <button className="updateNew" onClick={createNewUpdate}>New</button>
            <div className="UpdateCardCall">
    {updateACdArr.map(CreateUpdateCard)}
</div>
</div>
   </> 
}
export default AUpdates;