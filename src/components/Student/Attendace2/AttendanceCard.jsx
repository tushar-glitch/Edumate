import React from "react";

function SAttendCard(props){
    return <>
    <table className="tableCard">
    <tr>
        <td id="SCdMonth">{props.month}</td>
        <td id="SCdDate">{props.date}</td>
        <td id="SCdStatus">{props.status}</td>
    </tr>
    </table>
{/* <div className="FCardRow">
<span >{props.month}</span>
<span >{props.date}</span>
<span >{props.status}</span>
</div> */}
    </>
}
export default SAttendCard;