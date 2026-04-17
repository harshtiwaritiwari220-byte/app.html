/* HARSH PROTOCOL - SERVICE WORKER v2.1
   Role: Offline Capability & Cache Management
   Logic: Fast-Load Architecture for High-End Apps
*/

const CACHE_NAME = 'harsh-elite-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@500;600;700&display=swap'
];

// 1. Install Event: Files ko phone ki memory mein save karna
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Protocol Intel: Caching System Assets...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// 2. Activate Event: Purane kachre (Old Cache) ko saaf karna
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
});

// 3. Fetch Event: Internet na hone par memory se data uthana
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

console.log("%c SERVICE WORKER: NEURAL SHIELD ACTIVE ", "color: #f3ba2f; font-weight: bold;");
