const CACHE_NAME = `site-static-${new Date().getTime()}`;
const CACHES = [
    "/",
    "/about",
    "/contact",
    "/materialize-css/dist/js/materialize.min.js",
    "/js/ui.js",
    "/css/main.css",
    "/js/serviceWorker.js",
    "/images/icon/pb-512x512.png",
    "/materialize-css/dist/css/materialize.min.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "/images/icon/apple-icon-180x180-dunplab-manifest-26506.png",
    "/images/icon/apple-icon-144x144-dunplab-manifest-26506.png",
    "https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
    'manifest.json'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    console.debug('Service Worker has been installed');
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.debug('Caching Assets');
            cache.addAll(CACHES)
        })
    );
});

// Activate Event
self.addEventListener('activate', (event) => {
    console.debug('Service Worker has been activated');
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    console.debug('fetch event', event);
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    )
});