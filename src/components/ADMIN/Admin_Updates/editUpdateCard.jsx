import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function EditUpdateCard (props){

    const EditCardTitle = localStorage.getItem("EditUpdatesTitle");
const EditCardDescription = localStorage.getItem("EditUpdatesDesc");
const EditCardId = localStorage.getItem("EditUpdatesId");
const [cardTitle,setCardTitle] = useState(EditCardTitle);
const [cardDesc,setCardDesc] = useState(EditCardDescription);
const [updateListValue, setUpdateListValue] = useState("3");
function handleCardTitle(e){
    setCardTitle(e.target.value);
}
function handleCardDesc(e){
    setCardDesc(e.target.value);
}
// const [bool,setBool]= useState(false);
function handleUpdatesListValues(e){
    setUpdateListValue(e.target.value)
    console.log(updateListValue)
    // setBool(true)
}
// useEffect(()=>{
//     if(updateListValue)
//     setBool(false);
// },[updateListValue,bool])
const [AdminUpdate,setAdminUpdate] = useState(localStorage.getItem("Admin_updates_array"))
const adminAccessToken = localStorage.getItem("Admin_access_token");

console.log(EditCardDescription)
console.log(EditCardTitle)
console.log(adminAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${adminAccessToken}`
    }
 }  
 const nCard ={
    title:cardTitle,
    description:cardDesc,
    id:EditCardId,
    showto:updateListValue
 }
function handleDoneNCdApi(){
    console.log("ahsj,")
    axios.put("https://erp-edumate.herokuapp.com/api/user/updatesection/0/",nCard,config).
    then((res)=>{
        console.log(res.data);
        setAdminUpdate(AdminUpdate=>[...AdminUpdate,nCard])
        navigate("/aUpdate")
    }).catch((err)=>{
        console.log(err);
    })
}
const navigate = useNavigate();
function handleCancelNCdApi(){
    axios.get("https://erp-edumate.herokuapp.com/api/user/updatesection/0/",config).
    then((res)=>{
        console.log(res.data);
        setAdminUpdate(AdminUpdate);
        navigate("/aUpdate")
    }).catch((err)=>{
        console.log(err);
    })
}
console.log(updateListValue)
    return <>
    <div className="updateOuterDiv">
        <div className="updateInnerDiv">
            <div className="updateNewCardRow">Add New Event</div>
            <label for="newCardTitle" className="nCdTitle" name="Title">Title</label>
            <input type="text" id="newCardTitle" onChange={handleCardTitle} value={cardTitle}></input><br />
            <label for="newCardDescribe" className="nCdDesc">Description</label>
            <input type="textarea" id="newCardDescribe" value={cardDesc} onChange={handleCardDesc}></input><br/>
            <label for="selectNCdDropdown" className="nCdVisible">Visible to:</label>
            <select className="visibleList" onChange={(e)=>setUpdateListValue(e.target.value)}>
            <option disabled>Select Dropdown</option>
                <option value={"1"} className="visibleListItem1">Student</option>
                <option value={"2"} className="visibleListItem2">Faculty</option>
                <option value={"3"} className="visibleListItem3">Both</option>
            </select>
            <button className="handleNUpdCardCancel" onClick={handleCancelNCdApi}>Cancel</button>
            <button className="handleNUpdCardDone" onClick={handleDoneNCdApi}>Done</button>
        </div>
    </div>
    </>
}
export default EditUpdateCard;