import React from "react";
 function AddClassField (props){
    return <>
  <div className="editClassMain">
    <div className="editAdminDept" onClick={props.editClass}><span id="plusCl">+</span></div>
<div className="editWhiteCompField2"  id="editClMain">
<div className="dltAdminDept" onClick={props.dltClass}><span id="minusClass">-</span></div>
<p id="classNameEdit">{props.value}</p></div>
<div className="classAddDept">
<p id="deptClass">{props.depart}</p></div>
</div>
    </>
 }
 export default AddClassField;