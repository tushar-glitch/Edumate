import React from "react";
import Background from "../Background/Background";
import loginImg from "./loginImg";

function LogIn (){
    return <>
    <Background />
        <h1 className="BgHead">Welcome to Login page </h1>
        <loginImg />
    </>
}
export default LogIn;