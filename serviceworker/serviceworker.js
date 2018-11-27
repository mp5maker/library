// Cache Files
const CACHE_NAME = 'library-v1';
const RUNTIME = 'runtime';
const cacheAssets = [
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'main.css',
    'index.html',
    'main.js',
    'serviceworker.js'
]

// Install Event [Cache Adding]
self.addEventListener('install', (event) => {
    console.log("Service Worker: Installed");
    // Wait Until
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log("Service Worker: Caching Files");
            cache.addAll(cacheAssets);
        })
        .then(() => {
            self.skipWaiting();
        })
    )
});

// Activate Event [Remove previous/unwated caches]
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
    // Remove Unwanted Caches
    event.waitUntil(
        caches.keys()
        .then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
});

// Fetch Event {fetch, caches}
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching');
    
    event.respondWith(
        caches.match(event.request)
        .then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return caches.open(RUNTIME).then(cache => {
                return fetch(event.request).then(response => {
                    // Put a copy of the response in the runtime cache.
                    return cache.put(event.request, response.clone()).then(() => {
                        return response;
                    });
                });
            });
        })
    );
});