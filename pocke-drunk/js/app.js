const search = document.querySelector('#search'),
    nombre = document.querySelector('#nombre'),
    info = document.querySelector('.data__info'),
    btnErase = document.querySelector('#btn__erase'),
    led = document.querySelectorAll('.led');
let busqueda;
nombre.addEventListener('keyup', ()=> {
    busqueda = nombre.value = nombre.value.toLowerCase().replace(/\b[a-z]/g, function(letter){
        return letter.toUpperCase();
    });
});

btnErase.addEventListener('click', ()=> {
    info.textContent = "";
    search.reset();
});
search.addEventListener('submit', e=> {
    e.preventDefault();
    if(nombre.value === ""){
        info.textContent = 'Ya estas pedo, se te olvido ingresar datos';
        return false;
    };
    info.innerHTML = 'buscando<span class="punto">.</span><span class="punto">.</span><span class="punto">.</span>';
    for(let i = 0; i < led.length; i++){
        led[i].style = `animation: luz 1s linear infinite`;
        setTimeout(() => {
            led[i].classList.add('active');
        }, 500 * i);
        setTimeout(() => {
            led[i].classList.remove('active');
            led[i].style = "";
        }, 2000);
    }
    setTimeout(() => {
        dataDrunk(busqueda);
    }, 1500);
});
function dataDrunk(drunk){
    fetch('json/api-borrachos.json')
    .then(res => res.json())
    .then(data => {
        info.innerHTML = "";
        let fecha = new Date();
        let year = fecha.getFullYear();

        let buscar = data.borrachos.filter(borracho=>borracho.firstName === drunk);
        if(buscar.length <= 0){
            info.textContent = "Estas pedo, no se a quien buscas";
        };
        for(let borracho of buscar){
            let apellido = info.appendChild(document.createElement('span'));
                apellido.textContent = `Otro nombre : ${borracho.lastName}`;
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
                direccion.textContent = "Direccion :";
            let state = info.appendChild(document.createElement('span'));
                state.textContent = `Estado: ${borracho.address.state}`;
            let city = info.appendChild(document.createElement('span'));
                city.textContent = `Ciudad: ${borracho.address.city}`;
            let calle = info.appendChild(document.createElement('span'));
                calle.textContent = `Calle: ${borracho.address.streetAddress}`;
            let foto = info.appendChild(document.createElement('span'));
                foto.textContent = `Foto :`;
            let img = info.appendChild(document.createElement('img'));
                img.setAttribute('class', 'foto-perfil');
            fetch('profiles/'+borracho.picture)
            .then(res => res.blob())
            .then(data => {
                let imagen = URL.createObjectURL(data);
                img.setAttribute('src', imagen);
            });
                
        }; 
    })
    .catch(error => {
        console.log('Error : ');
        console.log(error);
    });
};
