import React from "react";
import LoginImg from "./Loginimg";
import Background from "../Background/Background";
import Formlogin from "../Form-login/Form-login";
import  "./login.css";
function LogIn() {
  return (
    <>
    <div className="AUTHENTICATION">
    <Background />
    <Formlogin />
      <LoginImg />
      </div>
    </>
  );
}
export default LogIn;