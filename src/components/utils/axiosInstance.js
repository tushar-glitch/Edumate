// import axios from "axios";
// import jwt_decode from "jwt-decode"
// import dayjs from "dayjs";

// const baseURL = 'https://erp-edumate.herokuapp.com'
// let accesstoken = sessionStorage.getItem('access token')?(sessionStorage.getItem('access token')):null
// let refresh = sessionStorage.getItem('refresh token')?(sessionStorage.getItem('refresh token')):null
// const axiosInstance = axios.create({
//     baseURL,
//     headers: { Authorization: `Bearer ${accesstoken}` }
// });

// // axios.interceptors.request.use(
// //    config => {
// //        const token = localStorageService.getAccessToken();
// //        if (token) {
// //            config.headers['Authorization'] = 'Bearer ' + token;
// //        }
// //        // config.headers['Content-Type'] = 'application/json';
// //        return config;
// //    },
// //    error => {
// //        Promise.reject(error)
// //    });
// axios.interceptors.response.use((response) => {
//    return response
// },
// function (error) {
//    const originalRequest = error.config;
//    if (error.response.status === 401 && !originalRequest._retry) {

//        originalRequest._retry = true;
//        return axios.post(`${baseURL}/api/user/token/refresh/`,
//            {
//                refresh
//            })
//            .then(res => {
//                if (res.status === 201) {
//                 //    localStorageService.setToken(res.data);
//                 //    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorageService.getAccessToken();

//                    // 3) return originalRequest object with Axios.
//                    return axios(originalRequest);
//                }
//            })
//    }

//    // return Error object with Promise
//    return Promise.reject(error);
// });
















// // axiosInstance.interceptors.request.use(async req => {
// //     console.log('interceptor ran');
// //     console.log(req);
// //     const user = jwt_decode(accesstoken)
// //     const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
// //     if (!isExpired){console.log('not expired yet'); return req} 
// //     // let refresh = sessionStorage.getItem("refresh token")
// //     // console.log("ref_token "+ref_token);
// //     // const response =   axios.post(`${baseURL}/api/user/token/refresh/`, {
// //     //     refresh: ref_token,
// //     //     headers: {Authorization: `Bearer ${refreshtoken}`}
// //     // })
// // //     const config = {
// // //       headers:{
// // //          Authorization: `Bearer ${ref_token}`
// // //       }
// // //    }
// //     // const response = axios.post(`${baseURL}/api/user/token/refresh/`, config, {
// //     //     refresh:ref_token
// //     // })
    
// //     const response = axios.post(`${baseURL}/api/user/token/refresh/`,  {
// //         refresh
// //     }).then((response => {
// //         console.log(response)
// //         sessionStorage.setItem("access token", response.data.access)
// //         sessionStorage.setItem("refresh token", response.data.refresh)
// //     }))
// //         .catch((err) => {
// //             console.log(err);
// //         })
// //     console.log('Done'); 
    
// //     console.log(refresh)
    
    
// //     req.headers.Authorization = `Bearer ${response.data.access}`
// //     return req
// // })
// axiosInstance.interceptors.request.use(async res => {

// })
 
// export default axiosInstance