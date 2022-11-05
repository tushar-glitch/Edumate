import axios from "axios";

function getToken(){
    if(timeOut()){
        const refreshToken = sessionStorage.getItem("refresh token");
        const token = getRefreshToken(refreshToken);
        sessionStorage.setItem("access token",token.access);
        console.log("sahbsjlsb");
        return token.access;
    }
    else{
        console.log("token is not expired");
        return sessionStorage.getItem("access token");
    }
}
const expiryTime = sessionStorage.getItem("expiry time");
console.log(expiryTime);

function timeOut(){
    if(expiryTime<1000)
    return true;
    else
    return false;
}

function getRefreshToken(refreshToken) {
    axios.post ("https://erp-edumate.herokuapp.com/api/user/token/refresh/",{
        refresh:refreshToken
    })
}

export default getToken;
console.log(getToken);