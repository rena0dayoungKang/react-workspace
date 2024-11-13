import axios from "axios";
export const url = "http://localhost:8080";


//axios생성할때 header를 넣어준것 
export const axiosInToken = (token) =>
    axios.create({
        baseURL: url,
        timeout: 5000,
        headers: {
            Authorization: token,
        },
    });
