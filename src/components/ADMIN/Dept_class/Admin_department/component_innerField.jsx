import React from "react";
 function AddComponentField (props){
    return <>
    <div className="editClassMain">
    {/* <p onClick={props.toggle} className="editted"><span id="threeDot">...</span></p> */}
<div className="editWhiteCompField"><p id="departName">{props.value}</p></div>
<div className="editAdminDept" onClick={props.editDept}><span id="threeDot1">+</span></div>
<div className="dltAdminDept" onClick={props.dltDept}><span id="threeDot2">-</span></div>
</div>
    </>
 }
 export default AddComponentField;