import axios from "axios";
import jwt_decode from "jwt-decode"
import dayjs from "dayjs";

const baseURL = 'https://erp-edumate.herokuapp.com'
let accesstoken = sessionStorage.getItem('access token')?(sessionStorage.getItem('access token')):null
let refreshtoken = sessionStorage.getItem('refresh token')?(sessionStorage.getItem('refresh token')):null
const axiosInstance = axios.create({
    // baseURL,
    headers: { Authorization: `Bearer ${accesstoken}` }
});

axiosInstance.interceptors.request.use(async req => {
    console.log('interceptor ran');
    
    const user = jwt_decode(accesstoken)
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (!isExpired) return req
    const ref_token = sessionStorage.getItem("refresh token")
    const response =  axios.post(`${baseURL}/api/user/token/refresh`, {
        refresh:ref_token
    })
    console.log('Done bro');
    sessionStorage.setItem("access token", response.accesstoken)
    sessionStorage.setItem("refresh token", response.refreshtoken)
    req.headers.Authorization = `Bearer ${response.access}`
    return req
})
 
export default axiosInstance