const headerTitle = document.querySelector('.header__title'),
    wave = document.querySelectorAll('.wave__banner'),
    navItem = document.querySelectorAll('.nav__link'),
    interruptor = document.querySelector('.interruptor'),
    interruptorBtn = document.querySelector('.interruptor__selector');
//animacion waves del bammer
for(let i = 0; i < wave.length; i++){
    wave[i].style.animation = `waves 30s ease ${0.3 * i}s infinite`;
}
// subir
window.addEventListener('scroll', up);
function up(){
    let cpP = document.querySelector('#covid');
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

// >>>>> -->>>>> ----- themes ----- <<<<<-- <<<<<

localStorage.getItem('theme') === 'dark' ? darkTheme(true) : darkTheme(false);

interruptor.addEventListener('click', theme);

function theme(){
    
    if(interruptorBtn.classList.contains('left')){
        console.log('left');
        
        darkTheme(true);

    }else{

        darkTheme(false)

    };
};

function darkTheme(dark){
    if(dark === true){
        interruptorBtn.classList.remove('left');
        interruptorBtn.classList.add('right');
        document.querySelector("#sun").setAttribute("class", "far fa-sun");
        document.querySelector("#moon").setAttribute("class", "fas fa-moon active");
        document.body.classList.add('darkTheme');
        localStorage.setItem('theme', 'dark');
    }else{
        interruptorBtn.classList.remove('right');
        interruptorBtn.classList.add('left');
        document.querySelector("#sun").setAttribute("class", "fas fa-sun active");
        document.querySelector("#moon").setAttribute("class", "far fa-moon");
        document.body.removeAttribute("class");
        localStorage.setItem('theme', '');
    };
    
};