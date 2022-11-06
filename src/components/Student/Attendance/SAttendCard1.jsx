import React from "react";
function SCard1(props){
    return <>
<div className="FCardRow">
<span id="SCdCode">{props.code}</span>
<span id="SCdSub">{props.sub}</span>
<span id="SCdAttend">{props.attendC}</span>
<span id="SCdTotal">{props.totalC}</span>
<span id="SCdAttPer">{props.attendPer}</span>
</div>

    </>
}
export default SCard1;