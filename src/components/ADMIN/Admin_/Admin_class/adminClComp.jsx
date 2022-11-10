import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AddComponentField from "../../Admin_department/component_innerField";

function AdminClComponent (props){

    const adminAccessToken = sessionStorage.getItem("Admin_access_token");
    console.log(adminAccessToken);
    const config = {
        headers:{
           Authorization: `Bearer ${adminAccessToken}`
        }
     }
     const [cardsCArray,setCardsCArray] = useState([]);

    useEffect(()=>{
        axios.get("https://erp-edumate.herokuapp.com/api/user/admin/classes/",{id:"ALL" } ,config).
        then((res)=>{
            console.log(res);
            setCardsCArray(res.data[0])
            sessionStorage.setItem("Admin_class_array",JSON.stringify(cardsCArray))
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    function createAdminUpdate (cardsCArray){
        return <AddComponentField value={cardsCArray.name} />
    }
    return <>
<div className="AdminAddOutBlock">
    <div className="department">{props.left}</div>
    <div className="addDept" onClick={props.RightClick}>{props.right}</div>
    <div className="deptList">
   {cardsCArray.map(createAdminUpdate)}
{/* <AddComponentField /> */}
    </div>
</div>
    </>
}
export default AdminClComponent;