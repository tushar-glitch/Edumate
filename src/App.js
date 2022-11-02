import React from "react";
import OTP from "./components/OTP/otp";
import Password from "./components/InputPwd/Password";
import ResetPwd from "./components/resetPwd/resetPwd";
import LogIn from "./components/Login/LogIn";
import Formlogin from "./components/Form-login/Form-login";
import FgtEmail from "./components/Forgotpass/FgtEmail";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import StProfile from "./components/Student/TimeTable/St_profile";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return <>
  {/* <BrowserRouter>
  <Routes>
   <Route path="/" exact element = {<LogIn />} />
   <Route path="/rstPwd" exact element={<ResetPwd />} />
   <Route path="/fgtEmail" exact element={<FgtEmail />} />
   <Route path="/otp" exact element={<OTP/>} />
   <Route path="/formLogin" exact element={<Formlogin />} />
  </Routes>
   </BrowserRouter> */}
   <StProfile />
   {/* <Dashboard /> */}
      </>  
}

export default App;
