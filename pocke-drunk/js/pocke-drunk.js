const btnPower = document.querySelector('#btn__power'),
    pantalla = document.querySelector('#pantalla'),
    contText = document.querySelector('.cont__text'),
    search = document.querySelector('#search'),
    nombre = document.querySelector('#nombre'),
    info = document.querySelector('.data__info'),
    btnErase = document.querySelector('#btn__erase'),
    led = document.querySelectorAll('.led');

btnPower.addEventListener('click', () => {
    if(contText.classList.contains('on')){
        pantalla.classList.remove('on');
        contText.classList.remove('on');
        limpiarPantalla();
        despedida();
    }else{
        miVideoOn();
        limpiarPantalla();
        document.querySelector('.video__on').style='animation: openVideo 0.5s ease forwards';
        setTimeout(() => {
            document.querySelector('.video__on').remove();
            pantalla.classList.toggle('on');
            contText.classList.toggle('on');
        }, 1000);
    }
    
    function miVideoOn(){
        const videoOn = pantalla.appendChild(document.createElement('video'));
            fetch('media/video/video-on.mp4')
            .then(res => res.blob())
            .then(data => {
                let video = URL.createObjectURL(data);
                videoOn.setAttribute('src', video);
            });
            videoOn.setAttribute('class', 'video__on');
            videoOn.setAttribute('autoplay',"");
    }
    function despedida(){
        let pantallaOf = pantalla.appendChild(document.createElement('img'));
            fetch('media/img/cheches.jpg')
            .then(res => res.blob())
            .then(data => {
                let imagen = URL.createObjectURL(data);
                pantallaOf.setAttribute('src', imagen);
            });
                pantallaOf.setAttribute('class', 'imagen__off');
            setTimeout(() => {
                pantallaOf.remove();
                

                pantallaOf = pantalla.appendChild(document.createElement('img'));
                fetch('media/img/tortas.jpg')
                .then(res => res.blob())
                .then(data => {
                    let imagen = URL.createObjectURL(data);
                    pantallaOf.setAttribute('src', imagen);
                });
                    pantallaOf.setAttribute('class', 'imagen__off off');
                setTimeout(() => {

                    pantallaOf.setAttribute('class', 'imagen__off');
                    setTimeout(() => {
                        pantallaOf.remove();
                    }, 2000);
                    
                }, 500);



            }, 2000);
    }
})

let superUser = false;
let busqueda;
let fecha = new Date();
let year = fecha.getFullYear();

nombre.addEventListener('keyup', ()=> {
    busqueda = nombre.value = nombre.value.toLowerCase().replace(/\b[a-z]/g, function(letter){
        return letter.toUpperCase();
    });
});
btnErase.addEventListener('click', ()=> {
    limpiarPantalla();
});
search.addEventListener('submit', e=> {
    e.preventDefault();
    if(nombre.value === "Superuser 131084"){
        info.textContent = 'Bienvenido!! Amo!';
        superUser = true;
        return
    }
    if(nombre.value === "Superuser Off"){
        info.textContent = 'Hasta luego!! Amo!';
        superUser = false;
        return
    }
    if(nombre.value === ""){
        info.textContent = 'Ya estas pedo, se te olvido ingresar datos wey!!';
        if(pantalla.classList.contains('on')){
            fail();
        };
        return false;
    };
    if(superUser === true && nombre.value === "Limpiar Cache"){
        limpiarCache();
        setTimeout(() => {
            location.reload();
        }, 3000);
        return
    }
    info.innerHTML = 'Buscando<span class="punto">.</span><span class="punto">.</span><span class="punto">.</span>';
    for(let i = 0; i < led.length; i++){
        led[i].style = `animation: luz 1s linear infinite`;
        setTimeout(() => {
            led[i].classList.add('active');
        }, 500 * i);
        setTimeout(() => {
            led[i].classList.remove('active');
            led[i].style = "";
        }, 2000);
    };
    setTimeout(() => {
        dataDrunk(busqueda);
    }, 1500);
});
function dataDrunk(drunk){
fetch('json/api-borrachos.json')
    .then(res => res.json())
    .then(data => {
        info.innerHTML = "";
        let $buscar = drunk,
            busqueda = data.borrachos,
        datos = [];

        let fecha = new Date();
        let year = fecha.getFullYear();

        if(superUser === true){
            for(let i = 0; i < busqueda.length; i++){
                if(busqueda[i].apodos.filter(borracho=>borracho.apodo === $buscar).length >= 1){;
                    datos.push(busqueda[i]);
                };  
            };       
        }else{
            for(let i = 0; i < busqueda.length; i++){
                if(busqueda[i].apodos.filter(borracho=>borracho.apodo === $buscar).length >= 1){
                    if(busqueda[i].perfil === "public"){
                        datos.push(busqueda[i]);
                    }else{
                        datos.push({
                            "apodos": [
                                {"apodo": "No tienes acceso a este pinche perfil!!!"}
                            ],
                            "firstName": $buscar,
                            "lastName": "",
                            "birthday": "00-0-"+year,
                            "picture": "dedo.jpg",
                            "address": {
                                "streetAddress": "",
                                "city": "",
                                "state": ""
                            },
                            "phoneNumbers": [
                                {
                                    "type": "",
                                    "number": ""
                                },
                                {
                                    "type": "",
                                    "number": ""
                                }
                            ],
                            "perfil" : ""
                        });
                    };
                };
            };
        };
        if(datos.length >= 1){
            let encontrados = datos.length;
            let items = info.appendChild(document.createElement('span'));
                items.textContent = `Encontrados : ${encontrados}`;
            for(arreglo of datos){
                makeData(arreglo,year);
            }
        }else{
            info.textContent = 'Ya estas pedo, ese ti@ no existe, deja de chupar ca!!!';
            fail();
        };
        
    })
    .catch(error => {
        console.log('Error : ');
        console.log(error);
    });
};
function makeData(borracho,year){
    let firstname = info.appendChild(document.createElement('span'));
        firstname.textContent = `Nombre principal : ${borracho.firstName}`;
    let apellido = info.appendChild(document.createElement('span'));
        apellido.textContent = 'Nombres conocidos : ';
        for(let i = 0; i < borracho.apodos.length; i++){
            apellido.innerHTML += `"${borracho.apodos[i].apodo}" `;
        };
    let cumpleaños = info.appendChild(document.createElement('span'));
        cumpleaños.textContent = `Cumpleaños : ${borracho.birthday}`;
    let birthday = borracho.birthday = borracho.birthday.replace(/^(\d+)\-(\d+)\-/g, "");
    let age = year - birthday;
    let edad = info.appendChild(document.createElement('span'));
        edad.textContent = `Edad: ${age} años`;
    let telHome = info.appendChild(document.createElement('span'));
        telHome.textContent = `Teléfono home : ${borracho.phoneNumbers[0].number}`;
    let telFax = info.appendChild(document.createElement('span'));
        telFax.textContent = `Teléfono fax: ${borracho.phoneNumbers[1].number}`;
    let direccion = info.appendChild(document.createElement('span'));
        direccion.textContent = "Dirección :";
    let state = info.appendChild(document.createElement('span'));
        state.textContent = `Estado: ${borracho.address.state}`;
    let city = info.appendChild(document.createElement('span'));
        city.textContent = `Ciudad: ${borracho.address.city}`;
    let calle = info.appendChild(document.createElement('span'));
        calle.textContent = `Calle: ${borracho.address.streetAddress}`;
    let foto = info.appendChild(document.createElement('span'));
        foto.textContent = `Foto :`;
    let contImg = info.appendChild(document.createElement('div'));
        contImg.setAttribute('class', 'cont__img');
    let img = contImg.appendChild(document.createElement('img'));
        img.setAttribute('class', 'foto-perfil');
    fetch('profiles/'+borracho.picture)
    .then(res => res.blob())
    .then(data => {
        let imagen = URL.createObjectURL(data);
        img.setAttribute('src', imagen);
    });
    // bajar();
};
function bajar(){
    let altura = contText.scrollHeight;
    setTimeout(() => {
        contText.scrollTo({
            top: altura,
            behavior: 'smooth'
        });
    }, 4000);
};
function limpiarPantalla(){
    info.textContent = "";
    search.reset();
};
function fail(){
    let pantallaOf = pantalla.appendChild(document.createElement('img'));
    fetch('media/img/vtac.jpg')
    .then(res => res.blob())
    .then(data => {
        let imagen = URL.createObjectURL(data);
        pantallaOf.setAttribute('src', imagen);
    });
    pantallaOf.setAttribute('class', 'imagen__off');
    setTimeout(() => {
        pantallaOf.remove();
    }, 2000);
}