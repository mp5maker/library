import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 5000,
    headers: {
        'Authorization': `JWT ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
        'accept': 'application/json',
    }
})

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        const originalRequest = error.config

        if (error.response.status === 401 && error.response.statusText === 'Unauthorized') {
            const token = window.localStorage.getItem('token')

            const onSuccessTokenRefresh = (response) => {
                if (response) {
                    localStorage.setItem('token', response.data.token)
                    axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.token;
                    originalRequest.headers['Authorization'] = "JWT " + response.data.token;
                    return axiosInstance(originalRequest);
                }
            }

            return axiosInstance.post(
                '/token-refresh/',
                { token }
            ).then(onSuccessTokenRefresh)
        }
    }
)

export { axiosInstance }