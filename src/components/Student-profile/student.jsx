import React from 'react'
import './student.css'
import avatar from '../Assests/Images/avatar.png'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Student/SideBar/sidebar'
import ProfileInputField from '../ProfileInputField'
import ProfileInputDisabled from '../ProfileInputDiabled'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Student = () => {
    const [profileName,setProfileName] = useState(null);
    const [profileRoll,setProfileRoll] = useState(null);
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

    const [editAble,setEditAble]=useState(false);
    function handleEditProfile(){
setEditAble(true);
console.log(editAble);
    }
   function handleEditPName(e){
    setProfileName(e.target.value)
   }
   function handleEditProll(e){
    setProfileRoll(e.target.value);
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
   function handleEditPMother(e){
    setProfileMother(e.target.value);
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
      axios.get("https://erp-edumate.herokuapp.com/api/user/student/profiledetails/",config).then((res)=>{
         console.log(res);
         setPostData(res.data);
         setProfileName(res.data.name);
         setProfileRoll(res.data.userID);
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

         console.log(postData)
      }).catch(err=>{
         console.log(err);
      })
   },[])

   function handleSaveProfile(){
      setEditAble(false);
      axios.put("https://erp-edumate.herokuapp.com/api/user/student/profiledetails/",config,{
         name:profileName,
         userID:profileRoll,
         sex:profileSex,
         blood_group:profileBG,
         DOB:profileDOB,
         address:profileAddr,
         city:profileCity,
         state:profileState,
         student_phone:profileMobile,
         pincode:profilePin,
         father_phone:profileFather,
         mother_phone:profileMother

      }).then((res)=>{
         setPostData(res.data);
         setProfileName(res.data.name);
         setProfileRoll(res.data.userID);
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
      })
  }
    return ( 
        <>
            <Navbar/>
            <SideBar />
            <h1 className="dash">Dashboard : My Profile</h1>
            <div id="background">
                <div id="avatar">
                    <img src={avatar} id="profileImage"/>
                    <span id='dis-name'>TUSHAR CHAUHAN </span><br />
                    <div className='avatarInfo'>
                    Mon 3 SEPT 2001 <br />
                    B.TECH 2ND YEAR <br />
                    CSE
                    </div>
                </div>
                <div id="heading1">Student Profile</div>
                <div id="PROFILE">
                <div id="personalinfo">Personal Info</div>
                <div id="stu-name">Student's Name</div>
                <div className='space1'>
                {editAble?(<ProfileInputField value={profileName} class="profileField" type="text" onChange={handleEditPName} />): 
                   (<ProfileInputDisabled  value={profileName} class="profileField" type="text"/>)}
                </div> 
                <div id="roll">Sex</div>
                <div className='space2'>
                {editAble?(<ProfileInputField value={profileSex} class="profileField" type="text" onChange={handleEditPSex} />): 
                   (<ProfileInputDisabled  value={profileSex} class="profileField" type="text"/>)}
                </div>
                <div id="adm-no">Roll No.</div>
                <div className='space3'>
                {editAble?(<ProfileInputField value={profileRoll} class="profileField" type="text" onChange={handleEditProll} />): 
                   (<ProfileInputDisabled  value={profileRoll} class="profileField" type="text"/>)}
                </div>
                {/* <div id="adm-no">Admission No. </div>
                <div className='space3'>
                {editAble?(<ProfileInputField value={profileAdm} class="profileField" type="text" onChange={handleEditPAdm} />): 
                   (<ProfileInputDisabled  value={profileAdm} class="profileField" type="text"/>)}
                </div> */}
                <div id="bl-gr">Blood Group</div>
                <div className='space4'>
                {editAble?(<ProfileInputField value={profileBG} class="profileField" type="text" onChange={handleEditPBG} />): 
                   (<ProfileInputDisabled  value={profileBG} class="profileField" type="text"/>)}
                </div>
                <div id="email">Date of Birth</div>
                <div className='space5'>
                {editAble?(<ProfileInputField value={profileDOB} class="profileField" type="text" onChange={handleEditPDOB} />): 
                   (<ProfileInputDisabled  value={profileDOB} class="profileField" type="text"/>)}
                </div>
                <div className='CONTACT'>
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
                </div>
                <div id="heading3">Parents</div>
                <div id="fat-phone">Father's Mobile No.</div>
                <div className='space11'>
                {editAble?(<ProfileInputField value={profileFather} class="profileField" type="text" onChange={handleEditPFather} />): 
                   (<ProfileInputDisabled  value={profileFather} class="profileField" type="text"/>)}
                </div>
                <div id="mot-phone">Mother's Mobile No.</div>
                <div className='space12'>
                {editAble?(<ProfileInputField value={profileMother} class="profileField" type="text" onChange={handleEditPMother} />): 
                   (<ProfileInputDisabled  value={profileMother} class="profileField" type="text"/>)}
                </div>
                <button id="editButton" onClick={handleEditProfile}>Edit Profile</button>
                <button id="saveButton" onClick={handleSaveProfile}>Save</button>
                </div>
            </div>
        </>
    )
}

export default Student