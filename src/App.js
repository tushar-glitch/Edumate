import React from "react";
import OTP from "./components/OTP/otp";
import ResetPwd from "./components/resetPwd/resetPwd";
import LogIn from "./components/Login/LogIn";
import Formlogin from "./components/Form-login/Form-login";
import FgtEmail from "./components/Forgotpass/FgtEmail";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Protected from "./components/Forgotpass/protected";
import Chart from "./components/utils/Pie/Pie";
import Dashboard from "./components/Student/Dashboard/Dashboard";
import Feedback from "./components/Student/Feedback/Feedback";
import Changepass from "./components/utils/Change_pass/Changepass";
import Updates from "./components/Student/Updates/Updates";

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
import EditClassComp from "./components/ADMIN/Dept_class/Admin_class/editClass";
import SubjectAttend from "./components/Student/Attendace2/Attendance";
import EditDeptComp from "./components/ADMIN/Dept_class/Admin_department/edit_admin_comp";
import FacDashboard from "./components/Faculty/faculty-dashboard/FacDashboard";
import FacFeedback from "./components/Faculty/Fac_feedback/Feedback/Feedback";
import PrivateRouteOne from "./components/utils/ProctectedRoute1";
import PrivateRouteTwo from "./components/utils/PrivateRoute2";
import UpdateEmail from "./components/utils/UpdateEmailLog/UpdateEmail";
import AdmAttend from "./components/ADMIN/Admin_attend/AdminAttendanceTwo/adminAttend";
function App() {
 
//  const isStudent = sessionStorage.getItem("access token");
//  const isFaculty = sessionStorage.getItem("Faculty_access_token");
//  const isAdmin = sessionStorage.getItem("Admin_access_token");
 const loggedInUser = sessionStorage.getItem("LoggedInUserId")
 const Route_to_login = sessionStorage.getItem("Route_to_login")
 const navigateOtp = sessionStorage.getItem("NavigateOtp")
 const navigateRst = sessionStorage.getItem("NavigatePassword");
 console.log(Route_to_login);
 console.log(loggedInUser)
  const isAuthenticate=false;
 console.log(isAuthenticate)
  return <>
    <BrowserRouter>
      <Routes>
      {!Route_to_login ?(<Route path="/" exact element={<LogIn />} />):(null) }
      <Route path="/fgtEmail" exact element={<FgtEmail />} />

     {navigateRst ?(<Route path="/rstPwd" exact element={<ResetPwd />} />):(null) }
     {/* {Route_to_login?(<Route path="/otp" element={<OTP />} />):(null) } */}
     {navigateOtp?(<Route path="/otp" element={<OTP />} />):(null) }
    
        <Route element = {<PrivateRouteOne />}>
    
    
      <Route path="/logout" exact element={<Logout />} />
      
      {/* <Route path="/stAttendance" exact element={<Attendance />} /> */}
      {/* <Route path="/stAttend" exact element={<SubjectAttend />} /> */}
     
      {/* <Route path="/loadingscreen" exact element={<LoadingScreen />} /> */}
    
      <Route path="/admAttendance" exact element={<AdmAttend />} />
      {loggedInUser==1?( <Route path="/facDashboard" exact element={<FacDashboard/>} />):(null) }
      {loggedInUser==1?(<Route path="/ftimetable" exact element={<FTimeTable />} />):(null) }
      {loggedInUser==1?( <Route path="/facFeed" exact element={<FacFeedback />} />):(null)}
      {loggedInUser==1?( <Route path="/Fupdate" exact element={<FUpdate />} />):(null)}
      {loggedInUser==1?( <Route path="/facProfile" exact element={<FacultyProfile/>} />):(null)}
      {/* <Route path="/updates" exact element={<Updates />} />):(null) /> */}
        {/* <Route path="/profile" exact element={<Profile/>} />):(null) /> */}
        {/* <Route path="/admin_dashboard" exact element={<AdminDashboard/>} /> */}


      <Route path="/update_email" exact element={<UpdateEmail/>} />
      
        <Route path="/chngPwd" exact element={<Changepass />} />
       
        {/* <Route path="/stu_dashboard" exact element={<Dashboard />}/> */}
        {/* <Route path="/profile" exact element={<Profile />} /> */}
       
     </Route>
     {/* <Route element={<PrivateRouteTwo />} > */}
    { /*STUDENT ROUTES*/}

     {loggedInUser==2?(<Route path="/profile" exact element={<Profile/>} />):(null)}
     {loggedInUser==2?( <Route path="/feedback" exact element={<Feedback/>} />):(null)}
     {loggedInUser==2?( <Route path="/stu_dashboard" exact element={<Dashboard />}/>):(null)}
     {loggedInUser==2?( <Route path="/stTimetable" exact element={<Timetable/>} />):(null)}
     {loggedInUser==2?( <Route path="/stAttend" exact element={<SubjectAttend />} />):(null)}
     {loggedInUser==2?( <Route path="/stAttendance" exact element={<Attendance />} />):(null)}
     {loggedInUser==2?(<Route path="/logout" exact element={<Logout />} />):(null)}
     {loggedInUser==2?( <Route path="/update_email" exact element={<UpdateEmail />} />):(null)}
     {loggedInUser==2?( <Route path="/updates" exact element={<Updates />} />):(null)}
     {loggedInUser==2?( <Route path="/chngPwd" exact element={<Changepass />} />):(null)}
     {/* </Route> */}
     { /*ADMIN ROUTES*/}

     {loggedInUser==9?(<Route path="/admin_dashboard" exact element={<AdminDashboard/>} />):(null)}
     {loggedInUser==9?(<Route path="/editDeptCom" exact element={<EditDeptComp />} />):(null)}
     {loggedInUser==9?(<Route path="/editClass" exact element={<EditClassComp />} />):(null)}
     {loggedInUser==9?(<Route path="/editDept" exact element={<EditUpdateCard />} />):(null)}
     {loggedInUser==9?( <Route path="/adminAddClass" exact element={<AddNewClassComp/>} />):(null)}
      {loggedInUser==9?(  <Route path="/adminAddNew" exact element={<AddNewDeptComp/>} />):(null)}
        {loggedInUser==9?(<Route path="/adminAdd" exact element={<AdminAddDeptClass />} />):(null)}
          {loggedInUser==9?(  <Route path="/editUpdates" exact element={<EditUpdateCard />} />):(null)}
            {loggedInUser==9?(<Route path="/newUpdate" exact element={<NewUpdateCard />} />):(null)}
              {loggedInUser==9?( <Route path="/aUpdate" exact element={<AUpdates />} />):(null)}
              {loggedInUser==9?(<Route path="/add_stu" exact element={<Add_stu/>} />):(null)}
              {loggedInUser==9?( <Route path="/add_fac" exact element={<Add_fac />} />):(null)}
                {loggedInUser==9?( <Route path="/ad_feedback" exact element={<Ad_feed/>} />):(null)}
        {/* <Route path="/profile" element={<PrivateRoute>
          <Profile />
        </PrivateRoute> }/>
        <Route path="/facProfile" element={<PrivateRoute>
          <FacultyProfile />
        </PrivateRoute> }/> */}
        <Route path="/assign_fac" exact element={<Assign_fac/>} />
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