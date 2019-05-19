(function() {
    "use strict";

    window.onload = init

    function init() {
        if ("serviceWorker" in navigator) {

            const onServiceWorkerRegisterSuccess = (reg) => console.log(reg)
            const onServiceWorkerRegisterError = (error) => console.log(error)

            navigator.serviceWorker.register('./sw.js')
                .then(onServiceWorkerRegisterSuccess)
                .catch(onServiceWorkerRegisterError)
        }
    }
})();