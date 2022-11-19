import axios from 'axios'
import React from 'react'
import { useState ,useEffect } from 'react'
import AdmBar from '../admin_bar/AdmBar'
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import './add_fac.css'
const Add_fac = () => {
  const [name, setName] = useState('')
  const [DOB, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const rightemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  function handlename(e) {
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
    setDepartment(e.target.value)
  }
  var accessToken = sessionStorage.getItem('access token')
  const config = {
     headers:{
        Authorization: `Bearer ${accessToken}`
     }
  }
  const [loadBool,setLoadBool] = useState(false);
  var data = {name,department,email,DOB}
  function senddata() {
    setLoadBool(true)
    axios.post('https://erp-edumate.herokuapp.com/api/user/admin/addteacher/', data, config)
      .then((res) => {
        console.log(res);
        toast.success(res.data.msg,{
          position: "top-center",
        })
        setLoadBool(false)
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
  useEffect(()=>{
    if(loadBool)
    document.body.style.opacity="0.5"
    else
    document.body.style.opacity="1"
  },[loadBool])
  return (
    <>
    <AdmBar />
      <div id="add_stu_bg">
        <div id="add_stu_head"><span id="add_stu_heading">Add New Faculty</span></div>
        <div id="add_stu_name">Name</div>
        <input type="text" id='add_stu_input_name' onChange={handlename}/>
        <div id="add_stu_dob">D.O.B</div>
        <input type="date" id='add_stu_input_dob' onChange={handledob} />
        <div id="add_stu_email">Email</div>
        <input type="text" id='add_stu_input_email' onChange={handleemail} />
        <div id="add_stu_department">Department</div>
        <input type="text" id='add_stu_input_department' onChange={handleclass} />
        
        <button onClick={senddata} id='add_stu_btn'>Done</button>
      </div>
      {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
      <ToastContainer />
    </>
  )
}

export default Add_fac
