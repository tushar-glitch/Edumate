import React from "react";

function RowComponent (props){
return <>
<div className="propTable">
    <table>
        <tr className="propsRow">
        <td className="propsCode">{props.code}</td>
            <td>{props.name}</td>
            <td>{props.attend}</td>
            <td>{props.total}</td>
            <td></td>
        </tr>
    </table>
    </div>
</>
}
export default RowComponent;