import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddComponentField from "./component_innerField";

function AdminComponent (props){

    const adminAccessToken = sessionStorage.getItem("Admin_access_token");
    console.log(adminAccessToken);
    const config = {
        headers:{
           Authorization: `Bearer ${adminAccessToken}`
        }
     }
     const [cardsDArray,setCardsDArray] = useState([]);

    useEffect(()=>{
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/departments/",{id:"ALL"},config).
        then((res)=>{
            console.log(res);
            setCardsDArray(res.data[0])
            console.log(cardsDArray)
            sessionStorage.setItem("Admin_department_array",JSON.stringify(cardsDArray))
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    function createAdminUpdate (cardsDArray){
        return <AddComponentField value={cardsDArray.name} />
    }
    return <>
<div className="AdminAddOutBlock">
    <div className="department">{props.left}</div>
    <div className="addDept" onClick={props.RightClick}>{props.right}</div>
    <div className="deptList">
   {cardsDArray.map(createAdminUpdate)}
{/* <AddComponentField /> */}
    </div>
</div>
    </>
}
export default AdminComponent;