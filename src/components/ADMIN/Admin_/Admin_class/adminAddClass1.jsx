import React from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
 function AddNewClassComp (){
    const [className,setClassName] = useState("");
    function handleClassName(e){
        setClassName(e.target.value);
    }
    const [AdminClAdd,setAdminClAdd] = useState(sessionStorage.getItem("Admin_class_array"))
const adminAccessToken = sessionStorage.getItem("Admin_access_token");
console.log(adminAccessToken);
const config = {
    headers:{
       Authorization: `Bearer ${adminAccessToken}`
    }
 }
 const addDeptInfo = {
    id:"S20",
    year:"22",
    section:"18",
    department:"en"
 }
 const navigate = useNavigate();
    function handlePostClassApi(){
        console.log("ahsj,")
        axios.post("https://erp-edumate.herokuapp.com/api/user/admin/classes/",addDeptInfo,config).
        then((res)=>{
            console.log(res.data);
            setAdminClAdd(AdminClAdd=>[...AdminClAdd,addDeptInfo])
            navigate("/adminAdd")
        }).catch((err)=>{
            console.log(err);
        })
    }
    function handleCancelClassApi(){
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
    <div className="addInnerBlock">
        <div className="add-new-dept">Add New Class</div>
        <label for="dept-name" className="dept_head">Class Name</label><br />
        <input type="text" id="dept-name" className="dept_head_input" value={className} onChange={handleClassName} />
        <button className="cancel_add_dept" onClick={handlePostClassApi}>Continue</button>
        <button className="done_add_dept" onClick={handleCancelClassApi}>Cancel</button>
    </div>
 </div>
    </>
 }
 export default AddNewClassComp;