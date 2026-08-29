const V='ccs-better-images-v1';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
   if(e.request.url.includes('vectordad.com')){
     const c=caches.open(V).then(x=>x.put(e.request,res.clone()));
   }
   return res;
 }).catch(()=>caches.match(e.request))));
});
