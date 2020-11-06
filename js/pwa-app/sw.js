// Install Service Worker
self.addEventListener('install', (event) => {
    console.debug('Service Worker has been installed');
});

// Activate Event
self.addEventListener('activate', (event) => {
    console.debug('Service Worker has been activated');
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    console.debug('fetch event', event);
});