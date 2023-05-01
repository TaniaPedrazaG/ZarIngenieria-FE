import axios from "axios";

const zaringenieriaApi = axios.create({
    baseURL: '/api'
});

export default zaringenieriaApi;