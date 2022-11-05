import { Route ,Routes , Redirect } from "react-router-dom";

function PrivateRoute ({children,...rest}){
    console.log("private route");
    const authenticated = false;
    return (
        <>
       
        {/* <Route {...rest}>{!authenticated?<Redirect to="/profile" />:
        children}</Route> */}
        <Routes>
         <Route {...rest}>{children}</Route>
        </Routes>
        </>
    )
}
export default PrivateRoute;