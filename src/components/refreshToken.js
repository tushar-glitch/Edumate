import axios from 'axios';

const useRefreshToken = () => {

    const refresh_call = async () => {
        const ref_token = sessionStorage.getItem("refresh token")
        
        const refresh = ref_token
        const data = { refresh }
        // const response = await axios.post('https://erp-edumate.herokuapp.com/api/user/token/refresh/', {
        //     data
        //     // withCredentials: true,
        //     // refresh: ref_token
        // });
        // var response
        // function post_refresh_token() {
        //     console.log("Tushar")
        //     axios
        //         .post("https://erp-edumate.herokuapp.com/api/user/token/refresh/", data)
        //         .then((res) => {
        //             console.log();
        //             return res.data.accessToken
        //         })
        // }
        // post_refresh_token()
        const response = await axios.post('https://erp-edumate.herokuapp.com/api/user/token/refresh/',data);
        // setAuth(prev => {
        //     console.log(JSON.stringify(prev));
        //     console.log(response.data.accessToken);
        //     return { ...prev, accessToken: response.data.accessToken }
        // });
        console.log(response.data);
        sessionStorage.setItem("access token",response.data.access)
        sessionStorage.setItem("refresh token",response.data.refresh)
        return response.data.accessToken;
    }
    return refresh_call;
};

export default useRefreshToken;