import Axios from "axios";
import ToasterMessage from "../helpers/ToasterMessage";
import config from "../env.json";

export const baseURL = config.DOMAIN_NAME;
Axios.defaults.withCredentials = false;
const axiosInstance = Axios.create({
    withCredentials: false,
    baseURL: baseURL,
})

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if ([401,403].includes(error?.response?.status)) {
        ToasterMessage.ErrorMessage({
            custom_message: "Your session has expired. Please login again."
        })
        window.location.href = '/'
    }
    return Promise.reject(error);
});

export default axiosInstance;