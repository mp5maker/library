(function() {
    "use strict";

    window.onload = init;

    function init() {
        const DYNAMIC_CACHE_NAME = 'site-dynamic-v1';

        if ('serviceWorker' in navigator) {
            const onServieWorkerRegistrationSuccess = (response) => console.log(response);
            const onServiceWorkerRegistrationError = (error) => console.log(error);
            navigator.serviceWorker.register('../sw.js')
            .then(onServieWorkerRegistrationSuccess)
            .then(onServiceWorkerRegistrationError)
        }

        const saveTheUrl = () => {
            caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
                return fetch('/dist/images/icons/icon-144x144.png').then((response) => {
                    cache.put(response.url, response.clone());
                })
            });
        }
        document.getElementById('save-the-image').addEventListener('click', saveTheUrl);
    }
})();