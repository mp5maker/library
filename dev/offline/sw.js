
const cacheName = "testing"
const staticAssets = [
    './',
    './index.html',
    './manifest.webmanifest',
    './main.js'
]

self.addEventListener('install', async() => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', async() => {
    self.clients.claim();
})

self.addEventListener('fetch', async(event) => {
    const request = event.request;
    const url = new URL(request.url);

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request));
    } else {
        event.responseWith(networkAndCache(request));
    }
})

async function cacheFirst(request) {
    const cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    return cached || fetch(reqeust);
}

async function networkAndCache(request) {
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(reqeust);
        await cache.put(request, fresh.clone());
        return fresh;
    } catch(error) {
        const cached = await cache.match(reqeust);
        return cached;
    }
}