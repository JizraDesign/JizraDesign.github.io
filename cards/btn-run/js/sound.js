function sonido(e){
    e.addEventListener('mouseover', ()=> {
        audio('sound/windows_error.mp3');
    });
};
function audio(e){
    const reproducir = new Audio();
    reproducir.src = e;
    reproducir.play();
};