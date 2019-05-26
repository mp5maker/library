(function() {
    "use strict";

    window.onload = init;

    function init() {
        if ('serviceWorker' in navigator) {
            const onServieWorkerRegistrationSuccess = (response) => console.log(response);
            const onServiceWorkerRegistrationError = (error) => console.log(error);
            navigator.serviceWorker.register('../sw.js')
            .then(onServieWorkerRegistrationSuccess)
            .then(onServiceWorkerRegistrationError)
        }
    }
})();