const CACHE_NAME = `site-static-${new Date().getTime()}`;
const DYNAMIC_CACHE = `site-dynamic-${new Date().getTime()}`;
const CACHES = [
    "/",
    "/offline",
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

// Limit Cache Size
const limitCacheSize = (name, size) => {
    caches.open(name).then((cache) => {
        cache.keys().then((keys) => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size));
            }
            return;
        })
    })
}

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
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys
                    .filter((key) => (key !== CACHE_NAME) && key !== DYNAMIC_CACHE)
                    .map((key) => caches.delete(key))
            )
        })
    )
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    console.debug('fetch event', event);

    const onSuccessFetch = (response) => {
        if (CACHES.includes(new URL(event.request.url).pathname)) return response;
        return caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request.url, response.clone());
            return response;
        })
    }

    const onErrorFetch = () => {
        return caches.match(event.request)
            .then((response) => {
                if (response) return response;
                else return caches.match("/offline");
            })
            .catch(() => caches.match("/offline"));
    };

    event.respondWith(
        fetch(event.request)
            .then(onSuccessFetch)
            .catch(onErrorFetch)
    )
});