const staticCacheName = 'site-static-v3';
const dynamicCacheName = 'site-dynamic-v1';

const src = [
    "/",
    "/dist/manifest.json",
    "/dist/index.html",
    "/dist/main.bundle.css",
    "/dist/main.js",
    "/dist/fallback.html",
    "/dist/images/icons/icon-384x384.png",
    "/dist/images/icons/icon-512x512.png",
];

const vendor = [
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js',
];

const assets = src.concat(vendor);

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

// fetch event
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    return fetchRes;
                }).catch(() => caches.match('/dist/index.html'))
            });
        }).catch(() => caches.match('/dist/index.html'))
    );
});