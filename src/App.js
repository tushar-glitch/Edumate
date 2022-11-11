import React from "react";
import OTP from "./components/OTP/otp";
import Password from "./components/InputPwd/Password";
import ResetPwd from "./components/resetPwd/resetPwd";
import LogIn from "./components/Login/LogIn";
import Formlogin from "./components/Form-login/Form-login";
import FgtEmail from "./components/Forgotpass/FgtEmail";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Protected from "./components/Forgotpass/protected";
import Chart from "./components/utils/Pie/Pie";
import Dashboard from "./components/Student/Dashboard/Dashboard";
import Feedback from "./components/Student/Feedback/Feedback";
import ProtectedRoute from "./components/utils/ProctectedRoute1";
import Changepass from "./components/utils/Change_pass/Changepass";
import Updates from "./components/Student/Updates/Updates";
import UpdateEmail from "./components/utils/UpdateEmail/UpdateEmail";
import Attendance from "./components/Student/Attendance/st_attendance";
import AdminDashboard from "./components/ADMIN/Dasboard/Dashboard";
import Logout from "./components/utils/Logout/Logout";
import Add_stu from "./components/ADMIN/Add_stu/Add_stu";
import Add_fac from "./components/ADMIN/Add_fac/Add_fac";
import Timetable from "./components/Student/TimeTable/student-TT";
import FacultyProfile from "./components/Faculty/FacultyProfile/FacultyProfile";
import Profile from "./components/Student/Student-profile/profile";
import FUpdate from "./components/Faculty/FUpdate/FUpdate";
import FTimeTable from "./components/Faculty/FTimeTable/FtimeTable";
import AUpdates from "./components/ADMIN/Admin_Updates/AUpdates";
import AdminAddDeptClass from "./components/ADMIN/Dept_class/MainAddDeptClass";
import NewUpdateCard from "./components/ADMIN/Admin_Updates/makeNewUpdateAdmin";
import EditUpdateCard from "./components/ADMIN/Admin_Updates/editUpdateCard";
import AddNewDeptComp from "./components/ADMIN/Dept_class/Admin_department/add_new_dept_comp"
import AddNewClassComp from "./components/ADMIN/Dept_class/Admin_class/adminAddClass1";
import Ad_feed from "./components/ADMIN/admin_feedback/Ad_feed";
import LoadingScreen from "./components/utils/LoadingScreen";
import EditClassComp from "./components/ADMIN/Dept_class/Admin_class/editClass";
import SubjectAttend from "./components/Student/Attendace2/Attendance";
import EditDeptComp from "./components/ADMIN/Dept_class/Admin_department/edit_admin_comp";
import FacDashboard from "./components/Faculty/faculty-dashboard/FacDashboard";
import FacFeedback from "./components/Faculty/Fac_feedback/Feedback/Feedback";
import PrivateRouteOne from "./components/utils/ProctectedRoute1";
// import FMain from "./components/Faculty/FacultyMain";
function App() {
 const isStudent = sessionStorage.getItem("access token");
 const isFaculty = sessionStorage.getItem("Faculty_access_token");
 const isAdmin = sessionStorage.getItem("Admin_access_token");
  const isAuthenticate=false;
 console.log(isAuthenticate)
  return <>
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<LogIn />} />
        <Route path="/rstPwd" exact element={<ResetPwd />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/fgtEmail" exact element={<FgtEmail />} />

        <Route element = {<PrivateRouteOne />}>
      <Route path="/facFeed" exact element={<FacFeedback />} />
      <Route path="/facDashboard" exact element={<FacDashboard/>} />
      <Route path="/logout" exact element={<Logout />} />
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
        <Route path="/profile" exact element={<Profile/>} />
        <Route path="/admin_dashboard" exact element={<AdminDashboard/>} />
      <Route path="/update_email" exact element={<UpdateEmail/>} />
        <Route path="/feedback" exact element={<Feedback/>} />
        <Route path="/add_stu" exact element={<Add_stu/>} />
        <Route path="/chngPwd" exact element={<Changepass />} />
        <Route path="/add_fac" exact element={<Add_fac />} />
        <Route path="/stu_dashboard" exact element={<Dashboard />}/>
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/ad_feedback" exact element={<Ad_feed/>} />
     <Route path="/chngPwd" exact element={<Changepass />} />
     </Route>
     
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