import axios from "axios";

const ApiManager = axios.create({
    baseURL:'https://app.carline.no/api',
    responseType:'json',
    withCredentials:true,
});

export default ApiManager;