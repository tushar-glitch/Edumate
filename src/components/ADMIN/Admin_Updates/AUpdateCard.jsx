
import React from "react";
import "./adminCard.css";
function AUpdateCard (props){
    return <>
<div className="updateCardRow">
<div className="updateDelete">DELETE</div>
<div className="updateEdit" onClick={props.edit}>EDIT &emsp;</div>
    <div className="updateCdTitle">{props.title}</div>
    <div className="updateCdDesc">{props.desc}</div>
</div>
    </>
}
export default AUpdateCard;