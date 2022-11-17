import React from "react";
function UpdateCard (props){
    return <>
<div className="updateCardRowS">
    <div className="updateCdTitle">{props.title}</div>
    <div className="updateCdDesc">{props.desc}</div>
</div>
    </>
}
export default UpdateCard;