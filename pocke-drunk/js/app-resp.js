const search = document.querySelector('#search'),
    nombre = document.querySelector('#nombre'),
    info = document.querySelector('.data__info');

search.addEventListener('submit', e=> {
    e.preventDefault();
    if(nombre.value === ""){
        info.textContent = 'No ha ingresado datos';
        return false;
    }
});
function dataDrunk(){
    let datos = new FormData();

    fetch('json/api-borrachos.json', {
        method: 'post',
        body: datos
    })

    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        // >>>>> -->>>>> ----- recorrido general ----- <<<<<-- <<<<<
        for(let borracho of data.borrachos){
            console.log(borracho);
        }
        // >>>>> -->>>>> ----- busqueda por usuario ----- <<<<<-- <<<<<
        let $usuario ='Xolo';
        for(let borracho of data.borrachos.filter(borracho=>borracho.firstName === $usuario)){
            console.log(borracho.phoneNumbers);
        }
        // >>>>> -->>>>> ----- localizar elemento ----- <<<<<-- <<<<<
        console.log('>>>>> -->>>>> ----- localizar elemento ----- <<<<<-- <<<<<');
        
        console.log(data.borrachos.find(borracho=>borracho.firstName === "Xolo"));
        console.log(data.borrachos.find(borracho=>borracho.firstName === "Xolo").address);
        for(let borracho of data.borrachos.find(borracho=>borracho.firstName === "Xolo").phoneNumbers){
            console.log(borracho);
        }
        
    })
    .catch(error => {
        console.log('Error : ');
        console.log(error);
    });
};
