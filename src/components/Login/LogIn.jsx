import React from "react";
import LoginImg from "./Loginimg";
import Background from "../Background/Background";
import Formlogin from "../Form-login/Form-login";
import  "./login.css";
function LogIn() {
  return (
    <>
    <Background />
    <Formlogin />
      {/* <LoginImg /> */}
    </>
  );
}
export default LogIn;