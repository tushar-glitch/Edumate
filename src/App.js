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
import Chart from "./components/Pie/Pie";
import StProfile from "./components/Student/St_profile";
import PrivateRoute from "./components/Student/PrivateRoutes";
import FMain from "./components/Faculty/FacultyMain";
function App() {
 
  return <>
  {/* <FMain /> */}
  {/* <BrowserRouter>
            <PrivateRoute component={Dashboard} path="/dashboard" />
            <Routes>
            <Route path="/profile" exact element={<StProfile />} />
            </Routes>
        </BrowserRouter> */}
  {/* <StProfile />  */}
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" exact element={<LogIn />} />
        <Route path="/fgtEmail" exact element={<FgtEmail />} />
        <Route path="/rstPwd" exact element={<ResetPwd />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/formLogin" exact element={<Formlogin />} />
        <Route path="/navbar" exact element={<Navbar />} />
      
         <Route path="/profile" exact element={<StProfile/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
