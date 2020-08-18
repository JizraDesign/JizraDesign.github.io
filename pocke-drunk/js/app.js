if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js');
};

// if(window.caches){

//     //crear cache
//     caches.open('prueba-1');

//     caches.open('prueba-2');

//     // //confirmar cache
//     // caches.has('prueba-2').then( console.log );

//     // //borrar cache
//     // caches.delete('prueba-1').then( console.log );

//     caches.open('cache-v1.1').then( cache => {

//         //agrega un arcrchivo al cache
//         // cache.add ('index.html');

//         //agraga varios archivos (arreglo)

//         cache.addAll([
//             'index.html',
//             'css/style.css',
//             'js/pocke-drunk.js',
//             'json/api-borrachos.json'
//         ]).then( () => {

//             // cache.delete('profiles/')

//             cache.put( 'index.html', new Response('Hola mundo') );

//         });

//         // cache.match('css/style.css')
//         //     .then( res => {

//         //         res.text().then( console.log );

//         //     });

//         caches.keys().then( keys => {
//             console.log(keys);
//         });
//     });

// };