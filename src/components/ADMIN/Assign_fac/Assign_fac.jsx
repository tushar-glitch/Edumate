import React from 'react'
import {useState , useEffect} from "react"
import Navbar from '../../utils/Navbar/Navbar'
import AdmBar from '../admin_bar/AdmBar'
import axios from 'axios'
import './assign_fac.css'
const Assign_fac = () => {
  const adminAccessToken = sessionStorage.getItem("Admin_access_token");
  console.log(adminAccessToken);
  const config = {
      headers:{
         Authorization: `Bearer ${adminAccessToken}`
      }
   }
   const [departId, setDepartId] = useState("");
   function handleDepart(e){
   setDepartId(e.target.value);
   }
   const [classId, setClassId] = useState("");
 function handleClass(e){
    setClassId(e.target.value);
 }
   console.log(departId)
   sessionStorage.setItem("Department_Id",departId)
  const [deptBool,setDeptBool] = useState(false)
      const [deptList,setDeptList] = useState([]);
      useEffect(()=>{
          axios.get("https://erp-edumate.herokuapp.com/api/user/admin/departments/"+"ALL/",config)
          .then((res)=>{
              console.log(res.data);
              setDeptList(res.data);
              setDeptBool(true)
          })
          .catch((err)=>{
              console.log(err);
              setDeptBool(false)
          })
      },[])
      console.log(departId)

      const [classList, setClassList] = useState([]);
      function handleClassInDept(){
          if(deptBool){
          axios.get("https://erp-edumate.herokuapp.com/api/user/admin/classesindepartment/"+departId+"/",config).
          then((res)=>{
              console.log(res.data);
              setClassList(res.data)
          }).catch((err)=>{
              console.log(err);
          })
      }
      }
      
      console.log(classList);
      const [facList,setFacList] = useState([])
      function handleFacInClass(){
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/studentattendancelist/"+departId+"/",config)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setFacList(res.data);
        }).catch((err)=>{
            console.log(err);
        })
     }
      
     function DropDownClassList (classList){
         return <>
              <option  id="class-name" className="class_head_input" value={classList[0]}>{classList[0]}</option>
         </>
     }
  
      function DropdownDeptList (deptList){
        return <>
            <option  id="dept-name" className="dept_head_input" value={deptList.id}>{deptList.name}</option>
        </>
             }

         const subjectList = localStorage.getItem("Subject-array")
         function DropDownFacList (facList){
          return <>
              <option  id="dept-name" className="dept_head_input" >{subjectList[0]}</option>
          </>
               }
  

  return (
    <>
      <Navbar />
      <AdmBar/>
      <div id="assign_fac_bg">
        <div id="assign_fac_heading_box"><span id='assign_fac_heading'>Assign Faculty</span></div>
        <div id="add_fac">+&ensp;Assign Faculty</div>
        <select id="dropdownDept" onChange={handleDepart} onClick={handleClassInDept}>
        <option >Departments</option>
        {deptList.map(DropdownDeptList)}
        </select>
        <div id="class-id">Class ID </div>
        <select id="dropdownClass" onChange={handleClass} onClick={handleFacInClass}>
        <option >Classes</option>
        {classList.map(DropDownClassList) }
        </select>

        <div id="assign_subject">Faculty</div>
        <select id="dropdownSubject" >
        <option >Faculty</option>
        {/* {subjectList.map(DropDownSubjectList) } */}
        </select>
        {/* <div id="assign_faculty">Faculty</div>
        <select id="dropdownFaculty" >
        <option >Classes</option>
        {classList.map(DropDownClassList) }
        </select> */}
        <div id="assign_time_heading_box"><span id='assign_time_heading'>Assign Times</span></div>
        <div id="time-date-row"><span id="row-time">Time</span><span id="row-day">Day</span></div>
        {/* <div id="assign_time_heading_box"><span id='assign_time_heading'>Assign Times</span></div> */}
        {/* <div id="time">Time</div> */}
        {/* <div id="day">Day</div> */}
        {/* <div id="assign_card">

        </div> */}
      </div>
    </>
  )

      }
export default Assign_fac
