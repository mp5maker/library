const CACHE_ASSETS = ['index.html', 'index.js', 'index.css']
const CACHE_NAME = `test-v1-${new Date().getTime()}`;
const OFFLINE_URL = 'index.html'

/**
 *  Add all assets
 */
self.addEventListener("install", (event) => {
    console.log("Service Worker: Installed");
    event.waitUntil(
        // Opens the cache table
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log("Service Worker: Caching Files");
                // Adds the data in the cache table
                // cache.addAll(CACHE_ASSETS);

                CACHE_ASSETS.forEach((asset) => {
                    cache.add(asset);
                });
            })
            .then(() => {
                self.skipWaiting();
            })
    );
});


/**
 * Remove unwanted caches
 */
self.addEventListener('activate', (event) => {
    console.log("Service Worker: Activated");
    event.waitUntil(
        // Get all the cache table (cache name) from the database
        caches.keys()
        .then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    // If the reponse (cache name) do not match with the cache table name then delete it
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
 *  Redirect to an offline page
 */
self.addEventListener('fetch', event => {
    if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
        event.respondWith(
            fetch(event.request.url)
                .catch(() => {
                    return caches.match(OFFLINE_URL);
                })
        );
    }
    else {
        event.respondWith(
            caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            }).catch(() => {
                console.log("Person Granted Access");
            })
        );
    }
});
