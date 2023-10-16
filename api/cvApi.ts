import axios from "axios";


const cvApi = axios.create({
    baseURL: "/api",
});

export default cvApi;