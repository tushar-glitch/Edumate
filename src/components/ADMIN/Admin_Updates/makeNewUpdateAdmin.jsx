import axios from "axios";
import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NewUpdateCard (){

const [updateListValue, setUpdateListValue] = useState("3");
const [cardTitle,setCardTitle] = useState("")
const [cardDesc,setCardDesc] = useState("")
function handleCardTitle(e){
    setCardTitle(e.target.value);
}
function handleCardDesc(e){
    setCardDesc(e.target.value);
}

function handleUpdatesListValues(e){
    setUpdateListValue(e.target.value)
    console.log(updateListValue)
}
const [AdminUpdate,setAdminUpdate] = useState(sessionStorage.getItem("Admin_updates_array"))
const adminAccessToken = sessionStorage.getItem("Admin_access_token");
console.log(adminAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${adminAccessToken}`
    }
 }
 const nCard1 ={
    title:cardTitle,
    description:cardDesc,
    showto:updateListValue
 }
function handleDoneNewCdApi(){
    console.log("ahsj,")
    axios.post("https://erp-edumate.herokuapp.com/api/user/updatesection/",nCard1,config).
    then((res)=>{
        console.log(res.data);
        setAdminUpdate(AdminUpdate=>[...AdminUpdate,nCard1])
        navigate("/aUpdate")
    }).catch((err)=>{
        console.log(err);
    })
}
const navigate = useNavigate();
function handleCancelNCdApi(){
    axios.get("https://erp-edumate.herokuapp.com/api/user/updatesection/",config).
    then((res)=>{
        console.log(res.data);
        setAdminUpdate(AdminUpdate);
        navigate("/aUpdate")
    }).catch((err)=>{
        console.log(err);
    })
}

    return <>
    <div className="updateOuterDiv">
        <div className="updateInnerDiv">
            <div className="updateNewCardRow">Add New Event</div>
            <label for="newCardTitle" className="nCdTitle" name="Title">Title</label>
            <input type="text" id="newCardTitle" onChange={handleCardTitle} value={cardTitle}></input><br />
            <label for="newCardDescribe" className="nCdDesc">Description</label>
            <input type="textarea" id="newCardDescribe" value={cardDesc} onChange={handleCardDesc}></input><br/>
            <label for="selectNCdDropdown" className="nCdVisible">Visible to:</label>
            <select  className="visibleList" onChange={handleUpdatesListValues}>
                <option value={"1"} className="visibleListItem1">Student</option>
                <option value={"2"} className="visibleListItem2">Faculty</option>
                <option value={"3"} className="visibleListItem3">Both</option>
            </select>
            <button className="handleNUpdCardCancel" onClick={handleCancelNCdApi} >Cancel</button>
            <button className="handleNUpdCardDone" onClick={handleDoneNewCdApi}>Done</button>
        </div>
    </div>
    </>
}
export default NewUpdateCard;