import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminComponent from "./Admin_department/AdminDptComp1";
import AdminClComponent from "./Admin_class/adminClComp";
import "../Dept_class/Admin_department/admin_Dept.css";
import AdmBar from "../admin_bar/AdmBar";

function AdminAddDeptClass (){
    return <>
    <AdmBar />
<div className="adminAddOuterBlock">
<div className="adminBlueRow">Add Department and Classes</div>
    <AdminComponent />
    <AdminClComponent />
</div>
    </>
}
export default AdminAddDeptClass;