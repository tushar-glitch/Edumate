import axios from "axios";
import jwt_decode from "jwt-decode"
import dayjs from "dayjs";

const baseURL = 'https://erp-edumate.herokuapp.com'
let accesstoken = sessionStorage.getItem('access token')?(sessionStorage.getItem('access token')):null
let refresh = sessionStorage.getItem('refresh token')?(sessionStorage.getItem('refresh token')):null
const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${accesstoken}` }
});

// axiosInstance.interceptors.request.use(async req => {
//     console.log('interceptor ran');
//     console.log(req);
//     const user = jwt_decode(accesstoken)
//     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
//     if (!isExpired){console.log('not expired yet'); return req} 
//     // let refresh = sessionStorage.getItem("refresh token")
//     // console.log("ref_token "+ref_token);
//     // const response =   axios.post(`${baseURL}/api/user/token/refresh/`, {
//     //     refresh: ref_token,
//     //     headers: {Authorization: `Bearer ${refreshtoken}`}
//     // })
// //     const config = {
// //       headers:{
// //          Authorization: `Bearer ${ref_token}`
// //       }
// //    }
//     // const response = axios.post(`${baseURL}/api/user/token/refresh/`, config, {
//     //     refresh:ref_token
//     // })
    
//     const response = axios.post(`${baseURL}/api/user/token/refresh/`,  {
//         refresh
//     }).then((response => {
//         console.log(response)
//         sessionStorage.setItem("access token", response.data.access)
//         sessionStorage.setItem("refresh token", response.data.refresh)
//     }))
//         .catch((err) => {
//             console.log(err);
//         })
//     console.log('Done'); 
    
//     console.log(refresh)
    
    
//     req.headers.Authorization = `Bearer ${response.data.access}`
//     return req
// })
axiosInstance.interceptors.request.use(async res => {
    
})
 
export default axiosInstance