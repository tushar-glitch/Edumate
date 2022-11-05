import React from 'react'
import './student.css'
import avatar from '../Assests/Images/avatar.png'
import Navbar from '../Navbar/Navbar'
import SideBar from '../Student/SideBar/sidebar'
import { useState } from 'react'

const Student = () => {
    const [profileName,setProfileName] = useState("Tushar Chauhan");
    const [profileRoll,setProfileRoll] = useState("2100270100108");
    const [profileAdm,setProfileAdm] = useState("62354i4");
    const [profileBG,setProfileBg] = useState("B+");
    const [profileEmail,setProfileEmail] = useState("62354i4");
    const [profileAddr,setProfileAddr] = useState("djsghfbashy,dgfbds,xgfjdsh,fbdfbds,bfdsbfsdgvcxfvbj");
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
            <Navbar/>
            <SideBar />
            <h1 id='dash'>Dashboard &gt; My Profile</h1>
            <div id="background">
                <div id="avatar">
                    <img src={avatar} />
                    <span id='dis-name'>TUSHAR CHAUHAN </span><br />
                    Mon 3 SEPT 2001 <br />
                    B.TECH 2ND YEAR <br />
                    CSE
                </div>
                <div id="heading1">Student Profile</div>
                <div id="personalinfo">Personal Info</div>
                <div id="stu-name">Student's Name</div>
                <div className='space1'>
                {editAble?(<input type="text" className="profileField" value={profileName} onChange={handleEditPName}/>): 
                   (<input type="text" className="profileField" value={profileName}  disabled/>)}
                </div> 
                <div id="roll">Roll No. </div>
                <div className='space2'>
                    {editAble?( <input type="text" className="profileField" value={profileRoll} onChange={handleEditProll} />):
                    (<input type="text" className="profileField" value={profileRoll} disabled/>)}
                </div>
                <div id="adm-no">Admission No. </div>
                <div className='space3'>
                {editAble?(<input type="text" className="profileField" value={profileAdm} onChange={handleEditPAdm} />):
                (<input type="text" className="profileField" value={profileAdm} disabled />)}
                </div>
                <div id="bl-gr">Blood Group</div>
                <div className='space4'>
                {editAble?(<input type="text" className="profileField" value={profileBG} onChange={handleEditPBG} />):
                (<input type="text" className="profileField" value={profileBG} disabled/>)}
                </div>
                <div id="email">Email</div>
                <div className='space5'>
                {editAble?(<input type="text" className="profileField" value={profileEmail} onChange={handleEditPEmail} />):
                (<input type="text" className="profileField" value={profileEmail} disabled />)}
                </div>
                <div id="heading2">Contact Details</div>
                <div id="address">Address</div>
                <div className='space6'>
                {editAble?(<input type="text" className="profileField" value={profileAddr} onChange={handleEditPAddr} />):
                (<input type="text" className="profileField" value={profileAddr} disabled />)}
                </div>
                <div id="city">City</div>
                <div className='space7'>
                {editAble?(<input type="text" className="profileField" value={profileCity} onChange={handleEditPCity} />):
                (<input type="text" className="profileField" value={profileCity} disabled />)}
                </div>
                <div id="state">State</div>
                <div className='space8'>
                {editAble?(<input type="text" className="profileField" value={profileState} onChange={handleEditPState} />):
                (<input type="text" className="profileField" value={profileState} disabled />)}
                </div>
                <div id="stu-phone">Student's Mobile No.</div>
                <div className='space9'>
                {editAble?(<input type="text" className="profileField" value={profileMobile} onChange={handleEditPMobile} />):
                (<input type="text" className="profileField" value={profileMobile} disabled/>)}
                </div>
                <div id="pin">Pincode</div>
                <div className='space10'>
                {editAble?(<input type="text" className="profileField" value={profilePin} onChange={handleEditPPin} />):
                (<input type="text" className="profileField" value={profilePin} disabled />)}
                </div>
                <div id="heading3">Parents</div>
                <div id="fat-phone">Father's Mobile No.</div>
                <div className='space11'>
                {editAble?(<input type="text" className="profileField" value={profileFather} onChange={handleEditPFather} />):
                (<input type="text" className="profileField" value={profileFather} disabled />)}
                </div>
                <div id="mot-phone">Mother's Mobile No.</div>
                <div className='space12'>
                {editAble?(<input type="text" className="profileField" value={profileMother} onChange={handleEditPMother} />):
                (<input type="text" className="profileField" value={profileMother} disabled />)}
                </div>
                <button id="editButton" onClick={handleEditProfile}>Edit Profile</button>
                <button id="saveButton" onClick={handleSaveProfile}>Save</button>
                
            </div>
        </>
    )
}

export default Student
