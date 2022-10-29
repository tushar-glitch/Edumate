import React from "react";
import OTP from "./components/OTP/otp";
import Password from "./components/InputPwd/Password";
import ResetPwd from "./components/resetPwd/resetPwd";
import LogIn from "./components/Login/LogIn";
import Formlogin from "./components/Form-login/Form-login";
import FgtEmail from "./components/Forgotpass/FgtEmail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<LogIn />} />
        <Route path="/fgtEmail" exact element={<FgtEmail />} />
        <Route path="/rstPwd" exact element={<ResetPwd />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/formLogin" exact element={<Formlogin />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;