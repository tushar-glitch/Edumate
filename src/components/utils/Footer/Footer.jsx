import React from "react";
import {Link} from "react-router-dom"
import "./Footer.css";
function Footer(){
    return <>
    <div className="FooterDiv">
    <h1 className="footerHead">Edumate</h1>
    <h1 className="footerPara">Edumate is an online ERP solution helping thousands of peple.</h1>
   <Link to="/privacy" ><h2 className="privacy" type="button">Privacy Policy</h2></Link>
    <Link to="/agreement"><h2 className="agreement">User Agreement</h2> </Link>
</div>
    </>
}
export default Footer;