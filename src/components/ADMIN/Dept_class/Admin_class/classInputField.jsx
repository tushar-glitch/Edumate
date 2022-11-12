import React from "react";
 function AddClassField (props){
    return <>
  <div className="editClassMain">
    {/* <p onClick={props.toggled} className="editted"><span id="threeDot">...</span></p> */}
<div className="editWhiteCompField">{props.value}</div>
<div className="classAddDept">{props.depart}</div>
{/* <div id="dDEditValue"> */}
<div className="editAdminDept" onClick={props.editClass}><span id="threeDot1">+</span></div>
<div className="dltAdminDept" onClick={props.dltClass}><span id="threeDot2">-</span>
</div>
</div>
{/* // </div> */}
    </>
 }
 export default AddClassField;