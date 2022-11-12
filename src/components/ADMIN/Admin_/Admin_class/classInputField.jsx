import React from "react";
 function AddClassField (props){
    return <>
  <div className="editClassMain">
    <p onClick={props.toggle} className="editted">edit</p>
<div className="editWhiteCompField">{props.value}</div>
<div id="dDEditValue">
<div className="editAdminDept" onClick={props.editClass}>EDIT</div>
<div className="dltAdminDept" onClick={props.dltClass}>DELETE</div>
</div>
</div>
    </>
 }
 export default AddClassField;