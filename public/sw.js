/**
 * Service Worker for Cloud Native Certification Hub
 * Provides offline support and caching strategies
 */
/* global self, caches, fetch, Response */

const CACHE_NAME = 'cncerthub-v1';
const STATIC_ASSETS = ['/', '/manifest.json', '/icons/icon-192x192.png', '/icons/icon-512x512.png'];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  // Activate immediately
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      );
    })
  );
  // Take control of all clients immediately
  self.clients.claim();
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip chrome-extension and other non-http(s) requests
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    (async () => {
      try {
        const response = await fetch(event.request);

        // Only cache successful responses
        if (response.status === 200) {
          const responseClone = response.clone();
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, responseClone);
        }

        return response;
      } catch {
        // Network failed, try cache
        const cachedResponse = await caches.match(event.request);
        if (cachedResponse) {
          return cachedResponse;
        }

        // If no cache match for navigation, return offline page
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }

        return new Response('Offline', {
          status: 503,
          statusText: 'Service Unavailable',
        });
      }
    })()
  );
});
