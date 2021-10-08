import axios from "axios";

const instance: any = axios.create({
    // baseURL: process.env.REACT_APP_BASE_URL
    baseURL: process.env.REACT_APP_ADMIN_URL
});

instance.defaults.headers.common['Content-Type'] = "application/json";
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

instance.interceptors.request.use(
    (request: any) => {
        // const token = localStorage.getItem('key');
        // if (token && request.url !== 'services/createbatchregistration/') {
        // if (token) {
        //     request.headers.common["Authorization"] = 'Token ' + token;            
        // }
        return request;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);


instance.interceptors.response.use(
    (response: any) => {
        return response;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);


export default instance;