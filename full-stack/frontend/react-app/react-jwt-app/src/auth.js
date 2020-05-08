export const auth = {
    isAuthenticated: false,
    authenticate(callbackFunction) {
        auth.isAuthenticated = window.locationStorage.getItem('token') ? true : false
        setTimeout(callbackFunction, 100);
    },
    signout(callbackFunction) {
        auth.isAuthenticated = false
        setTimeout(callbackFunction, 100);
    }
}