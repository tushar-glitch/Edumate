import React from 'react'
import './profile.css'
import avatar from '../../Assests/Images/avatar.png'
import Navbar from '../../utils/Navbar/Navbar'
import ProfileInputField from '../../utils/ProfileInputField'
import ProfileInputDisabled from '../../utils/ProfileInputDiabled'
import * as ReactBootStrap from "react-bootstrap";
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../../utils/axiosInstance'
import { setUncaughtExceptionCaptureCallback } from 'process'

const Profile = () => {
    const [profileName,setProfileName] = useState(null);
    const [profileSex,setProfileSex] = useState(null);
    const [profileBG,setProfileBg] = useState(null);
    const [profileDOB,setProfileDOB] = useState(null);
    const [profileAddr,setProfileAddr] = useState(null);
    const [profileCity,setProfileCity] = useState(null);
    const [profileState,setProfileState] = useState(null);
    const [profileMobile,setProfileMobile] = useState(null);
    const [profilePin,setProfilePin] = useState(null);
    const [profileFather,setProfileFather] = useState(null);
    const [profileMother,setProfileMother] = useState(null);
    const [profileFatherName,setProfileFatherName] = useState(null);
    const [profileMotherName,setProfileMotherName] = useState(null);
    const [profileEmail,setProfileEmail] = useState(null);

    const [editAble,setEditAble]=useState(false);
    const [show,setShow] = useState(false)
    const [loadBool,setLoadBool] = useState(false);
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
sessionStorage.setItem("StudentName",profileName)

const [show3,setShow3] = useState(false);
   function handleEditPName(e){
    setProfileName(e.target.value)
   }
   function handleEditPEmail(e){
    setProfileEmail(e.target.value);
   }
   function handleEditPSex(e){
    setProfileSex(e.target.value);
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
   function handleEditPFather(e){
    setProfileFather(e.target.value);
   }
   function handleEditPFatherName(e){
      setProfileFatherName(e.target.value);
     }
   function handleEditPMother(e){
    setProfileMother(e.target.value);
   }
   function handleEditPMotherName(e){
      setProfileMotherName(e.target.value);
     }
    
   const [postData,setPostData] = useState(null);
   const accessToken = sessionStorage.getItem("access token");
   console.log(accessToken);
   const config = {
      headers:{
         Authorization: `Bearer ${accessToken}`
      }
   }
   useEffect(()=>{
      setLoadBool(true)
      axios.get("https://erp-edumate.herokuapp.com/api/user/student/profiledetails/",config).then((res)=>{
         console.log(res);
         setLoadBool(false)
         setProfileName(res.data.name);
         setProfileSex(res.data.sex);
         setProfileBg(res.data.blood_group);
         setProfileDOB(res.data.DOB);
         setProfileAddr(res.data.address);
         setProfileCity(res.data.city);
         setProfileState(res.data.state);
         setProfileMobile(res.data.student_phone);
         setProfilePin(res.data.pincode);
         setProfileFather(res.data.father_phone);
         setProfileMother(res.data.mother_phone);
         setProfileMotherName(res.data.mother_name);
         setProfileFatherName(res.data.father_name);
         setProfileEmail(res.data.email)
         console.log(postData)
      }).catch(err=>{
         setLoadBool(false)
         console.log(err);
      })
   },[])

   const [show2,setShow2] = useState(false);
   function handleCancel(){
      setEditAble(false);
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
         axios.get("https://erp-edumate.herokuapp.com/api/user/student/profiledetails/",config).then((res)=>{
            console.log(res);
            setProfileName(res.data.name);
            setProfileSex(res.data.sex);
            setProfileBg(res.data.blood_group);
            setProfileEmail(res.data.email);
            setProfileDOB(res.data.DOB);
            setProfileAddr(res.data.address);
            setProfileCity(res.data.city);
            setProfileState(res.data.state);
            setProfileMobile(res.data.student_phone);
            setProfilePin(res.data.pincode);
            setProfileFather(res.data.father_phone);
            setProfileMother(res.data.mother_phone);
            setProfileMotherName(res.data.mother_name);
            setProfileFatherName(res.data.father_name);
            console.log(postData)
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
      axios.put("https://erp-edumate.herokuapp.com/api/user/student/profiledetails/",{
         name:profileName,
         sex:profileSex,
         blood_group:profileBG,
         DOB:profileDOB,
         address:profileAddr,
         city:profileCity,
         state:profileState,
         student_phone:profileMobile,
         pincode:profilePin,
         father_name:profileFatherName,
         mother_name:profileMotherName,
         father_phone:profileFather,
         mother_phone:profileMother,
         email:profileEmail
      },config).then((res)=>{
         setPostData(res.data);
         console.log(res.data);
         setProfileName(res.data.name);
         setProfileEmail(res.data.email);
         setProfileSex(res.data.sex);
         setProfileBg(res.data.blood_group);
         setProfileDOB(res.data.DOB);
         setProfileAddr(res.data.address);
         setProfileCity(res.data.city);
         setProfileState(res.data.state);
         setProfileMobile(res.data.student_phone);
         setProfilePin(res.data.pincode);
         setProfileFather(res.data.father_phone);
         setProfileMother(res.data.mother_phone);
         setProfileFatherName(res.data.father_name);
         setProfileMotherName(res.data.mother_name);
      })
  }
  useEffect(()=>{
   if(loadBool)
   document.body.style.opacity="0.5"
   else
   document.body.style.opacity="1"
 },[loadBool])
    return ( 
        <>
            <Navbar/>
            <h1 className="dash">Dashboard : My Profile</h1>
            <div id="background">
                <div id="avatar">
                    <img src={avatar} id="profileImage"/>
                    <span id='dis-name'>{profileName}</span><br />
                    <div className='avatarInfo'>
                    Mon 3 SEPT 2001 <br />
                    B.TECH 2ND YEAR <br />
                    </div>
                </div>
                <div id="heading1">Student Profile</div>
                <div id="personalinfo">Personal Info</div>
                <div id="stu-name">Student's Name</div>
                <div className='space1'>
                {editAble?(<ProfileInputField value={profileName} class="profileField" type="text" onChange={handleEditPName} />): 
                   (<ProfileInputDisabled  value={profileName} class="profileField" type="text"/>)}
                </div> 
                <div id="sex">Sex</div>
                <div className='space2'>
                {editAble?(<ProfileInputField value={profileSex} class="profileField" type="text" onChange={handleEditPSex} />): 
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
                {editAble?(<ProfileInputField value={profileEmail} class="profileField" type="text" onChange={handleEditPEmail} />): 
                   (<ProfileInputDisabled  value={profileEmail} class="profileField" type="text"/>)}
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
                <div id="heading3">Parents</div>
                <div id="fat-name">Father's Name</div>
                <div className='space11'>
                {editAble?(<ProfileInputField value={profileFatherName} class="profileField" type="text" onChange={handleEditPFatherName} />): 
                   (<ProfileInputDisabled  value={profileFatherName} class="profileField" type="text"/>)}
                </div>
                <div id="fat-phone">Father's Mobile No.</div>
                <div className='space12'>
                {editAble?(<ProfileInputField value={profileFather} class="profileField" type="text" onChange={handleEditPFather} />): 
                   (<ProfileInputDisabled  value={profileFather} class="profileField" type="text"/>)}
                </div>
                <div id="mot-name">Mother's Name</div>
                <div className='space13'>
                {editAble?(<ProfileInputField value={profileMotherName} class="profileField" type="text" onChange={handleEditPMotherName} />): 
                   (<ProfileInputDisabled  value={profileMotherName} class="profileField" type="text"/>)}
                </div>
                <div id="mot-phone">Mother's Mobile No.</div>
                <div className='space14'>
                {editAble?(<ProfileInputField value={profileMother} class="profileField" type="text" onChange={handleEditPMother} />): 
                   (<ProfileInputDisabled  value={profileMother} class="profileField" type="text"/>)}
                </div>
                <button id="editButton" onClick={handleEditProfile}>Edit Profile</button>
                <button id="saveButton" onClick={handleSaveProfile}>Save</button> 
                <button id="cancelButton" onClick={handleCancel}>Cancel</button> 
                <div className='CONTACT'>
            </div>
            </div>
            {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
        </>
    )
}

export default Profile;