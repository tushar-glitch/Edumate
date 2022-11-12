import { resetTime } from "@syncfusion/ej2-react-schedule";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Navigate, Outlet , Route, Routes , useNavigate , redirect } from "react-router-dom";


function PrivateRouteTwo(){
  const isStudent = sessionStorage.getItem("access token")?true:false;
  const isFaculty = sessionStorage.getItem("Faculty_access_token")?true:false;
  const isAdmin = sessionStorage.getItem("Admin_access_token")?true:false;
  const loggedInUser = sessionStorage.getItem("LoggedInUserId")
    // const isAuth=true;
    // console.log(children);
    // console.log(isAuth);
   
    if(loggedInUser==2){
        return <Outlet />
    }else {
      return <Navigate to="/" /> 
    }
}
export default PrivateRouteTwo;