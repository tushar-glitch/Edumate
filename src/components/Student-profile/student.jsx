import React from 'react'
import './student.css'
import avatar from '../Assests/Images/avatar.png'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Student/SideBar/sidebar'
import ProfileInputField from '../ProfileInputField'
import ProfileInputDisabled from '../ProfileInputDiabled'
import { useState } from 'react'

const Student = () => {
    const [profileName,setProfileName] = useState("Tushar Chauhan");
    const [profileRoll,setProfileRoll] = useState("2100270100108");
    const [profileAdm,setProfileAdm] = useState("62354i4");
    const [profileBG,setProfileBg] = useState("B+");
    const [profileEmail,setProfileEmail] = useState("62354i4");
    const [profileAddr,setProfileAddr] = useState("djsghxfvbj");
    const [profileCity,setProfileCity] = useState("aligarh");
    const [profileState,setProfileState] = useState("62354i4");
    const [profileMobile,setProfileMobile] = useState("62354i4");
    const [profilePin,setProfilePin] = useState("62354i4");
    const [profileFather,setProfileFather] = useState("62354i4");
    const [profileMother,setProfileMother] = useState("62354i4");

    const [editAble,setEditAble]=useState(false);
    function handleEditProfile(){
setEditAble(true);
console.log(editAble);
    }
    function handleSaveProfile(){
        setEditAble(false);
    }
   function handleEditPName(e){
    setProfileName(e.target.value)
   }
   function handleEditProll(e){
    setProfileRoll(e.target.value);
   }
   function handleEditPAdm(e){
    setProfileAdm(e.target.value);
   }
   function handleEditPBG(e){
    setProfileBg(e.target.value);
   }
   function handleEditPEmail(e){
    setProfileEmail(e.target.value);
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
    
    return (
        <>
            {/* <Navbar/> */}
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
                <div id="roll">Roll No. </div>
                <div className='space2'>
                {editAble?(<ProfileInputField value={profileRoll} class="profileField" type="text" onChange={handleEditProll} />): 
                   (<ProfileInputDisabled  value={profileRoll} class="profileField" type="text"/>)}
                </div>
                <div id="adm-no">Admission No. </div>
                <div className='space3'>
                {editAble?(<ProfileInputField value={profileAdm} class="profileField" type="text" onChange={handleEditPAdm} />): 
                   (<ProfileInputDisabled  value={profileAdm} class="profileField" type="text"/>)}
                </div>
                <div id="bl-gr">Blood Group</div>
                <div className='space4'>
                {editAble?(<ProfileInputField value={profileBG} class="profileField" type="text" onChange={handleEditPBG} />): 
                   (<ProfileInputDisabled  value={profileBG} class="profileField" type="text"/>)}
                </div>
                <div id="email">Email</div>
                <div className='space5'>
                {editAble?(<ProfileInputField value={profileEmail} class="profileField" type="text" onChange={handleEditPEmail} />): 
                   (<ProfileInputDisabled  value={profileEmail} class="profileField" type="text"/>)}
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
