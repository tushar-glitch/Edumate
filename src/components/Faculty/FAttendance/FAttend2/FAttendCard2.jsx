import React from "react";
function FCard2(props){
    return <>
<div className="FCardRow">
<span id="FCdRoll">{props.roll}</span>
<span id="FCdStudent">{props.stNo}</span>
<span id="FCdName">{props.name}</span>
<span id="FCdAttend">{props.attend}</span>
</div>

    </>
}
export default FCard2;