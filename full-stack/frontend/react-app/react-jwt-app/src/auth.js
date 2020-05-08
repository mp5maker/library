export const auth = () => ({
    isAuthenticated: window.localStorage.getItem('token') ? true : false,
    signout(callbackFunction) {
        auth.isAuthenticated = false
        setTimeout(callbackFunction, 100);
    }
})