import React from 'react'
import "../../Student/Student-profile/profile.css";
import avatar from "../../Assests/Images/avatar.png";
import ProfileInputField from "../../utils/ProfileInputField"
import ProfileInputDisabled from '../../utils/ProfileInputDiabled'
import * as ReactBootStrap from "react-bootstrap";

import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from '../../utils/Navbar/Navbar';
// import axiosInstance from '../utils/axiosInstance'

const FacultyProfile = () => {
    const [profileName,setProfileName] = useState(null);
    const [profileSex,setProfileSex] = useState(null);
    const [profileBG,setProfileBg] = useState(null);
    const [profileDOB,setProfileDOB] = useState(null);
    const [profileAddr,setProfileAddr] = useState(null);
    const [profileCity,setProfileCity] = useState(null);
    const [profileState,setProfileState] = useState(null);
    const [profileMobile,setProfileMobile] = useState(null);
    const [profilePin,setProfilePin] = useState(null);
    const [profileEmail,setProfileEmail] = useState(null);

    const[loadBool,setLoadBool]=useState(false);
    
    const [editAble,setEditAble]=useState(false);
    const [show,setShow] = useState(false)
    function handleEditProfile(){
setEditAble(true);
console.log(editAble);
if (!show) {
   setShow(true);
   document.getElementById('saveButton').style.display = "block";
   document.getElementById('cancelButton').style.display = "block";
   document.getElementById('editButton').style.display = "none";
    }
   else {
       setShow(false)
       document.getElementById('saveButton').style.display = "none";
       document.getElementById('cancelButton').style.display = "none";
   }
}

const [show3,setShow3] = useState(false);
    function handleEditPName(e){
      if (profileName.length >= 10)
         return false;
      else
         setProfileName(e.target.value)
   }
   function handleEditPEmail(e){
    setProfileEmail(e.target.value);
   }
   function handleEditPName(e){
    setProfileName(e.target.value)
   }
   function handleEditPBG(e){
    setProfileBg(e.target.value);
   }
   function handleEditPDOB(e){
    setProfileDOB(e.target.value);
   }
  
   function handleEditPAddr(e){
    setProfileAddr(e.target.value);
   }
   function handleEditPCity(e){
    setProfileCity(e.target.value);
   }
   function handleEditPState(e){
    setProfileState(e.target.value);
   }
   function handleEditPPin(e){
    setProfilePin(e.target.value);
   }
   function handleEditPMobile(e){
    setProfileMobile(e.target.value);
   }
    
   const FacAccessToken = sessionStorage.getItem("Faculty_access_token");
   console.log(FacAccessToken);
   const config = {
      headers:{
         Authorization: `Bearer ${FacAccessToken}`
      }
   }
   // const [loadBool, setLoadBool] = useState(false)
   useEffect(()=>{
      setLoadBool(true)
      axios.get("https://erp-edumate.herokuapp.com/api/user/teacher/profiledetails/",config).then((res)=>{
         setLoadBool(false)
         console.log(res);
         setProfileName(res.data.name);
         setProfileSex(res.data.sex);
         setProfileBg(res.data.blood_group);
         // setProfileEmail(res.data.email);
         setProfileDOB(res.data.DOB);
         setProfileAddr(res.data.address);
         setProfileCity(res.data.city);
         setProfileState(res.data.state);
         setProfileMobile(res.data.teacher_phone);
         setProfilePin(res.data.pincode);
      }).catch(err=>{
         console.log(err);
         setLoadBool(false)
      })
   },[])

   const [show2,setShow2] = useState(false);
   function handleCancel(){
      setEditAble(false);
      setLoadBool(false)
      if (!show2) {
         setShow2(true);
         document.getElementById('saveButton').style.display = "none";
         document.getElementById('cancelButton').style.display = "none";
         document.getElementById('editButton').style.display = "block";
          }
         else {
             setShow2(false)
             document.getElementById('saveButton').style.display = "block";
             document.getElementById('cancelButton').style.display = "block";
             document.getElementById('editButton').style.display = "none";
         }
         axios.get("https://erp-edumate.herokuapp.com/api/user/teacher/profiledetails/",config).then((res)=>{
            setLoadBool(true)
            console.log(res);
            setProfileName(res.data.name);
            setProfileSex(res.data.sex);
            setProfileBg(res.data.blood_group);
            // setProfile/Email(res.data.email);
            setProfileDOB(res.data.DOB);
            setProfileAddr(res.data.address);
            setProfileCity(res.data.city);
            setProfileState(res.data.state);
            setProfileMobile(res.data.teacher_phone);
            setProfilePin(res.data.pincode);
         }).catch(err=>{
            console.log(err);
         })

   }

   function handleSaveProfile(){
      if (!show3) {
         setShow3(true);
         document.getElementById('saveButton').style.display = "none";
         document.getElementById('cancelButton').style.display = "none";
         document.getElementById('editButton').style.display = "block";
          }
         else {
             setShow3(false)
             document.getElementById('saveButton').style.display = "block";
             document.getElementById('cancelButton').style.display = "block";
             document.getElementById('editButton').style.display = "none";
         }
      setEditAble(false);
      setLoadBool(true)
      axios.put("https://erp-edumate.herokuapp.com/api/user/teacher/profiledetails/",{
         name:profileName,
         sex:profileSex,
         blood_group:profileBG,
         DOB:profileDOB,
         email:profileEmail,
         address:profileAddr,
         city:profileCity,
         state:profileState,
         teacher_phone:profileMobile,
         pincode:profilePin,
         // email:"erp.edumate.testEr@gmail.com"
      },config).then((res)=>{
         setProfileName(res.data.name);
         setProfileSex(res.data.sex);
         setProfileBg(res.data.blood_group);
         // setProfileEmail(res.data.email);
         setProfileDOB(res.data.DOB);
         setProfileAddr(res.data.address);
         setProfileCity(res.data.city);
         setProfileState(res.data.state);
         setProfileMobile(res.data.teacher_phone);
         setProfilePin(res.data.pincode);
         setLoadBool(true)
      })
  }
  sessionStorage.setItem("FacultyName",profileName)
  useEffect(()=>{
   if(loadBool)
   document.body.style.opacity="0.5"
   else
   document.body.style.opacity="1"
 },[loadBool])
    return ( 
        <>
       <Navbar />
            <h1 className="dash">Dashboard : My Profile</h1>
            <div id="facultyBackground" >
                <div id="avatar">
                    <img src={avatar} id="profileImage"/>
                    <span id='dis-name'>{profileName}</span><br />
                    <div className='avatarInfo'>
                    Mon 3 SEPT 2001 <br />
                    B.TECH 2ND YEAR <br />
                    </div>
                </div>
                <div id="heading1">Faculty Profile</div>
                <div id="personalinfo">Personal Info</div>
                <div id="stu-name">Faculty's Name</div>
                <div className='space1'>
                {editAble?(<ProfileInputField value={profileName} class="profileField" type="text" onChange={handleEditPName} />): 
                   (<ProfileInputDisabled  value={profileName} class="profileField" type="text"/>)}
                </div> 
                <div id="sex">Sex</div>
                <div className='space2'>
                {editAble?(<ProfileInputField value={profileSex} class="profileField" type="text" />): 
                   (<ProfileInputDisabled  value={profileSex} class="profileField" type="text"/>)}
                </div>
                <div id="bl-gr">Blood Group</div>
                <div className='space3'>
                {editAble?(<ProfileInputField value={profileBG} class="profileField" type="text" onChange={handleEditPBG} />): 
                   (<ProfileInputDisabled  value={profileBG} class="profileField" type="text"/>)}
                </div>
                <div id="dob">Date of Birth</div>
                <div className='space4'>
                {editAble?(<ProfileInputField value={profileDOB} class="profileField" type="text" onChange={handleEditPDOB} />): 
                   (<ProfileInputDisabled  value={profileDOB} class="profileField" type="text"/>)}
                </div>
                <div id="email">Email</div>
                <div className='space5'>
                {editAble?(<input value={profileEmail} class="profileField" type="date" onChange={handleEditPEmail} disabled/>): 
                   (<input  value={profileEmail} class="profileField" type="date" disabled/>)}
                </div>
                <div id="heading2">Contact Details</div>
                <div id="address">Address</div>
                <div className='space6'>
                {editAble?(<ProfileInputField value={profileAddr} class="profileField" type="text" onChange={handleEditPAddr} />): 
                   (<ProfileInputDisabled  value={profileAddr} class="profileField" type="text"/>)}
                </div>
                <div id="city">City</div>
                <div className='space7'>
                {editAble?(<ProfileInputField value={profileCity} class="profileField" type="text" onChange={handleEditPCity} />): 
                   (<ProfileInputDisabled  value={profileCity} class="profileField" type="text"/>)}
                </div>
                <div id="state">State</div>
                <div className='space8'>
                {editAble?(<ProfileInputField value={profileState} class="profileField" type="text" onChange={handleEditPState} />): 
                   (<ProfileInputDisabled  value={profileState} class="profileField" type="text"/>)}
                </div>
                <div id="stu-phone">Student's Mobile No.</div>
                <div className='space9'>
                {editAble?(<ProfileInputField value={profileMobile} class="profileField" type="text" onChange={handleEditPMobile} />): 
                   (<ProfileInputDisabled  value={profileMobile} class="profileField" type="text"/>)}
                </div>
                <div id="pin">Pincode</div>
                <div className='space10'>
                {editAble?(<ProfileInputField value={profilePin} class="profileField" type="text" onChange={handleEditPPin} />): 
                   (<ProfileInputDisabled  value={profilePin} class="profileField" type="text"/>)}
                </div>
                <button id="editButton" onClick={handleEditProfile} >Edit Profile</button>
                <button id="saveButton" onClick={handleSaveProfile}>Save</button> 
                <button id="cancelButton" onClick={handleCancel}>Cancel</button> 
                <div className='CONTACT'>
            </div>
            </div>
            {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
        </>
    )
}

export default FacultyProfile