self.addEventListener('fetch', event=> {
    
    const offlineResp = new Response(`
    
        Bienvenido a mi Página web

        Disculpa, pero para usarla, necesitas internet
    
    `);


    const resp = fetch(event.request)
                    .catch( () => offlineResp);

    event.respondWith( resp );
    


});