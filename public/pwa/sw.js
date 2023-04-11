console.log("scripte service worker started");
const PREFIX = "V1";
self.addEventListener("install",() =>{
    console.log(`${PREFIX} installer`);
})
self.addEventListener("activate", () =>{
    console.log(`${PREFIX} activate`);
})
self.addEventListener("fetch", (event) =>{

    console.log("fetching");

    // console.log(`Feching : ${event.request.url} mode : ${event.request.mode}`);

    // if(event.request.mode === "navigate"){

    //     event.respondWith(

    //         (async () =>{
    //             try {
    //                 const preloadResponse = await event.preloadResponse;

    //                 if(preloadResponse){
    //                     return preloadResponse;
    //                 }

    //                 return await fetch(event.request);

    //             } catch (error) {
                    
    //                 return new Response("Hello a tous !");
    //             }
    //         })
    //     )

    // }
})