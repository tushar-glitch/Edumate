import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './dashboard1.css'
import profileimg from '../../Assests/Images/avatar.png'
import AdmBar from '../admin_bar/AdmBar'
import * as ReactBootStrap from "react-bootstrap";
import { useState , useEffect } from 'react'
import axios from "axios"
import AUpdateCard from '../Admin_Updates/AUpdateCard'

const AdminDashboard = () => {
    // useEffect(()=>{
    //     if(loadBool)
    //     document.body.style.opacity="0.5"
    //     else
    //     document.body.style.opacity="1"
    //   },[loadBool])
    const [gender, setGender] = useState('Male')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    function navigatetostu() {
        navigate("/add_stu")
    }
    function navigatetofac() {
        navigate('/add_fac')
    }
    const adminAccessToken = sessionStorage.getItem("Admin_access_token");
    const config = {
        headers:{
           Authorization: `Bearer ${adminAccessToken}`
        }
     }
    const [updateCdArr, setUpdateCdArr] = useState([]);
    function navigatetoAdmupdates() {
        navigate('/aUpdate')
    }
    useEffect(() => {
        // setLoadBool(true)
        axios.get("https://erp-edumate.herokuapp.com/api/user/updatesection/0/", config).
            then((res) => {
                console.log(res.data[0]);
                // setLoadBool(false)
                    setUpdateCdArr(res.data[0])
            })
            .catch((err) => {
                // setLoadBool(false)
                console.log(err);
            })
    }, [])
    function CreateUpdateCard(updateCdArr) {
        return (
            <AUpdateCard title={updateCdArr.title} desc={updateCdArr.description} />
        )
    }
    const User_Name = sessionStorage.getItem("User_name")
    return (
        <>
         <AdmBar />
            <h1 id='dash'>Dashboard</h1>
            <div id="container">
                <div id="container1">
                </div>
            </div>
            <div id="background-dash">
                <div id="greeting1"><span className='bold'>Hello,</span> {User_Name}<br /><span id="greeting2">Nice to have you back, what an exciting day!</span></div>
                <div id="today_class">Add Student</div>
                <div id="class_bg1">
                    <div id="ad_dash_stu" className='class23' onClick={navigatetostu}>
                        <span className="circle_name_plus"><span className="plus1">+</span></span>
                        <span className="class_name1">Add Student</span>
                    </div>
                </div>
                <div id="today_class1">Add Faculty</div>
                <div id="class_bg2">
                    <div id="ad_dash_fac" className='class1' onClick={navigatetofac}>
                        <span className="circle_name"><span className="plus2">+</span></span>
                        <span className="class_name9">Add Faculty</span>
                    </div>
                </div>
                <div id="right">
                    <div id="profile_details">Profile Details</div>
                    <div id="card1">
                        <img src={profileimg} alt="" id='img' />
                        <div id="student_details"><span className='bold_name'>{User_Name}</span><br/>{gender}<br/>{email}</div>
                    </div>
                    <div id="updates2">Updates</div>
                    <div id="card32">
                                {updateCdArr.slice(0, 1).map(CreateUpdateCard)}
                                <span id='read-more' onClick={navigatetoAdmupdates}>Read more...</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;
