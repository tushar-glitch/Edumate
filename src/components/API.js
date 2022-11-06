import React from "react";

const instance = axios.create({
    baseURL:"https://erp-edumate.herokuapp.com/api/user",
    headers:{
        "Content-type": "application/json",
}
})

instance.interceptors.request.use((config)=>{
    const accessToken = sessionStorage.getItem("access token");
    if(accessToken){
        
    }

})

