document.querySelector('#play').addEventListener('click', playTeAmo);
function playTeAmo(){
    document.querySelector('#play').style.display='none';
    let tapa = document.querySelectorAll('.tapa');
    for(let i = 0; i < tapa.length; i++){
        tapa[i].style.animation = `ver 0.5s ease-out ${(i/3)+ 0.5}s forwards`
    };
    document.body.style='animation: fondo 10s linear infinite;';
    document.querySelector('.beso').style='animation: beso 5s linear forwards;';
};