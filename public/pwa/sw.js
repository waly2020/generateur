console.log("scripte service worker started");
self.addEventListener("fetch", (event) =>{
    console.log("fetching");
    console.log(`Feching : ${event.request.url} mode : ${event.request.mode}`);
    if(event.request.mode === "navigate"){
        event.respondWith(
            (async () =>{
            return new Response("bonjour les gens");
        })()
        )
    }
})