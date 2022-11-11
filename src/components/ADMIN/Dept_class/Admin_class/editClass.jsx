import React from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./adminAddClass.css";
 function EditClassComp (){
    const editClass =localStorage.getItem("EditClassId");
const editDepart = localStorage.getItem("EditClassYear");
const editYear = localStorage.getItem("EditClassSection");
const editSect = localStorage.getItem("EditClassDepartment");
    const [className,setClassName] = useState(editClass);
    const [deptName,setDeptName] = useState(editDepart);
    const [yearName,setYearName] = useState(editYear);
    const [secName,setSecName] = useState(editSect);
    function handleClassName(e){
        setClassName(e.target.value);
    }
    function handleDeptName(e){
        setDeptName(e.target.value);
    }
    function handleYearName(e){
        setYearName(e.target.value);
    }
    function handleSecName(e){
        setSecName(e.target.value);
    }
    const [AdminClAdd,setAdminClAdd] = useState(localStorage.getItem("Admin_class_array"))
const adminAccessToken = localStorage.getItem("Admin_access_token");
console.log(adminAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${adminAccessToken}`
    }
 }
 const addDeptInfo = {
    id:className,
    year:yearName,
    section:secName,
    department:deptName
 }
 const navigate = useNavigate();
    function handlePostEdClassApi(){
        console.log("ahsj,")
        axios.put("https://erp-edumate.herokuapp.com/api/user/admin/classes/",addDeptInfo,config).
        then((res)=>{
            console.log(res.data);
            setAdminClAdd(AdminClAdd=>[...AdminClAdd,addDeptInfo])
            navigate("/adminAdd")
        }).catch((err)=>{
            console.log(err);
        })
    }
    function handleCancelEdClassApi(){
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/classes/",{id:"ALL"},config).
        then((res)=>{
            console.log(res.data);
            setAdminClAdd(AdminClAdd);
            navigate("/adminAdd")
        }).catch((err)=>{
            console.log(err);
        })
    }
    return <>
 <div className="updateOuterDiv">
    <div className="addInnerBlockClass">
        <div className="add-new-dept">Add New Class</div>
        <label for="dept-name" className="dept_head" id="dept">Department</label><br />
        <input type="text" id="dept-name" className="dept_head_input" value={deptName} onChange={handleDeptName} /><br />
        <label for="year-name" className="year_head">Year</label><br />
        <input type="text" id="year-name" className="class_year_input" value={yearName} onChange={handleYearName} /><br />
        <label for="sec-name" className="sec_head">Section</label><br />
        <input type="text" id="sec-name" className="sec_head_input" value={secName} onChange={handleSecName} /><br />
        <label for="class-name" className="class_head">Class ID</label><br />
        <input type="text" id="class-name" className="class_head_input" value={className} onChange={handleClassName} /><br />
        <button className="cancel_add_dept" id="class_add" onClick={handlePostEdClassApi}>Continue</button>
        <button className="done_add_dept" id="class_cancel" onClick={handleCancelEdClassApi}>Cancel</button>
    </div>
 </div>
    </>
 }
 export default EditClassComp;