import React from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import AdmBar from "../../admin_bar/AdmBar";
 function EditDeptComp (){
    const editDeptIdNew = sessionStorage.getItem("editDeptId");
    const editDeptNameNew = sessionStorage.getItem("editDeptName");
    const [deptName,setDeptName] = useState(editDeptNameNew);
    const [deptId,setDeptId] = useState(editDeptIdNew);
    function handleDeptName(e){
        setDeptName(e.target.value);
    }
    function handleDeptId(e){
        setDeptId(e.target.value);
    }
    const [AdminDeptArr,setAdminDeptArr] = useState(sessionStorage.getItem("Admin_department_array"))
const adminAccessToken = sessionStorage.getItem("Admin_access_token");
console.log(adminAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${adminAccessToken}`
    }
 }
 const addDeptInfo = {
    id:deptId,
    name:deptName
 }
 const navigate = useNavigate();
    function handlePostEditClassApi(){
        console.log("ahsj,")
        axios.put("https://erp-edumate.herokuapp.com/api/user/admin/departments/"+deptId+"/",addDeptInfo,config).
        then((res)=>{
            console.log(res.data);
            setAdminDeptArr(AdminDeptArr=>[...AdminDeptArr,addDeptInfo])
            console.log(AdminDeptArr)
            navigate("/adminAdd")
        }).catch((err)=>{
            console.log(err);
        })
    }
    function handleCancelEditClassApi(){
        const url = "https://erp-edumate.herokuapp.com/api/user/admin/departments/";
        axios.get(url+"ALL",{
            headers:{
                Authorization: `Bearer ${adminAccessToken}`
             }}).
        then((res)=>{
            console.log(res.data);
            setAdminDeptArr(AdminDeptArr);
            navigate("/adminAdd")
        }).catch((err)=>{
            console.log(err);
        })
    }
    return <>
    <AdmBar />
 <div className="updateOuterDiv" id="DEPART">
    <div className="addInnerBlock">
        <div className="add-new-dept">Edit Department</div>
        <label for="dept-name" className="dept_head">Department Name</label><br />
        <input type="text" id="dept-name2" className="dept_head_inputD" value={deptName} onChange={handleDeptName} /><br />
        <label for="dept-id" className="dept_head_id">Department Id</label><br />
        <input type="text" id="dept-id" className="dept_head_id_input" value={deptId} onChange={handleDeptId} /><br />
        <button className="cancel_add_dept" onClick={handlePostEditClassApi}>Continue</button>
        <button className="done_add_dept" onClick={handleCancelEditClassApi}>Cancel</button>
    </div>
 </div>
    </>
 }
 export default EditDeptComp;