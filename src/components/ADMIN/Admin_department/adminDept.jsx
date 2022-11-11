import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminComponent from "./AdminDptComp";
import AdminClComponent from "../Admin_/Admin_class/adminClComp";
import "./admin_Dept.css";
function AdminAddDeptClass (){
    const navigate = useNavigate();
    function addDepartment (){
        console.log("hsakjjn.");
navigate("/adminAddNew");
    }
    function addClass(){
        navigate("/adminAddClass")
    }
    return <>
<div className="adminAddOuterBlock">
<div className="adminBlueRow">Add Department and Classes</div>
    <AdminComponent RightClick={()=>addDepartment()} left="Department" right="Add Department" />
    <AdminClComponent RightClick={()=>addClass()} left="Classes" right="Add Class" />
</div>
    </>
}
export default AdminAddDeptClass;