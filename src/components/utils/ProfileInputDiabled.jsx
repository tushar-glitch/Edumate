import React from "react";

function ProfileInputDisabled(props){
return (<>
    <input type={props.type} className={props.class} value={props.value} disabled />
</>)
}
export default ProfileInputDisabled;