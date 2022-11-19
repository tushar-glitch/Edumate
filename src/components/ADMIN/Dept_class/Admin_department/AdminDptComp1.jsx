import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AddComponentField from "./component_innerField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/fontawesome-free-solid"
import * as ReactBootStrap from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Instance from "../../../utils/axiosInterceptors";
 
function AdminComponent (){
const navigate = useNavigate();
    const adminAccessToken = sessionStorage.getItem("Admin_access_token");
   
    console.log(adminAccessToken);
    const config = {
        headers:{
           Authorization: `Bearer ${adminAccessToken}`
        }
     }
     const [cardsDArray,setCardsDArray] = useState([])
     const [loadBool,setLoadBool] = useState(false)
    useEffect(()=>{
        setLoadBool(true)
        const url = "https://erp-edumate.herokuapp.com/api/user/admin/departments/";
    axios.get(url+"ALL/",{
            headers:{
                Authorization: `Bearer ${adminAccessToken}`
             }}).
        then((res)=>{
            console.log(res);
            setCardsDArray(res.data)
            console.log(cardsDArray.id);
            console.log(cardsDArray)
            setLoadBool(false)
            sessionStorage.setItem("Admin_department_array",JSON.stringify(cardsDArray))
      
        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.msg,{
                position: "top-center",
              })
            setLoadBool(false)
        })
    },[])
    console.log(cardsDArray)
    function handleAdEditDept(id,name){
sessionStorage.setItem("editDeptId" ,id);
sessionStorage.setItem("editDeptName",name);
navigate("/editDeptCom");
    }
    const [show,setShow] = useState(false)
    function toggle_dropdown() {
        if (!show) {
            setShow(true);
            document.getElementById('dDEditValue').style.display = "block";
        }
        else {
            setShow(false)
            document.getElementById('dDEditValue').style.display = "none";
        }
    }
    function handleDeleteDept(id){
        console.log(id);
        setLoadBool(true)
        const url = `https://erp-edumate.herokuapp.com/api/user/admin/departments/`;
        axios.delete((url+id),{
            headers:{
               Authorization: `Bearer ${adminAccessToken}`
            }
         })
        .then((res)=>
        console.log(res))
        setLoadBool(false)
        .catch((err)=>{
            console.log(err)
            setLoadBool(false)
        })
    }
        function createAdminUpdate (cardsDArray){
        return <AddComponentField editDept={()=>handleAdEditDept(cardsDArray.id, cardsDArray.name)} dltDept={()=>handleDeleteDept(cardsDArray.id)} value={cardsDArray.name} toggle={()=>toggle_dropdown()}/>
    }

    function addDepartment (){
        console.log("hsakjjn.");
navigate("/adminAddNew");
    }
    useEffect(()=>{
        if(loadBool)
        document.body.style.opacity="0.5"
        else
        document.body.style.opacity="1"
      },[loadBool])
    return <>
<div className="AdminAddOutBlock">
    <div type="button" className="department">DEPARTMENT</div>
    <div type="button" className="addDept" onClick={addDepartment}><span id="plus">+</span>ADD DEPARTMENT</div>
    <div className="deptList">
  {cardsDArray.map(createAdminUpdate)}
    </div>
    {/* <FontAwesomeIcon icon={faPlus} id="addIcon" /> */}
</div>
<ToastContainer />
  {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
    </>
}
export default AdminComponent;