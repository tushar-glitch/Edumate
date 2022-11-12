import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminComponent from "./AdminDptComp1";
import AdminClComponent from "../Admin_/Admin_class/adminClComp";
import AddComponentField from "./component_innerField";
import "./admin_Dept.css";
function AdminAddDeptClass (){
    return <>
<div className="adminAddOuterBlock">
<div className="adminBlueRow">Add Department and Classes</div>
    <AdminComponent />
    <AdminClComponent />
</div>
    </>
}
export default AdminAddDeptClass;