document.querySelector('#play').addEventListener('click', playBuenasNoches);
function playBuenasNoches(){
    document.querySelector('#play').style.display='none';
    document.body.style='animation: cielo 4s linear forwards';
    document.querySelector('main').classList.add('animate');
    document.querySelector('#sol').style='animation: sol 10s linear forwards';
    document.querySelector('.cuerpo').style='animation: corona 2s linear infinite';
    setTimeout(() => {
        document.querySelector('#luna').style='animation: luna 5s linear forwards';
    }, 5000);
    document.querySelector('.nubes').style='animation: nubes 3s linear forwards';
    document.querySelector('#nube_1').classList.add('animate');
    document.querySelector('#nube_2').classList.add('animate');
    document.querySelector('#nube_3').classList.add('animate');
    setTimeout(() => {
        document.querySelector('.buenos_dias').style='animation: dias 5s linear forwards'; 
    }, 4000);
    setTimeout(() => {
        document.querySelector('.buenos_dias p').style='animation: parrafo 2s linear forwards'; 
    }, 6000);
    document.querySelector('.puff img').style='animation: puff 10s linear forwards';
};