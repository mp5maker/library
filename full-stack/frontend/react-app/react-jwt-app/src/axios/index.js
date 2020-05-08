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
            const refresh_token = window.localStorage.getItem('refresh_token')

            const onSuccessTokenRefresh = (response) => {
                if (response) {
                    localStorage.setItem('access_token', response.data.access)
                    localStorage.setItem('refresh_token', response.data.refresh)

                    axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                    originalRequest.headers['Authorization'] = "JWT " + response.data.access;
                    return axiosInstance(originalRequest);
                }
            }

            return axiosInstance.post(
                '/token/refresh/',
                { refresh: refresh_token }
            ).then(onSuccessTokenRefresh)
        }
    }
)

export { axiosInstance }