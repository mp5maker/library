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

        if (('PushManager' in window)) {
            Notification.requestPermission((status) => {
                console.log('Notification permission status: ' + status);
                if (status == 'granted') {
                    navigator.serviceWorker.getRegistration().then((registration) => {
                        const options = {
                            body: 'Here is a notification body!',
                            icon: '/dist/images/icons/icon-72x72.png',
                            vibrate: [100, 50, 100],
                            data: {
                                dateOfArrival: Date.now(),
                                primaryKey: 1
                            },
                            actions: [
                                {
                                    action: 'explore', title: 'Explore this new world',
                                    icon: '/dist/images/icons/icon-72x72.png'
                                },
                                {
                                    action: 'close', title: 'Close notification',
                                    icon: '/dist/images/icons/icon-72x72.png'
                                },
                            ]
                        }
                        registration.showNotification('News!', options);
                    })
                }
            });
        }
    }
})();