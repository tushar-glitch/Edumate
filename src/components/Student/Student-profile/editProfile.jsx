import React, { useState } from "react";
import Student from "./student";

 function EditProfile (props) {
    const nam = props.name;
    const [name,setName]=useState();
    function handleName (e){
    setName(e.target.value);
}
const updateProfile ={name};
    return <>
    <div id="nameP">
 <input type="text" id="spaceName" onChange={handleName} value={name}/>
 </div>
<Student n={name} />
    </>
 }
 export default EditProfile ;