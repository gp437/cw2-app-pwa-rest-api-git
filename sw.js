self.importScripts('data/games.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/cw2-app-pwa-rest-api-git/cw2.html',
      //  '/cw2.html?homescreen=1',
       '/?homescreen=1',

     ]);
   })
 );
});