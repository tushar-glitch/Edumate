import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import AdmBar from '../admin_bar/AdmBar'
import * as ReactBootStrap from "react-bootstrap";
import './add_stu.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Add_stu = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [DOB, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [class_id, setClassId] = useState('')
  const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  function handlename(e) {
    // if (name.length >= 6)
    //   return false;
    // else
      setName(e.target.value)
  }
  function handledob(e) {
    setDob(e.target.value)
  }
  function handleemail(e) {
    setEmail(e.target.value)
    if (rightemail.test(email)) {
      document.getElementById('add_stu_input_email').style.outlineColor = 'green'
    }
    else
      document.getElementById('add_stu_input_email').style.outlineColor = 'red'
  }
  function handleclass(e) {
    setClassId(e.target.value)
  }
  var accessToken = sessionStorage.getItem('access token')
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
  const [loadBool, setLoadBool] = useState(false);
  var data = { name, class_id, email, DOB }
  function senddata() {
    setLoadBool(true)
    axios.post('https://erp-edumate.herokuapp.com/api/user/admin/addstudent/', data, config)
      .then((res) => {
        console.log(res);
        toast.success(res.data.msg,{
          position: "top-center",
        })
        setLoadBool(false)
        if (res.status == 200) {
          navigate('/admin_dashboard')
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.DOB[0],{
          position: "top-center",
        })
      console.log(err.response.data.DOB[0])
        setLoadBool(false)
      })
  }
  useEffect(() => {
    if (loadBool)
      document.body.style.opacity = "0.5"
    else
      document.body.style.opacity = "1"
  }, [loadBool])
  return (
    <>
     <AdmBar />
     <div className="ADDSTUD">
      <div id="add_stu_bg">
        <div id="add_stu_head"><span id="add_stu_heading">Add New Student</span></div>
        <div id="add_stu_name">Name</div>
        <input type="text" id='add_stu_input_name' onChange={handlename} />
        <div id="add_stu_dob">D.O.B</div>
        <input type="date" id='add_stu_input_dob' onChange={handledob} />
        <div id="add_stu_email">Email</div>
        <input type="email" id='add_stu_input_email' onChange={handleemail} />
        <div id="add_stu_class_id">Class Id</div>
        <input type="text" id='add_stu_input_id' onChange={handleclass} />
        {/* <select name="" id="add_stu_select">
          <option value="">S1</option>
          <option value="">S2</option>
          <option value="">S3</option>
          <option value="">S4</option>
          <option value="">S5</option>
          <option value="">S6</option>
        </select> */}

        <button onClick={senddata} id='add_stu_btn'>Done</button>
      </div>
      {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
      </div>
      <ToastContainer />
    </>
  )
}

export default Add_stu
