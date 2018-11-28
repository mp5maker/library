window.onload = init;

function init() {
    // Service Worker
    var supportDisplay = document.getElementById('service-worker-support');
    var registrationDisplay = document.getElementById('service-worker-registration');
    var supported = "Is Supported";
    var notSupported = "Is not supported in your version of browser";

    // Check whether the browser supports service worker or not
    if (navigator.serviceWorker) {
        supportDisplay.innerHTML = supported;
        // Service Worker Registration
        navigator.serviceWorker.register('serviceworker.js')
        .then((registration) => {
            if (registration) {
                registrationDisplay.innerHTML = "Registered"
            }
        }).catch((error) => {
            registrationDisplay.innerHTMNL = error;
        })
    } else {
        supportDisplay.innerHTML = notSupported;
    }

    // Check indexedDb is supported or not
    var indexedDBDisplay = document.getElementById('indexed-db-support');
    var indexDBSupported = "Is Supported";
    var indexDBNotSupported = "Is not Supported";
    if (window.indexedDB) {
        indexedDBDisplay.innerHTML = indexDBSupported;
        console.log("IndexedDB: " + indexDBSupported);

        // Open a database
        var dbPromise = window.indexedDB.open('TestDatabase', 1, (upgradeDB) => {
            console.log("Making a new object store");
            if (!upgradeDB.objectStoreNames.contains('employee')) {
                // Create Table
                upgradeDb.createObjectStore('employee', {autoIncrement: true});
            }
        });

    } else {
        indexedDBDisplay.innerHTML = indexDBNotSupported;
    }
}