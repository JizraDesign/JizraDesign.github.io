const main = document.querySelector('#main');
document.querySelector('#clikeame').addEventListener('click', e=> {
    document.querySelector('#clikeame').style.display='none';
    box();
    document.querySelectorAll('.cont_boton')[0].remove();

});
function box(){
    let box = main.appendChild(document.createElement('section'));
        box.setAttribute('class', 'box center');
    let header = box.appendChild(document.createElement('header'));
        header.setAttribute('class', 'center');
    let title = header.appendChild(document.createElement('h2'));
        title.textContent = '¿Me perdonas?';
    let article = box.appendChild(document.createElement('article'));
        article.setAttribute('class', 'center');
    let contBtn = article.appendChild(document.createElement('div'));
        contBtn.setAttribute('class', 'cont_boton');
    let contNo = contBtn.appendChild(document.createElement('div'));
        contNo.setAttribute('id', 'cont__no');
        contNo.setAttribute('class', 'cont__no start');
    let btn = contNo.appendChild(document.createElement('div'));
        btn.setAttribute('id', 'no')
        btn.setAttribute('class', 'boton');
        btn.textContent = 'NO!!';
    btn = contBtn.appendChild(document.createElement('div'));
        btn.setAttribute('id', 'si')
        btn.setAttribute('class', 'boton');
        btn.textContent = 'Super SIII!!!';
    // >>>>> -->>>>> ----- llamar sonido ----- <<<<<-- <<<<<
    sonido(document.querySelector("#no"));
    // >>>>> -->>>>> ----- boton si ----- <<<<<-- <<<<<
    document.querySelector("#si").addEventListener('click', ()=> {
        modal();
    });
    // >>>>> -->>>>> ----- boton no ----- <<<<<-- <<<<<
    const contBtnNo = document.querySelector(".cont__no"),
        btnNo = document.querySelector("#no");
    contBtnNo.addEventListener('mouseover', ()=> {
        if(!contBtnNo.classList.contains('.mov')){
            if(contBtnNo.classList.contains('start')){
                vib(btnNo);
                mov(contBtnNo);
                contBtnNo.classList.remove('start');
                contBtnNo.classList.add('play');
                setTimeout(() => {
                    contBtnNo.classList.add('step_1');
                }, 100);
                return false;
            }else if(contBtnNo.classList.contains('step_1')){
                vib(btnNo);
                mov(contBtnNo);
                contBtnNo.classList.remove('step_1');
                contBtnNo.classList.add('step_2');
                return false;
            }else if(contBtnNo.classList.contains('step_2')){
                vib(btnNo);
                mov(contBtnNo);
                contBtnNo.classList.remove('step_2');
                contBtnNo.classList.add('step_3');
                return false;
            }else if(contBtnNo.classList.contains('step_3')){
                vib(btnNo);
                mov(contBtnNo);
                contBtnNo.classList.remove('step_3');
                contBtnNo.classList.add('step_4'); 
                return false; 
            }else if(contBtnNo.classList.contains('step_4')){
                vib(btnNo);
                mov(contBtnNo);
                contBtnNo.classList.remove('step_4');
                contBtnNo.classList.add('step_1'); 
                return false; 
            };
        };
    });
    function mov(element){
        element.classList.add('mov');
        setTimeout(() => {
            element.classList.remove('mov');
        }, 1000);
    }
    function vib(element){
        element.style = 'animation: mov .3s forwards ease;';
        setTimeout(() => {
            element.style ='';
        }, 300);
    };
};
function modal(){
    let modal = document.body.appendChild(document.createElement('section'));
        modal.setAttribute('class', 'modal center');
    let contModal = modal.appendChild(document.createElement('div'));
        contModal.setAttribute('class', 'cont_modal center');
    let cerrar = contModal.appendChild(document.createElement('div'));
        cerrar.setAttribute('class', 'cerrar');
    let iconCerrar = cerrar.appendChild(document.createElement('i'));
        iconCerrar.setAttribute('class', 'fas fa-skull');
    let parrafo = contModal.appendChild(document.createElement('p'));
        parrafo.textContent = 'Lo sabia';
    let line = parrafo.appendChild(document.createElement('br'));
    let iconParrafo = parrafo.appendChild(document.createElement('i'));
        iconParrafo.setAttribute('class', 'fas fa-kiss-wink-heart');
    setTimeout(() => {
        document.querySelector(".modal").classList.add("active");
    }, 300);
// >>>>> -->>>>> ----- cerrar modal ----- <<<<<-- <<<<<
    document.querySelector(".cerrar").addEventListener('click', ()=> {
        location.reload();
    });
};