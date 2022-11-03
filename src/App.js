import React from "react";
import OTP from "./components/OTP/otp";
import Password from "./components/InputPwd/Password";
import ResetPwd from "./components/resetPwd/resetPwd";
import LogIn from "./components/Login/LogIn";
import Formlogin from "./components/Form-login/Form-login";
import FgtEmail from "./components/Forgotpass/FgtEmail";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Protected from "./components/Forgotpass/protected";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Chart from "./components/Pie/Pie";
import StuProfile from './components/Student-profile/student'
import StProfile from "./components/Student/TimeTable/St_profile";
import Student from "./components/Student-profile/student";
import SideBar from "./components/Student/SideBar/sidebar";
function App() {
  return <>
  {/* <SideBar /> */}
   {/* <Student /> */}
  <BrowserRouter>
  <Routes>
   <Route path="/" exact element = {<LogIn />} />
   <Route path="/rstPwd" exact element={<ResetPwd />} />
   <Route path="/fgtEmail" exact element={<FgtEmail />} />
   <Route path="/otp" exact element={<OTP/>} />
   <Route path="/formLogin" exact element={<Formlogin />} />
  </Routes>
   </BrowserRouter>
   {/* <StProfile /> */}
   {/* <Dashboard /> */}
      </>  
}

export default App;
