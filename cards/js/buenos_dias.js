document.querySelector('#play').addEventListener('click', playBuenosDias);
function playBuenosDias(){
    document.querySelector('#play').style.display='none';
    document.body.style='animation: cielo 4s linear forwards';
    document.querySelector('main').classList.add('animate');
    document.querySelector('#sol').style='animation: sol 10s linear forwards';
    document.querySelector('.cuerpo').style='animation: corona 2s linear infinite';
    document.querySelector('.nubes').style='animation: nubes 3s linear forwards';
    document.querySelector('#nube_1').classList.add('animate');
    document.querySelector('#nube_2').classList.add('animate');
    document.querySelector('#nube_3').classList.add('animate');
    setTimeout(() => {
        document.querySelector('.buenos_dias').style='animation: dias 5s linear forwards'; 
    }, 2000);
    setTimeout(() => {
        document.querySelector('.buenos_dias p').style='animation: parrafo 2s linear forwards'; 
    }, 4000);
    setTimeout(() => {
        document.querySelector('.saludo').style='animation: saludo 4s linear forwards';
    }, 4000);
    setTimeout(() => {
        document.querySelector('.pompis').style='animation: pompis 2s linear forwards';
    }, 7000);
};