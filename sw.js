const CACHE = 'cwy-v1';
const ASSETS = ['./index.html','./app.html','./manifest.json','./icon-192.png','./icon-512.png','./icon-dispatch.png','./icon-worker.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
