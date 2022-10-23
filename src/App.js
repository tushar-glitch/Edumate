import React from "react";
import Background from "./components/Background/Background";
// import Loginimg from "./components/Login/Loginimg";
import OTP from "./components/OTP/otp";
import Password from "./components/InputPwd/Password";
import ResetPwd from "./components/resetPwd/resetPwd";
import Email from "./components/Email/email";
import LogIn from "./components/LogIN/Login";
import Formlogin from "./components/Form-login/Form-login";
function App() {
  return (
    <>
     
      <Background />
      <LogIn />
      {/* <OTP /> */}
      <Formlogin />

      {/* <Email /> */}
   {/* <ResetPwd /> */}
   {/* <Password />  */}
    </>
  );
}

export default App;
