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
import Dashboard from "./components/Dashboard/Dashboard";
import Feedback from "./components/Student/Feedback/Feedback";
import FacDashboard from "./components/faculty-dashboard/FacDashboard";
import PrivateRoute from "./components/utils/ProctectedRoute";
import Updates from "./components/Student/Updates/Updates";
import SideBar from "./components/Student/SideBar/sidebar";
import UpdateEmail from "./components/UpdateEmail/UpdateEmail";
import Footer from "./components/Footer/Footer";
import Attendance from "./components/Student/Attendance/st_attendance";
import Student from "./components/Student-profile/student";
// import FMain from "./components/Faculty/FacultyMain";
function App() {
//  const isAuthenticate = sessionStorage.getItem("access token");
  const isAuthenticate=false;
 console.log(isAuthenticate)
  return <>
  {/* <UpdateEmail /> */}
  {/* <Updates /> */}
  {/* <SideBar />
  <Navbar />
  <Footer />  */}
  {/* <FMain /> */}
  {/* <BrowserRouter>
            <PrivateRoute component={Dashboard} path="/dashboard" />
            <Routes>
            <Route path="/profile" exact element={<StProfile />} />
            </Routes>
        </BrowserRouter> */}
  {/* <StProfile />  */}
    <BrowserRouter>
      <Routes>
      <Route path="/updateEmail" exact element={<UpdateEmail />} />
      <Route path="/updates" exact element={<Updates />} />
      <Route path="/" exact element={<LogIn />} />
        <Route path="/rstPwd" exact element={<ResetPwd />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/fgtEmail" exact element={<FgtEmail />} />
        <Route path="/profile" exact element={<Student />} />
      
     
        {/* <Route path="/profile" element={<PrivateRoute>
          <UpdateEmail />
        </PrivateRoute> }/> */}
        </Routes> 
        </BrowserRouter>
      
    {/* <PrivateRoute path="/stu_dashboard" isAuth={isAuthenticate} exact element={<Dashboard />}/> */}
    {/* <PrivateRoute path="/fac_dashboard" isAuth={isAuthenticate} exact element={<FacDashboard />}/> */}
    {/* <PrivateRoute path="/profile"  exact element={<StProfile />}/> */}
   
    {/* <StProfile /> */}
    {/* </PrivateRoute> */}
     {/* <Route path="/stu_dashboard" exact element={<Dashboard />} />
        <Route path="/feedback" exact element={<Feedback/>} />
        <Route path="/fac_dashboard" exact element={<FacDashboard/>} /> */}
          {/* <PrivateRoute path="/profile" isAuth={isAuthenticate} exact element={<StProfile />}/> */}
  </>
}

export default App;