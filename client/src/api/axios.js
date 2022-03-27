import axios from "axios";

console.log(process.env.REACT_APP_API_ENDPOINT)

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT
});

export default axiosInstance