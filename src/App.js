import React from "react";
import OTP from "./components/AUTHENTICATION/OTP/otp";
import ResetPwd from "./components/AUTHENTICATION/resetPwd/resetPwd";
import LogIn from "./components/AUTHENTICATION/Login/LogIn";
import Formlogin from "./components/AUTHENTICATION/Form-login/Form-login";
import FgtEmail from "./components/AUTHENTICATION/Forgotpass/FgtEmail";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Chart from "./components/utils/Pie/Pie";
import Dashboard from "./components/Student/Dashboard/Dashboard";
import Feedback from "./components/Student/Feedback/Feedback";
import StudChangepass from "./components/Student/stud_Change_pass/Changepass";
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
import UpdateEmail from "./components/utils/UpdateEmailLog/UpdateEmail";
import AdmAttend from "./components/ADMIN/Admin_attend/AdminAttendanceTwo/adminAttend";
import StUpdateEmail from "./components/Student/St_UpdateEmail";
import FacUpdateEmail from "./components/Faculty/FacUpdateEmail";
import AdmUpdateEmail from "./components/ADMIN/AdmUpdateEmail";
import FAttendance1 from "./components/Faculty/FAttendance/FAttend1/FAttendance1";
import Privacy from "./components/utils/Ptivacy.jsx/privacy"
import Agreement from "./components/utils/agreement/agreement"
import FacChangepass from "./components/Faculty/Fac_Change_pass/Changepass";
import AdmChangepass from "./components/ADMIN/admin_Change_pass/Changepass";

function App() {

 const isStudent = sessionStorage.getItem("access token")?(true):(false)
 const isFaculty = sessionStorage.getItem("Faculty_access_token")?(true):(false)
 const isAdmin = sessionStorage.getItem("Admin_access_token")?(true):(false)
 const loggedInUser = sessionStorage.getItem("LoggedInUserId")
 const Route_to_login = sessionStorage.getItem("Route_to_login")
 const navigateOtp = sessionStorage.getItem("NavigateOtp")
 const navigateRst = sessionStorage.getItem("NavigatePassword");
 const logOut = sessionStorage.getItem("LogOut")
 const isFacAttend = sessionStorage.getItem("Nav_rst_Login")
 const otpToPwd = sessionStorage.getItem("NavigatePassword");
 const pwdToLogin=sessionStorage.getItem("NavToLogin")
 console.log(Route_to_login);
 console.log(loggedInUser)
  const isAuthenticate=false;
 console.log(isAuthenticate)
  return <>
    <BrowserRouter>
      <Routes>
     
      {(!Route_to_login || logOut || pwdToLogin)?(<Route path="/" exact element={<LogIn />} />):(null) }
      <Route path="/fgtEmail" exact element={<FgtEmail />} />
     {navigateOtp?(<Route path="/otp" element={<OTP />} />):(null) }
    {otpToPwd?(<Route path="/rstPwd" exact element={<ResetPwd /> }/>) :(null)}
      <Route path="/logout" exact element={<Logout />} />
      <Route path="/admAttendance" exact element={<AdmAttend />} />
      {/* <Route path="/chngPwd" exact element={<Changepass />} /> */}
        <Route path="/updateEmail" exact element={<UpdateEmail />} />
        <Route path="/privacy" exact element={<Privacy />} />
        <Route path="/agreement" exact element={<Agreement />} />
 
      {/* FACULTY */}
      {isFaculty ?(<Route path="/rstPwd" exact element={<FacDashboard />} />):(null) }
      {loggedInUser==1?( <Route path="/facDashboard" exact element={<FacDashboard/>} />):(null) }
      {loggedInUser==1?(<Route path="/ftimetable" exact element={<FTimeTable />} />):(null) }
      {loggedInUser==1?( <Route path="/facFeed" exact element={<FacFeedback />} />):(null)}
      {loggedInUser==1?( <Route path="/Fupdate" exact element={<FUpdate />} />):(null)}
      {loggedInUser==1?(<Route path="/facUpdateEmail" exact element={<FacUpdateEmail />} />):(null)}
      {loggedInUser==1?( <Route path="/facProfile" exact element={<FacultyProfile/>} />):(null)}
      {loggedInUser==1?( <Route path="/facChngPwd" exact element={<FacChangepass/>} />):(null)}

        {/* STUDENT */}
        <Route path="/stu_dashboard" exact element={<Dashboard />}/>
     {isStudent?(<Route path="/stu_dashboard" exact element={<Dashboard/>} n/>):(null)};
     {loggedInUser==2?(<Route path="/profile" exact element={<Profile/>} />):(null)}
     {isStudent ?(<Route path="/rstPwd" exact element={<ResetPwd />} />):(null) }
     {loggedInUser==2?(<Route path="/stUpdateEmail" exact element ={<StUpdateEmail />} />):(null)}
     {loggedInUser==2?( <Route path="/feedback" exact element={<Feedback/>} />):(null)}
     {loggedInUser==2?( <Route path="/stTimetable" exact element={<Timetable/>} />):(null)}
     {loggedInUser==2?( <Route path="/stAttend" exact element={<SubjectAttend />} />):(null)}
     {loggedInUser==2?( <Route path="/stAttendance" exact element={<Attendance />} />):(null)}
     {loggedInUser==2?(<Route path="/logout" exact element={<Logout />} />):(null)}
     {loggedInUser==2?( <Route path="/update_email" exact element={<UpdateEmail />} />):(null)}
     {loggedInUser==2?( <Route path="/updates" exact element={<Updates />} />):(null)}
     {loggedInUser==2?( <Route path="/studChngPwd" exact element={<StudChangepass />} />):(null)}

     { /*ADMIN ROUTES*/}

     {loggedInUser==9?(<Route path="/admin_dashboard" exact element={<AdminDashboard/>} />):(null)}
     {isAdmin?(<Route path="/admin_dashboard" exact element={<ResetPwd />} />):(null) }
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
                {loggedInUser==9?(<Route path="/admUpdateEmail" exact element={<AdmUpdateEmail />}/>):(null)}
                {loggedInUser==9?(<Route path="/admChngPwd" exact element={<AdmChangepass/>}/>):(null)}

        </Routes> 
        </BrowserRouter>
  </>
}

export default App;