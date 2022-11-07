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
import StProfile from "./components/Student-profile/student";
import Dashboard from "./components/Dashboard/Dashboard";
import Feedback from "./components/Student/Feedback/Feedback";
import FacDashboard from "./components/faculty-dashboard/FacDashboard";
import ProtectedRoute from "./components/utils/ProctectedRoute";
import Changepass from "./components/Student/Change_pass/Changepass";
// import FMain from "./components/Faculty/FacultyMain";
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
    <BrowserRouter >
      <Routes>
      <Route element={<ProtectedRoute />} >
      <Route path="/fgtEmail" exact element={<FgtEmail />} />
        <Route path="/rstPwd" exact element={<ResetPwd />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/formLogin" exact element={<Formlogin />} />
        <Route path="/navbar" exact element={<Navbar />} />
        <Route path="/stu_dashboard" exact element={<Dashboard />} />
        <Route path="/feedback" exact element={<Feedback/>} />
        <Route path="/profile" exact element={<StProfile />} />
          <Route path="/fac_dashboard" exact element={<FacDashboard />} />
          <Route path="/st_ch_pass" exact element={<Changepass/>} />
      </Route>
        <Route path="/" exact element={<LogIn />} />
      </Routes> 
    </BrowserRouter>
  </>
}

export default App;