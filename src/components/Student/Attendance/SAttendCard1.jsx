import React from "react";
function SCard1(props){
   var progressBarWidth= props.attendPer;
   console.log(progressBarWidth)
   return <>
<div className="stA1CardRow">
<span id="SCdCode">{props.code}</span>
<span id="SCdSub" onClick={props.navigator}>{props.sub}</span>
<span id="SCdAttend">{props.attendC}</span>
<span id="SCdTotal">{props.totalC}</span>
<span id="SCdAttPer" >
<div className="progress">
        <div className="progressBar"></div>
    </div>
    {/* <p style={{width:{props.attendPer}}} ></p> */}
<p className="pBarWd" style={{width:{progressBarWidth}}}>{props.attendPer}</p>
</span>
</div>

    </>
}
export default SCard1;
