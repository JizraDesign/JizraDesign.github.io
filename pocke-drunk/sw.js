const CACHE_STATIC_NAME = 'static-v1.2',
    CACHE_DYNAMIC_NAME = 'dynamic-v1',
    CACHE_INMUTABLE_NAME = 'inmutable-v1',
    CACHE_DYNAMIC_LIMIT = 50;

function limpiarCache( cacheName, numeroItems ){

    caches.open( cacheName )
    
        .then( cache =>  {

            return cache.keys()
                .then( keys => {
                    // console.log(keys);
                    if( keys.length > numeroItems){
                        cache.delete( keys[0] )
                            .then( limpiarCache( cacheName, numeroItems ) );
                    };
                });
        });
};


self.addEventListener('install', e => {

    const cacheProm = caches.open( CACHE_STATIC_NAME )
        .then( cache => {

            return cache.addAll([
                'index.html',
                'css/style.css',
                'js/app.js',
                'js/pocke-drunk.js',
                'json/api-borrachos.json',
                'media/img/cheches.jpg',
                'media/img/tacos.jpg',
                'media/img/tortas.jpg',
                'media/img/vtac.jpg',
                'media/img/no-img.jpg',
                'media/video/video-on.mp4'
            ]);

        });


    const cacheInmutable = caches.open( CACHE_INMUTABLE_NAME )
    .then( cache => {

        return cache.addAll([
            'https://kit.fontawesome.com/1f8614daef.js'

        ]);

    });

    e.waitUntil( Promise.all([cacheProm, cacheInmutable]) );

});

self.addEventListener('activate', e => {

    const respuesta = caches.keys().then( keys => {
        keys.forEach(key => {
            if( key !== CACHE_STATIC_NAME && key.includes('static')){
                return caches.delete(key);
            };
        });
    });

    e.waitUntil(respuesta);
});

self.addEventListener('fetch', e => {
    
    // >>>>> -->>>>> ----- 2.cache con networ fallback ----- <<<<<-- <<<<<
    
    const respuesta = caches.match( e.request)
        .then( res => {
            if( res ) return res;

            return fetch( e.request ).then( newResp => {

                caches.open( CACHE_DYNAMIC_NAME )
                    .then( cache => {
                        cache.put( e.request, newResp );
                        limpiarCache( CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT );
                    });


                return newResp.clone();
            });
            
        })
        .catch( err => {
            
            // if(e.request.headers.get('accept').includes('text/html')){
            //     return caches.match('pages/offline.html');
            // }
            if( /\.(png|jpg)$/i.test( e.request.url) ){
                return  caches.match('media/img/no-img.jpg');
            }

        });


    e.respondWith(respuesta)
});