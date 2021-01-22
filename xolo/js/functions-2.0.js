// >>>>> -->>>>> ----- validar inputs ----- <<<<<-- <<<<<
function valInput(input){
    input.forEach(element => {
        if(element.tagName === "INPUT"){
            if(element.type != 'date'){
                element.addEventListener('keyup', () => {
                    validar();
                });
            }else{
                element.previousSibling.classList.add('fija');
                element.addEventListener('change', () => {
                    validar();
                });  
            };
        }else if(element.tagName == "SELECT"){
            element.previousSibling.classList.add('fija');
            element.addEventListener('change', () => {
                validar();
            });
        }else if(element.tagName == "TEXTAREA"){
            element.addEventListener('keyup', () => {
                validar();
            });
        };
        function validar(){
            if(element.value != ""){
               element.parentNode.classList.add('active');
               element.nextElementSibling.textContent = "";
            }else{
               element.parentNode.classList.remove('active');
            };
            valBtn();
        };
    });
    let eye = document.querySelectorAll('.eye');
    let inputPass = document.querySelectorAll('.input__pass');
    if(eye){
        for(let i = 0; i < eye.length; i++){
            eye[i].addEventListener('click', () => {
                inputPass[i].classList.toggle('visible');
                if(inputPass[i].classList.contains('visible')){
                    eye[i].classList.add('visible');
                    eye[i].querySelector('i').classList.remove('fa-eye-slash');
                    eye[i].querySelector('i').classList.add('fa-eye');
                    inputPass[i].type = 'text';
                }else{
                    eye[i].classList.remove('visible');
                    eye[i].querySelector('i').classList.remove('fa-eye');
                    eye[i].querySelector('i').classList.add('fa-eye-slash');
                    inputPass[i].type = 'password';
                };
            });
        };
    };
};


// >>>>> -->>>>> ----- validar submit ----- <<<<<-- <<<<<
//si los captos del form estan llenos se da cambia el btn submit
function valBtn(){
    let countLogin = 0;
    let ipt = document.querySelectorAll('.box__input');
    ipt.forEach(box=> box.classList.contains('active') ? countLogin++ : countLogin--);
    if(countLogin === ipt.length){
        document.querySelector('#btn-login').classList.add('active');
    }else{
        document.querySelector('#btn-login').classList.remove('active');
    };
};

// >>>>> -->>>>> ----- url amigables ----- <<<<<-- <<<<<

function urlAmigables(titulo){
    url = titulo.toLowerCase();
    valor = url.replace(/\ /g, '-')
            .replace(/\á/g, 'a')
            .replace(/\é/g, 'e')
            .replace(/\í/g, 'i')
            .replace(/\ó/g, 'o')
            .replace(/\ú/g, 'u')
            .replace(/\ñ/g, 'n')
            .replace(/[^a-z0-9\-<>]/g, '');
    return valor;
};

// >>>>> -->>>>> ----- parametro url ----- <<<<<-- <<<<<
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};
// >>>>> -->>>>> ----- parametro url amigable----- <<<<<-- <<<<<

function miParametro(variable){
    let url = location.href;
    if(variable === 'tipo'){
        url =  url.replace(/.*sku-/,'').replace(/[\d-]/g,'');
    }else if(variable === 'id'){
        url =  url.replace(/\D/g,'');
    }else{
        url = "";
    };
    return url;
};
// >>>>> -->>>>> ----- option profile ----- <<<<<-- <<<<<

// function optionsProfile(){
//     const btnOp = document.querySelector('#btn__options'),
//         navProfile = document.querySelector('.cont__nav__profile'),
//         linkProfile = document.querySelectorAll('.link__profile');
//     btnOp.addEventListener('click', e => {
//         navProfile.classList.toggle('visible');
//         navProfile.style.height=linkProfile.length*55+'px';
//         if(!navProfile.classList.contains('visible')){
//             navProfile.style.height='0px';
//         };
//     });
//     document.body.addEventListener('click', e => {
//         if(e.target != document.querySelector('.fas.fa-cog') && navProfile.classList.contains('visible')){
//             navProfile.classList.remove('visible');
//             navProfile.style.height='0px';
//         };
//     });
// };
// >>>>> -->>>>> ----- btns tabla ----- <<<<<-- <<<<<
// function controlsTable(){
//     let btnDel = document.querySelectorAll('.Borrar'),
//     btnEdit = document.querySelectorAll('.Editar');
//     btnDel.forEach(btn=> {
//         btn.addEventListener('click', e => {
//             e.preventDefault();
//             myAlert('confirm','Quieres borrar este item!?','fail',btn.href);
//         });
//     });
//     btnEdit.forEach(btn=> {
//         btn.addEventListener('click', e => {
//             e.preventDefault();
//             myAlert('confirm','Quieres editar este item!?','alert',btn.href);
//         });
//     });
// };