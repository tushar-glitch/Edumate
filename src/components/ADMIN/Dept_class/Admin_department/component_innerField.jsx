import React from "react";
 function AddComponentField (props){
    return <>
    <div className="editClassMain">
    <p onClick={props.toggle} className="editted">edit</p>
<div className="editWhiteCompField">{props.value}</div>
<div id="dDEditValue">
<div className="editAdminDept" onClick={props.editDept}>EDIT</div>
<div className="dltAdminDept" onClick={props.dltDept}>DELETE</div>
</div>
</div>
    </>
 }
 export default AddComponentField;