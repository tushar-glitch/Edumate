import React from "react";

function ProfileInputField(props){
return (<>
    <input type={props.type} className={props.class} value={props.value} onChange={props.onChange}/>
</>)
}
export default ProfileInputField;