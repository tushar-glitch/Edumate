import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddClassField from "./classInputField";

function AdminClComponent (){

    const adminAccessToken = localStorage.getItem("Admin_access_token");
    console.log(adminAccessToken);
    const config = {
        headers:{
           Authorization: `Bearer ${adminAccessToken}`
        }
     }
        console.log(adminAccessToken);
    //  const [cardsCArray,setCardsCArray] = useState([]);
     const [cardsCObj, setCardsCObj] = useState({});

    useEffect(()=>{
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/classes/"+"ALL",{
            headers:{
                Authorization: `Bearer ${adminAccessToken}`
             }}).
        then((res)=>{
            console.log(res);
            console.log(res.data)
            setCardsCObj(res.data)
            console.log(cardsCObj)
            console.log(Object.keys(res.data))
            console.log(res.data[Object.keys(res.data)[0]])
            localStorage.setItem("Admin_class_object",JSON.stringify(cardsCObj))
        }).catch((err)=>{
            console.log(err)
        })
    },[])
   
    const navigate = useNavigate();
    function handleEditClass(id,year,section,dept){
localStorage.setItem("EditClassId",id);
localStorage.setItem("EditClassYear",year);
localStorage.setItem("EditClassSection",section);
localStorage.setItem("EditClassDepartment",dept);
navigate("/editClass");
    }
    function handleDltClass(id){
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
    function createAdminUpdate (cardsCObj){
        return <AddClassField editClass={()=>handleEditClass(Object.keys(cardsCObj),cardsCObj[Object.keys(cardsCObj)[0]] ,cardsCObj[Object.keys(cardsCObj)[1]],cardsCObj[Object.keys(cardsCObj)[2]])} dltClass={()=>handleDltClass(Object.keys(cardsCObj))} value={Object.keys(cardsCObj)}
         />
    }
    
    function addClass(){
        navigate("/adminAddClass")
    }
    return <>
<div className="AdminAddOutBlock">
    <div className="department">CLASSES</div>
    <div className="addDept" onClick={addClass}>ADD CLASSES</div>
    <div className="deptList">
   {Object.keys(cardsCObj).map(createAdminUpdate)}
    </div>
</div>
    </>
}
export default AdminClComponent;