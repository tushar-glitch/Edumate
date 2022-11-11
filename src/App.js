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
import ProtectedRoute from "./components/utils/ProctectedRoute";
import Changepass from "./components/Student/Change_pass/Changepass";
import PrivateRoute from "./components/utils/ProctectedRoute";
import Updates from "./components/Student/Updates/Updates";
import SideBar from "./components/Student/SideBar/sidebar";
import UpdateEmail from "./components/UpdateEmail/UpdateEmail";
import Footer from "./components/Footer/Footer";
import Attendance from "./components/Student/Attendance/st_attendance";
import Timetable from "./components/Student/TimeTable/student-TT";
import FacultyProfile from "./components/Faculty/FacultyProfile/FacultyProfile";
import Profile from "./components/Student-profile/profile";
import FUpdate from "./components/Faculty/FUpdate/FUpdate";
import FTimeTable from "./components/Faculty/FTimeTable/FtimeTable";
import AUpdates from "./components/ADMIN/Admin_Updates/AUpdates";
import NewUpdateCard from "./components/ADMIN/Admin_Updates/makeNewUpdateAdmin";
import EditUpdateCard from "./components/ADMIN/Admin_Updates/editUpdateCard";
import AdminAddDeptClass from "./components/ADMIN/Admin_department/adminDept";
import AddNewDeptComp from "./components/ADMIN/Admin_department/add_new_dept_comp";
import AddNewClassComp from "./components/ADMIN/Admin_/Admin_class/adminAddClass1";
import LoadingScreen from "./components/utils/LoadingScreen";
import EditClassComp from "./components/ADMIN/Admin_/Admin_class/editClass";
import SubjectAttend from "./components/Student/Attendace2/Attendance";
import EditDeptComp from "./components/ADMIN/Admin_department/edit_admin_comp";
// import FMain from "./components/Faculty/FacultyMain";
function App() {
//  const isAuthenticate = sessionStorage.getItem("access token");
  const isAuthenticate=false;
 console.log(isAuthenticate)
  return <>
  {/* <UpdateEmail /> */}
  {/* <Updates /> */}
  {/* <SideBar /> */}
  {/* <Navbar /> */}
  {/* <Footer />  */}
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
      <Route path="/editDeptCom" exact element={<EditDeptComp />} />
      <Route path="/stAttendance" exact element={<Attendance />} />
      <Route path="/stAttend" exact element={<SubjectAttend />} />
      <Route path="/editClass" exact element={<EditClassComp />} />
      <Route path="/editDept" exact element={<EditUpdateCard />} />
      <Route path="/loadingscreen" exact element={<LoadingScreen />} />
      <Route path="/adminAddClass" exact element={<AddNewClassComp/>} />
      <Route path="/adminAddNew" exact element={<AddNewDeptComp/>} />
      <Route path="/adminAdd" exact element={<AdminAddDeptClass />} />
      <Route path="/editUpdates" exact element={<EditUpdateCard />} />
      <Route path="/newUpdate" exact element={<NewUpdateCard />} />
      <Route path="/aUpdate" exact element={<AUpdates />} />
      <Route path="/ftimetable" exact element={<FTimeTable />} />
      <Route path="/Fupdate" exact element={<FUpdate />} />
      <Route path="/stTimetable" exact element={<Timetable/>} />
      <Route path="/facProfile" exact element={<FacultyProfile/>} />
      <Route path="/updateEmail" exact element={<UpdateEmail />} />
      <Route path="/updates" exact element={<Updates />} />
      <Route path="/" exact element={<LogIn />} />
        <Route path="/rstPwd" exact element={<ResetPwd />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/fgtEmail" exact element={<FgtEmail />} />
        <Route path="/profile" exact element={<Profile />} />
      
     <Route path="/chngPwd" exact element={<Changepass />} />
        {/* <Route path="/profile" element={<PrivateRoute>
          <Profile />
        </PrivateRoute> }/>
        <Route path="/facProfile" element={<PrivateRoute>
          <FacultyProfile />
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
        <Route path="/profile" exact element={<StProfile />} />
          <Route path="/fac_dashboard" exact element={<FacDashboard />} />
          <Route path="/st_ch_pass" exact element={<Changepass/>} />
      </Route>
        <Route path="/" exact element={<LogIn />} />
      </Routes> 
    </BrowserRouter>
        <Route path="/fac_dashboard" exact element={<FacDashboard/>} /> */}
  </>
}

export default App;