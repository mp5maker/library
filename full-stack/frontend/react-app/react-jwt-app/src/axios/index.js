import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 5000,
    headers: {
        'Authorization': `JWT ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }
})