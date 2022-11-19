import React from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import AdmBar from "../../admin_bar/AdmBar";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
 function AddNewDeptComp (){
    const [deptName,setDeptName] = useState("");
    const [deptId,setDeptId] = useState("");
    function handleDeptName(e){
        setDeptName(e.target.value);
    }
    function handleDeptId(e){
        setDeptId(e.target.value);
    }
    const [AdminDeptArr,setAdminDeptArr] = useState(localStorage.getItem("Admin_department_array"))
const adminAccessToken = sessionStorage.getItem("Admin_access_token");
const [loadBool, setLoadBool] = useState(false)
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
 const [newDeptErrMsg, setNewDeptErrMsg] = useState([]);
 const navigate = useNavigate();
    function handlePostDeptApi(){
        setLoadBool(true)
        console.log("ahsj,")
        axios.post("https://erp-edumate.herokuapp.com/api/user/admin/departments/0/",addDeptInfo,config).
        then((res)=>{
            console.log(res);
            toast.success("New Department Added",{
                position: "top-center",
              })
            console.log(res.data);
            setLoadBool(false)
            navigate("/adminAdd")
            setAdminDeptArr(AdminDeptArr=>[...AdminDeptArr,addDeptInfo])
            console.log(AdminDeptArr)
        }).catch((err)=>{
            console.log(err);
            setLoadBool(false)
            toast.error(err.response.data.id[0],{
                position: "top-center",
              })
            console.log(err.response.data.id[0])
        })
    }
    function handleCancelDeptApi(){
        setLoadBool(true)
        const url = "https://erp-edumate.herokuapp.com/api/user/admin/departments/"
        axios.get(url+"ALL",{headers:{
            Authorization: `Bearer ${adminAccessToken}`
         }}).
        then((res)=>{
            console.log(res.data);
            setLoadBool(false)
            setAdminDeptArr(AdminDeptArr);
            navigate("/adminAdd")
        }).catch((err)=>{
            console.log(err);
            setLoadBool(false)
            toast.error(err.response.data.id[0],{
                position: "top-center",
              })
        })
    }
    return <>
    <AdmBar />
 <div className="updateNewCardDiv">
    <div className="addInnerBlock">
        <div className="add-new-dept">Add New Department</div>
        <label for="dept-name" className="dept_head">Department Name</label><br />
        <input type="text" id="dept-nameD" className="dept_head_inputD" value={deptName} onChange={handleDeptName} /><br />
        <label for="dept-id" className="dept_head_id">Department Id</label><br />
        <input type="text" id="dept-id" className="dept_head_id_input" value={deptId} onChange={handleDeptId} /><br />
        <p className="newDeptErr">{newDeptErrMsg}</p>
        <button className="cancel_add_dept" onClick={handlePostDeptApi}>Continue</button>
        <button className="done_add_dept" onClick={handleCancelDeptApi}>Cancel</button>
    </div>
 
 </div>
 {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
 <ToastContainer />
    </>
 }
 export default AddNewDeptComp;