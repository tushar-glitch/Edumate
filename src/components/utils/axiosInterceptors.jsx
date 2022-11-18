import React from "react";
import axios from "axios";

// function AxiosToken (){
const RefreshToken = sessionStorage.getItem("refresh token")

    const Instance = axios.create({
        // baseURL:"https://erp-edumate.herokuapp.com/api/user",
        headers:{
            "Content-type": "application/json",
    }
    })

    Instance.interceptors.request.use(
       config=>{
         const accessToken = sessionStorage.getItem("access token")
        if(accessToken){
            config.headers["Authorization"] ="Bearer" + accessToken;
        }
        return config
       },
       error=>{
       return Promise.reject(error);
       })

       Instance.interceptors.response.use(
        (response)=>{
            return response;
        },
        (error)=>{
            const originalRequest = error.config;
            if(error.response.status === 401)
            {
               return axios.post("https://erp-edumate.herokuapp.com/api/user/token/refresh/",{
                    refresh:RefreshToken
                })
                .then(res=>{
                    if(res.status===201){
                        console.log(res.data);
                        localStorage.setItem("access token",res.data.access);
                        const NewAccessToken = localStorage.getItem("access token")
                        axios.defaults.headers.common["Authorization"] ="Bearer" + NewAccessToken;
                        return axios(originalRequest)
                    }
                    
                })
            }
            return Promise.reject(error);
        });
// }
export default Instance;