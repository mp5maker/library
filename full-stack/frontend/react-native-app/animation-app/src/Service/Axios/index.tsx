import axios from 'axios'

import { TOKEN_REFRESH, TOKEN_ACCESS, AUTH_HEADER_TYPES } from "Native/Constants/Settings";
import { AsyncSet, AsyncGet } from 'Native/Utilities/AsyncStorage'

const mobilePrepareInstance = (): any => {
    const onSuccessAsyncGet = (token: any) => {
        return {
            timeout: 30 * 1000,
            headers: {
                ...(token ?
                    { 'Authorization': `${AUTH_HEADER_TYPES} ${token}` }
                    : {}
                ),
                'Content-Type': 'application/x-www-form-urlencoded',
                'accept': 'application/x-www-form-urlencoded',
            }
        }
    }

    return AsyncGet({ key: TOKEN_ACCESS })
        .then(onSuccessAsyncGet)
}

/* Create Axios Instance */
let axiosInstance = axios.create(mobilePrepareInstance())

/* JWT Interceptor Request */
export const setClientToken = (token: any) => {
    axiosInstance.interceptors.request.use(
        config => {
            if (token) config.headers.Authorization = `${AUTH_HEADER_TYPES} ${token}`;
            return config;
        },
        error => Promise.reject(error)
    );
}

export default axiosInstance
