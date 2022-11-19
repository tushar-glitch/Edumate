import React from "react";
import { useState , useEffect} from "react";
import axios from "axios";
import "../../Student/Updates/update.css";
import AUpdateCard from "./AUpdateCard";
import NewUpdateCard from "./makeNewUpdateAdmin";
import { useNavigate } from "react-router-dom";
import AdmBar from "../admin_bar/AdmBar";
import * as ReactBootStrap from "react-bootstrap";
function AUpdates(){
    const adminAccessToken = sessionStorage.getItem("Admin_access_token");
console.log(adminAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${adminAccessToken}`
    }
 }
 console.log(config);
 const [updateACdArr,setUpdateACdArr]=useState([]);
 const [loadBool,setLoadBool] = useState(false);
useEffect(()=>{
    setLoadBool(true)
    axios.get("https://erp-edumate.herokuapp.com/api/user/updatesection/0/",config).
    then((res)=>{
        console.log(res)
        setLoadBool(false)
        console.log(res.data[0]);
        setUpdateACdArr(res.data[0]);
        console.log(updateACdArr);
        sessionStorage.setItem("Admin_updates_array",JSON.stringify(updateACdArr))
    })
    .catch((err)=>{
        console.log(err);
        setLoadBool(false)
    })
},[])
function handleDeleteUpdates(id,title,description){
    console.log(id);
    setLoadBool(true)
    const url = `https://erp-edumate.herokuapp.com/api/user/updatesection/`;
    axios.delete((url+id),{
        headers:{
           Authorization: `Bearer ${adminAccessToken}`
        }
     })
    .then((res)=>
    console.log(res))
    setLoadBool(false)
    .catch((err)=>{
        console.log(err)
        setLoadBool(false)
    })
}
// delete={()=>handleDeleteUpdates(updateACdArr.id,updateACdArr.title,updateACdArr.description)}
function handleEditUpdates(editCardId,editCardTitle,editCardDescription){
    console.log(editCardId);
    sessionStorage.setItem("EditUpdatesId",editCardId);
    sessionStorage.setItem("EditUpdatesTitle",editCardTitle);
    sessionStorage.setItem("EditUpdatesDesc",editCardDescription);
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
useEffect(()=>{
    if(loadBool)
    document.body.style.opacity="0.5"
    else
    document.body.style.opacity="1"
  },[loadBool])
   return <>
     <AdmBar />
  <h1 className="update">Dashboard : Updates</h1>
        <div className="updateAdminDiv" >
            <h1 className="updateAdminRow">Events</h1>
            <button className="updateNewButton" onClick={createNewUpdate}>New</button>
            <div className="AdUpdateCardCall">
    {updateACdArr.map(CreateUpdateCard)}
</div>
</div>
  {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
   </> 
}
export default AUpdates;