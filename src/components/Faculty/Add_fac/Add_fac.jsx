import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Navbar from '../../Navbar/Navbar'
import SideBar from '../../Student/SideBar/sidebar'
import './add_fac.css'
const Add_fac = () => {
  const [name, setName] = useState('')
  const [DOB, setDob] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  function handlename(e) {
    setName(e.target.value)
  }
  function handledob(e) {
    setDob(e.target.value) 
  }
  function handleemail(e) {
    setEmail(e.target.value)
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
  var data = {name,department,email,DOB}
  function senddata() {
    axios.post('https://erp-edumate.herokuapp.com/api/user/admin/addteacher/', data, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
      <Navbar />
      <SideBar/>
      <div id="add_stu_bg">
        <div id="add_stu_head"><span id="add_stu_heading">Add New Faculty</span></div>
        <div id="add_stu_name">Name</div>
        <input type="text" id='add_stu_input_name' onChange={handlename}/>
        <div id="add_stu_dob">D.O.B</div>
        <input type="text" id='add_stu_input_dob' onChange={handledob} />
        <div id="add_stu_email">Email</div>
        <input type="text" id='add_stu_input_email' onChange={handleemail} />
        <div id="add_stu_department">Department</div>
        <input type="text" id='add_stu_input_department' onChange={handleclass} />
        
        <button onClick={senddata} id='add_stu_btn'>Done</button>
      </div>
    </>
  )
}

export default Add_fac
