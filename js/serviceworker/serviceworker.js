const CACHE_NAME = 'django_v1';
const CACHE_RUNTIME = "django_runtime_v1";
const CACHE_ERROR = "django_error_v1";
const CACHE_ASSETS = [
    'index.html',
    'main.js',
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'main.css',
];

/**
 *  Add all assets
 *  Terminology [caches.open(NAME), cache.addAll(ASSETS), self.skipWaiting()]
 */
self.addEventListener('install', (event) => {
    console.log("Service Worker: Installed");
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log("Service Worker: Caching Files");
            cache.addAll(CACHE_ASSETS);
        })
        .then(() => {
            self.skipWaiting();
        })
    )
});


/**
 * Remove unwanted caches
 * Terminology [caches.keys(), caches.delete(CACHE_NAME)]
 */
self.addEventListener('activate', (event) => {
    console.log("Service Worker: Activated");
    event.waitUntil(
        caches.keys()
        .then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: ' + 'Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })    
            )
        })

    )
});

/**
 * Fetch the caches
 * Terminology [caches.match(event.request), fetch(event.request)]
 */
self.addEventListener('fetch', (event) => {
    console.log("Service Worker:  Fetching");
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            // Valid Response is found in cache
            if (response) {
                return response;
            } else {
                // Open a dynamic cahe
                caches.open(CACHE_RUNTIME)
                .then((cache) => {
                    // Get it from the internet
                    return fetch(event.request)
                    .then((response) => {
                        // Save it in the cache
                        return cache.put(event.request, response.clone())
                        .then(() => {
                            // Return the response
                            return response;
                        })
                    })
                })
            }
        })
    );
});