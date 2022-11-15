import React from "react";
import { useEffect } from "react";
import { useNavigate} from "react-router-dom"
function Protected(props){
    const {component} = props;
    const navigate = useNavigate();
useEffect(()=>{
  let em = localStorage.getItem("em");
  if(!em)
  navigate("/fgtEmail")
  else
  navigate("/otp")
})
return <component />
}
export default Protected; 