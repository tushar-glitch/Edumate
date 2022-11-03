import React, { useState ,createContext} from "react";
import Student from "./student";
import { NAME } from './editProfile'

// const NAME = createContext();

 function EditProfile (props) {
    const nam = props.name;
    const [name,setName]=useState(nam);
    function handleName (e){
    setName(e.target.value);
}
// const updateProfile ={name};
    return <>
    <div id="nameP">
 <input type="text" id="spaceName" onChange={handleName} value={name}/>
 </div>
 <NAME.Provider value={"edw"}>
</NAME.Provider>
{/* <Student n={name} /> */}
    </>
 }
 export default EditProfile ;
 export {NAME};