import React from "react";
function FCard2(props) {
    function handleAbsent() {
        document.getElementById("present1").style.backgroundColor = "white";
        document.getElementById("absent1").style.backgroundColor = "#FF939E";
    }
    function handlePresent() {
        document.getElementById("present1").style.backgroundColor = "#62DDB0";
        document.getElementById("absent1").style.backgroundColor = "white";
    }
    var a = props.present
    console.log(a);
    return <>
        <div className="FCardRow">
            <span id="FCdRoll">{props.roll}</span>
            <span id="FCdStudent">{props.id}</span>
            <span id="FCdName">{props.name}</span>
            {/* <div id="present">P</div>
            <div id="absent">A</div> */}
            {/* {a?(document.getElementById("present1").style.backgroundColor = "#62DDB0"):(document.getElementById("absent1").style.backgroundColor = "#FF939E")} */}
            <span id="present1" onClick={props.handlePresent}>P</span>
            <div id="absent1" onClick={props.handleAbsent}>A</div>
        </div>
    </>
}
export default FCard2;