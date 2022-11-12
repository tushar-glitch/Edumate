import { resetTime } from "@syncfusion/ej2-react-schedule";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Navigate, Outlet , Route, Routes , useNavigate , redirect } from "react-router-dom";

// function ProtectedRoute(){
//     const ProtRouteKey = localStorage.getItem("protRouteKey");
//     // const [value,setValue] = useState(false);
//     // useEffect(()=>{
//     //     if(ProtRouteKey)
//     //     setValue(true);
//     //     else
//     //     setValue(false);
//     // },[value])
//     const value1=false;
//     const value2=true;
// return (
//     <>
//    { value1?<Outlet />:<Navigate to="/" />}
//    {/* {value2?<Navigate to="/otp" />:null} */}
//     </>
// )
// }

function PrivateRoute({children }){
    const isAuthSt= sessionStorage.getItem("access token") ? true : false;
    // const isAuthFac = sessionStorage.getItem("Faculty_access_token") ? true:false;
    // const isAuthAdm = localStorage.getItem("Admin_access_token") ? true:false;
    // const isAuth=true;
    console.log(children);
    // console.log(isAuth);
   
    if(isAuthSt){
        return children
    }else {
      return <Navigate to="/" /> 
    // return redirect("/");
    }
}
export default PrivateRoute;