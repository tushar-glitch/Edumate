import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddClassField from "./classInputField";
import * as ReactBootStrap from "react-bootstrap"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function AdminClComponent (){

    const adminAccessToken = sessionStorage.getItem("Admin_access_token");
    console.log(adminAccessToken);
    const config = {
        headers:{
           Authorization: `Bearer ${adminAccessToken}`
        }
     }
        console.log(adminAccessToken);
     const [cardsCArray,setCardsCArray] = useState([]);
     const [loadBool,setLoadBool]=useState(false)

     /*year, departmentname, dept id,section, class id*/
     /*dept id , class id , sec,year POST*/
     /* PUT url:class id same**/



    useEffect(()=>{
        setLoadBool(true)
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/classes/"+"ALL/",{
            headers:{
                Authorization: `Bearer ${adminAccessToken}`
             }}).
        then((res)=>{
            console.log(res);
            console.log(res.data);
            setLoadBool(false)
            // console.log(res.data[0]);
            setCardsCArray(res.data)
            console.log(cardsCArray);
            // console.log(cardsCObj)
            // console.log(Object.keys(res.data))
            // console.log(res.data[Object.keys(res.data)[0]])
            // localStorage.setItem("Admin_class_object",JSON.stringify(cardsCObj))
        }).catch((err)=>{
            console.log(err)
            setLoadBool(false)
            // toast.error(err.response.data.DOB[0],{
                // position: "top-center",
            //   })
        })
    },[])
    const [show,setShow] = useState(false)
    function toggle_dropdown() {
        console.log("dhsb");
        if (!show) {
            setShow(true);
            document.getElementById('dDEditValue').style.display = "block";
        }
        else {
            setShow(false)
            document.getElementById('dDEditValue').style.display = "none";
        }
    }
    const navigate = useNavigate();
    function handleEditClass(class_id,section,year){
sessionStorage.setItem("EditClassId",class_id);
sessionStorage.setItem("EditClassSection",section);
sessionStorage.setItem("EditClassYear",year);
navigate("/editClass");
    }
    function handleDltClass(id){
        console.log(id);
        const url = `https://erp-edumate.herokuapp.com/api/user/admin/classes/`;
        axios.delete((url+id),{
            headers:{
               Authorization: `Bearer ${adminAccessToken}`
            }
         })
        .then((res)=>{
        console.log(res)
        setLoadBool(false)
        window.location.reload()
    })
        .catch((err)=>{
            console.log(err)
            setLoadBool(false)
        })
    }
    function createAdminUpdate (cardsCArray){
        return <AddClassField value={cardsCArray[3]} depart={cardsCArray[1]} toggled={()=>toggle_dropdown()} editClass={()=>handleEditClass(cardsCArray[4] ,cardsCArray[3] ,cardsCArray[0])} dltClass={()=>handleDltClass(cardsCArray[4])}
         />
    }
    
    function addClass(){
        navigate("/adminAddClass")
    }
    useEffect(()=>{
        if(loadBool)
        document.body.style.opacity="0.5"
        else
        document.body.style.opacity="1"
      },[loadBool])
    return <>
<div className="AdminAddOutBlock">
    <div className="department" type="button">CLASSES</div>
    <div className="addDept" type="button" onClick={addClass}><span id="plus">+</span>ADD CLASSES</div>
    <div className="classListNew">
    {cardsCArray.map(createAdminUpdate)}
    </div>
</div>
  {loadBool? (<ReactBootStrap.Spinner animation="border" id="apiloader"/>) :null}
    </>
}
export default AdminClComponent;