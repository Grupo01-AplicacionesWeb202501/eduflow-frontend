import axios from 'axios';

const httpInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {'content-type': 'application/json'}
})

export default httpInstance;