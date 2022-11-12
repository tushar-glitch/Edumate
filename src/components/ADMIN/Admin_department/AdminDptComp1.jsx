import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AddComponentField from "./component_innerField";

function AdminComponent (){
const navigate = useNavigate();
    const adminAccessToken = localStorage.getItem("Admin_access_token");
   
    console.log(adminAccessToken);
    const config = {
        headers:{
           Authorization: `Bearer ${adminAccessToken}`
        }
     }
     const [cardsDArray,setCardsDArray] = useState([]);

    useEffect(()=>{
        const url = "https://erp-edumate.herokuapp.com/api/user/admin/departments/";
        axios.get(url+"ALL",{
            headers:{
                Authorization: `Bearer ${adminAccessToken}`
             }}).
        then((res)=>{
            console.log(res);
console.log(res.data[0])
            setCardsDArray(res.data)
            console.log(cardsDArray)
            localStorage.setItem("Admin_department_array",JSON.stringify(cardsDArray))
      
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(cardsDArray)
    function handleAdEditDept(id,name){
localStorage.setItem("editDeptId" ,id);
localStorage.setItem("editDeptName",name);
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
        const url = `https://erp-edumate.herokuapp.com/api/user/admin/departments/`;
        axios.delete((url+id),{
            headers:{
               Authorization: `Bearer ${adminAccessToken}`
            }
         })
        .then((res)=>
        console.log(res))
        .catch((err)=>{
            console.log(err)
        })
    }
        function createAdminUpdate (cardsDArray){
        return <AddComponentField editDept={()=>handleAdEditDept(cardsDArray.id, cardsDArray.name)} dltDept={()=>handleDeleteDept(cardsDArray.id)} value={cardsDArray.name} toggle={()=>toggle_dropdown()}/>
    }

    function addDepartment (){
        console.log("hsakjjn.");
navigate("/adminAddNew");
    }

    return <>
<div className="AdminAddOutBlock">
    <div className="department">DEPARTMENT</div>
    <div className="addDept" onClick={addDepartment}>ADD DEPARTMENT</div>
    <div className="deptList">
  {cardsDArray.map(createAdminUpdate)}
    </div>
</div>
    </>
}
export default AdminComponent;