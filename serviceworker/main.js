window.onload = init;

function init() {
    
    var support = document.getElementById('support');
    var supportedText = 'Service Worker is supported';
    var notSupportedText = 'Service Worker is not supported';
    var serviceWorkerRegistered = 'Service Worker Registered';
    var serviceWorkerError = "Service Worker Error: ";

    // Check if the service worker is supported by the browser
    if ('serviceWorker' in navigator) {
        console.log(supportedText);
        support.innerHTML = supportedText;

        // Register Service Worker
        navigator.serviceWorker
        .register('./serviceworker.js')
        .then((registration) => {
            var registrationState = document.getElementById('registration-state');
            if (registration) {
                registrationState.innerHTML = serviceWorkerRegistered;
            }
        })
        .catch( (error) => {
            console.log(serviceWorkerError + error);
        })
    } else {
        console.log(notSupportedText);
    }
}