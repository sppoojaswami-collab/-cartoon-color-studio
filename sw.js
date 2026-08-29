const V='ccs-alphabet-animals-v1';
const ASSETS=['./index.html','./manifest.webmanifest','./README.txt',
'./images/A.svg','./images/B.svg','./images/C.svg','./images/D.svg','./images/E.svg','./images/F.svg','./images/G.svg','./images/H.svg','./images/I.svg','./images/J.svg','./images/K.svg','./images/L.svg','./images/M.svg','./images/N.svg','./images/O.svg','./images/P.svg','./images/Q.svg','./images/R.svg','./images/S.svg','./images/T.svg','./images/U.svg','./images/V.svg','./images/W.svg','./images/X.svg','./images/Y.svg','./images/Z.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{
   const copy=res.clone(); caches.open(V).then(c=>c.put(e.request,copy)); return res;
 }).catch(()=>caches.match('./index.html'))));
});
