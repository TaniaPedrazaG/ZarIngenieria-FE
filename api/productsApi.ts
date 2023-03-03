import axios from 'axios';
const productApi = axios.create({
    baseURL: 'https://zar-back-production.up.railway.app/api'
})

export default productApi