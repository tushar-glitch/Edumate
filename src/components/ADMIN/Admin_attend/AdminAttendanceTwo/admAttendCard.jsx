import React from "react";

function AdmAttendCard (){
    return <>
 <div id="admRow">
            <span id="admSname">name</span>
            <span id="admSno">Number</span>
            <span id="admSPer">
            <div className="progressAdm">
        {/* <div className="progressBar" style={{width:{progressBarWidth}}}></div> */}
    </div>
    {/* <p style={{width:{props.attendPer}}} ></p> */}
{/* <p className="pBarWd" >{props.attendPer}</p> */}
            </span>
        </div>
    </>
}
export default AdmAttendCard;