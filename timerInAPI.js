import useRefreshToken from "./src/components/refreshToken";
const refresh_call = useRefreshToken()
function getToken() {
    if (timeOut()) {
        console.log("tushar");
        ()=>(refresh_call())
        // const refreshToken = sessionStorage.getItem("refresh token");
        // const token = getRefreshToken(refreshToken);
        // sessionStorage.setItem("access token",token.access);
        // return token.access;
    }
    else{
        console.log("token is not expired");
        return sessionStorage.getItem("access token");
    }
}

const expiryTime = sessionStorage.getItem("expiry time");
// console.log(expiryTime);

function timeOut(){
    if (expiryTime < 3985) {
        console.log("ttete");
        return true;
    }
    else
    return false;
}

export default getToken;
console.log(getToken);