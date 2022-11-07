import React from "react";
import axios from "axios";

const instance = axios.create({
    baseURL:"https://erp-edumate.herokuapp.com/api/user",
    headers:{
        "Content-type": "application/json",
}
})

instance.interceptors.request.use((config)=>{
    const accessToken = sessionStorage.getItem("access token");
    if(accessToken){
        config.headers["Authorization"] = "Bearer" + accessToken;
    }
    return config;
},
(error)=>{
  return Promise.reject(error);
})

instance.interceptors.response.use(
    (res)=>{return res;},
  async (error)=>{
        const OriginalConfig = error.config;
        if(OriginalConfig.url!="/user/login/" && error.response){
            if(error.response.status===401){
                const refreshToken = sessionStorage.getItem("refresh token");
                    try{ 
                        const resp = axios.post("https://erp-edumate.herokuapp.com/api/user/token/refresh/",{
                        refresh:refreshToken,
                    });
                    const AccessToken = resp.token.access;
                    sessionStorage.setItem("access token",AccessToken);
                    return instance(OriginalConfig);
                }catch(err){
                    return Promise.reject(err);
                }
            }
        }
        return Promise.reject(error);
        }
 )
export default instance;
