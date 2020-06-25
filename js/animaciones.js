const headerTitle = document.querySelector('.header__title'),
    wave = document.querySelectorAll('.wave__banner'),
    navItem = document.querySelectorAll('.nav__link'),
    contactoInput = document.querySelectorAll('.contacto__input'),
    contactoLabel = document.querySelectorAll('.contacto__label'),
    contactoForm = document.querySelector('.contacto__form'),
    interruptor = document.querySelectorAll('.interruptor'),
    interruptorBtn = document.querySelectorAll('.interruptor span');
//animacion waves del bammer
for(let i = 0; i < wave.length; i++){
    wave[i].style.animation = `waves 30s ease ${0.3 * i}s infinite`;
}
// subir
window.addEventListener('scroll', up);
function up(){
    let cpP = document.querySelector('#galeria');
    let distacia = cpP.getBoundingClientRect().top;
    if(distacia <= 0){
        document.querySelector('.btn__up').classList.add('visible');
    }else{
        document.querySelector('.btn__up').classList.remove('visible');
    }
};
document.querySelector('.btn__up__contenedor').addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// animaciones con scroll
window.addEventListener('scroll', function(){
    //    Animacion imagenes
    function transition(direccion){      
        let item = document.querySelectorAll(`.item-rotate-${direccion}`);
        for(let i=0; i < item.length; i++){
            //Altura de la pagina
            let altura = window.innerHeight/2;
            //console.log('altura de la ventana '+altura);
            //distancia de la imagen al top de la ventana
            let distacia = item[i].getBoundingClientRect().top;
            //console.log('distancia de la imagen '+distacia);
            item[i].style.transition='all .3s';    
            //comprobar la distancia
            if(distacia <= altura){
                item[i].style.opacity="1";
                item[i].classList.add('transform-rotate');
                //console.log(cont_imagen[i]+'true');
            }else{
                item[i].style.opacity=".5";
                item[i].classList.remove('transform-rotate');
                //console.log(cont_imagen[i]+'false');
            }
        };
        item = document.querySelectorAll(`.item-${direccion}`);
        for(let i=0; i < item.length; i++){
            //Altura de la pagina
            let altura = window.innerHeight/2;
            //console.log('altura de la ventana '+altura);
            //distancia de la imagen al top de la ventana
            let distacia = item[i].getBoundingClientRect().top;
            //console.log('distancia de la imagen '+distacia);
            item[i].style.transition='all .3s';    
            //comprobar la distancia
            if(distacia <= altura){
                item[i].style.opacity="1";
                item[i].classList.add(`transform-${direccion}`);
                //console.log(cont_imagen[i]+'true');
            }else{
                item[i].style.opacity=".5";
                item[i].classList.remove(`transform-${direccion}`);
                //console.log(cont_imagen[i]+'false');
            }
        };
    };
    transition('up');
    transition('down');
    transition('left');
    transition('right');
});
// menu nav
navItem.forEach(btn=>{
    btn.addEventListener('click', e => {
        for(let link of navItem){
            link.classList.remove('active');
        };
        e.target.classList.add('active');
    });
});
// input de contacto
for(let i = 0; i < contactoInput.length; i++){
    contactoInput[i].addEventListener('keyup', () => {
        if(contactoInput[i].value != ''){
            contactoLabel[i].classList.add('active');
        }else{
            contactoLabel[i].classList.remove('active');
        }
    });
};
contactoForm.addEventListener('submit', e => {
    e.preventDefault();
});

for(let i = 0; i < interruptor.length; i++){
    interruptor[i].addEventListener('click', e => {
        for(let x of interruptor){
            x.style.background = '';
        };
        for(let x of interruptorBtn){
            x.classList.remove('active');
        };
        interruptorBtn[i].classList.add('active');
        interruptor[i].style.background = '#6eb4f5';
        let theme = interruptor[i].id;
        if(theme === 'dark'){
            document.body.classList.remove('clearTheme');
            document.body.classList.add('darkTheme');
        }else if(theme === 'clear'){
            document.body.classList.remove('darkTheme');
            document.body.classList.add('clearTheme');
        }else{
            document.body.classList.remove('darkTheme');
            document.body.classList.remove('clearTheme');
        }
    });
};