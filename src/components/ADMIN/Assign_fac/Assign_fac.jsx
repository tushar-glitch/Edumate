import React from 'react'
import Navbar from '../../utils/Navbar/Navbar'
import AdmBar from '../admin_bar/AdmBar'
import './assign_fac.css'
const Assign_fac = () => {
  return (
    <>
      <Navbar />
      <AdmBar/>
      <div id="assign_fac_bg">
        <div id="assign_fac_heading_box"><span id='assign_fac_heading'>Assign Faculty</span></div>
        <div id="branch_dropdown">
          <select name="" id="">
            <option value="">CSE-1</option>
            <option value="">CSE-2</option>
            <option value="">CSE-3</option>
            <option value="">CSE AIML-1</option>
            <option value="">CSE AIML-2</option>
            <option value="">ECE</option>
            <option value="">ME</option>
          </select>
        </div>
        <div id="add_fac"><button id="add_faculty">+Assign Faculty</button></div>
        <div id="class-id">Class ID  <span id='class_id_dropdown'><select name=""><option value="">200001</option></select></span></div>
        <div id="assign_subject">Subject  <span id='subject_dropdown'><select name=""><option value="">CSE</option></select></span></div>
        <div id="assign_faculty">Faculty <span id='faculty_dropdown'><select name=""><option value="">Aman</option></select></span></div>
        <div id="assign_time_heading_box"><span id='assign_time_heading'>Assign Times</span></div>
        <div id="time">Time</div>
        <div id="day">Day</div>
        <div id="assign_card1"></div>
      </div>
    </>
  )
}

export default Assign_fac
