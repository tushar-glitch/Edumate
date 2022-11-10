import React from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
 function AddNewDeptComp (){
    const [deptName,setDeptName] = useState("");
    function handleDeptName(e){
        setDeptName(e.target.value);
    }
    const [AdminAdd,setAdminAdd] = useState(sessionStorage.getItem("Admin_department_array"))
const adminAccessToken = sessionStorage.getItem("Admin_access_token");
console.log(adminAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${adminAccessToken}`
    }
 }
 const addDeptInfo = {
    id:"me",
    name:deptName
 }
 const navigate = useNavigate();
    function handlePostDeptApi(){
        console.log("ahsj,")
        axios.post("https://erp-edumate.herokuapp.com/api/user/admin/departments/",addDeptInfo,config).
        then((res)=>{
            console.log(res.data);
            setAdminAdd(AdminAdd=>[...AdminAdd,addDeptInfo])
            console.log(AdminAdd)
            navigate("/adminAdd")
        }).catch((err)=>{
            console.log(err);
        })
    }
    function handleCancelDeptApi(){
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/departments",{id:"ALL"},config).
        then((res)=>{
            console.log(res.data);
            setAdminAdd(AdminAdd);
            navigate("/adminAdd")
        }).catch((err)=>{
            console.log(err);
        })
    }
    return <>
 <div className="updateOuterDiv">
    <div className="addInnerBlock">
        <div className="add-new-dept">Add New Department</div>
        <label for="dept-name" className="dept_head">Department Name</label><br />
        <input type="text" id="dept-name" className="dept_head_input" value={deptName} onChange={handleDeptName} />
        <button className="cancel_add_dept" onClick={handlePostDeptApi}>Continue</button>
        <button className="done_add_dept" onClick={handleCancelDeptApi}>Cancel</button>
    </div>
 </div>
    </>
 }
 export default AddNewDeptComp;