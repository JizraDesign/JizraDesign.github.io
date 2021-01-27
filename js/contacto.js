// >>>>> -->>>>> ----- contacto ----- <<<<<-- <<<<<

const contactoInput = document.querySelectorAll('.contacto__input'),
    contactoLabel = document.querySelectorAll('.contacto__label'),
    contactoForm = document.querySelector('.contacto__form');
// >>>>> -->>>>> ----- animaciones label ----- <<<<<-- <<<<<

for(let i = 0; i < contactoInput.length; i++){
    
    contactoInput[i].addEventListener('keyup', () => {
        if(contactoInput[i].value != ''){
            contactoLabel[i].classList.add('active');
            contactoInput[i].classList.add('active');
        }else{
            contactoLabel[i].classList.remove('active');
            contactoInput[i].classList.remove('active');
        };
        valEnviar(contactoInput);
    });

};
function valEnviar(iptGroup){
    let iptCount = 0;
    iptGroup.forEach(input => {
        if(input.classList.contains("active")){
            iptCount++;
        }else{
            iptCount--;
        };
    });
    if(iptCount === iptGroup.length){
        document.querySelector(".btn__form-contacto").classList.add("active");
        
    }else{
        document.querySelector(".btn__form-contacto").classList.remove("active");
    };
    
};

// >>>>> -->>>>> ----- validar ----- <<<<<-- <<<<<

const telCliente = document.querySelector("#tel");
telCliente.addEventListener('keyup', () => {
    telCliente.value = telCliente.value.replace(/\D/g, "");
    if(telCliente.value.length > 10){
        telCliente.value = telCliente.value.slice(0,10);
    };
});

// >>>>> -->>>>> -----  ----- <<<<<-- <<<<<

contactoForm.addEventListener('submit', e => {
    e.preventDefault();
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "525519662292",
        nombre = document.querySelector("#nombre").value,
        email = document.querySelector("#email").value,
        expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
        mensaje = document.querySelector("#mensaje").value,
        resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
    
    let apiWhatsap = `https://wa.me/${telefono}?text=`,
        encabezados = `*_Jizra%20Design_*%0A*Contacto*%0A%0A`,
        nombreEsc = `*Nombre%20:*%0A${nombre}%0A`,
        telEsc = `*Teléfono%20:*%0A${telCliente.value}%0A`,
        emailEsc = `*Email%20:*%0A${email}%0A`,
        msjEsc = `*Mensaje%20:*%0A${mensaje}`;

    let url = `${apiWhatsap+encabezados.replace(/\ /g, '%20')+nombreEsc.replace(/\ /g, '%20')+telEsc.replace(/\ /g, '%20')+emailEsc.replace(/\ /g, '%20')+msjEsc.replace(/\ /g, '%20')}`;
  
    if (nombre === "" || email === "" || telCliente.value === "" || mensaje === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${nombre}`;
      return false;
    };

    if(email.length>100) {
        resp.classList.add("fail");
        resp.innerHTML = `Email muy largo, ${email}`;
        return false;
    }
    else if(!expresion.test(email)){
        resp.classList.add("fail");
        resp.innerHTML = `Email no valido, ${email}`;
        return false;
    }

    if(telCliente.value.length > 10){
        resp.classList.add("fail");
        resp.innerHTML = `El Teléfono debe contener 10 digitos, ${telCliente.value}`;
        return false;
    }else if(telCliente.value.length < 10){
        resp.classList.add("fail");
        resp.innerHTML = `El Teléfono debe contener 10 digitos, ${telCliente.value}`;
        return false;
    };
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu mensaje, ${nombre}`;
  
    window.open(url);
  });