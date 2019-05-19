const CACHE_NAME = 'offline-app-v1';
const PREVIOUS_CACHE_NAME = 'offline-app-v3';

const localUrls = [
    '/',
    './index.html',
    './main.js',
    './main.css',
    './manifest.json',
];

const vendorUrls = [
    'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js',
]

const urlsToCache = localUrls.concat(vendorUrls);

// Listen to install service worker
self.addEventListener('install', (event) => {
    event.waitUntil(async function () {
        fetch('debug.txt').then((response) => response.text()).then((responseText) => {
            console.log(responseText)
            if (responseText) {
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.addAll(urlsToCache);
                })
            }
        }).catch((error) => console.log(error))
    }());
});

// Listen to activate service worker
self.addEventListener('activate', (event) => {
    event.waitUntil(async function () {
        const cacheNames = await caches.keys();
        await Promise.all(
            cacheNames.filter((cacheName) => {
                return true;
            }).map(cacheName => caches.delete(cacheName))
        );
    }());
});

// Listen to fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(async function () {
        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(event.request);
        const networkResponsePromise = fetch(event.request);

        event.waitUntil(async function () {
            const networkResponse = await networkResponsePromise;
            await cache.put(event.request, networkResponse.clone());
        }());

        return cachedResponse || networkResponsePromise;
    }());
});