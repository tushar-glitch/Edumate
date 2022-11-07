import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(){
    const ProtRouteKey = localStorage.getItem("protRouteKey");
    // const [value,setValue] = useState(false);
    // useEffect(()=>{
    //     if(ProtRouteKey)
    //     setValue(true);
    //     else
    //     setValue(false);
    // },[value])
    const value=false;
return (
    ProtRouteKey?<Outlet />:<Navigate to="/" />
)
}
export default ProtectedRoute;