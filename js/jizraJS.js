class Modal{

    // >>>>> -->>>>> ----- crear modal ----- <<<<<-- <<<<<

    makeModal(){
        if(document.querySelector('.modal')){
            document.querySelector('.modal').remove();
        };
        let modal = document.body.appendChild(document.createElement('div'));
            modal.setAttribute('class', 'modal center');
        let contModal = modal.appendChild(document.createElement('div'));
            contModal.setAttribute('class', 'cont__modal center');
    
        let contBtns = modal.appendChild(document.createElement('div'));
            contBtns.setAttribute('class','contenedor__btn modal__close center');
            
        this.btnClose(contBtns,'btn__radius');
        setTimeout(() => {
            modal.classList.add('visible');
        }, 100);
        this.closeModal();
    };

    // >>>>> -->>>>> ----- funcion para cuadro de texto en modal ----- <<<<<-- <<<<<

    textBoxModal(text, status){
        // >>>>> -->>>>> ----- llamado a modal ----- <<<<<-- <<<<<
        this.makeModal();
        // >>>>> -->>>>> ----- borrar boton predeterminado ----- <<<<<-- <<<<<
        let newModal = document.querySelector('.cont__modal'),
            newIcon,modIcon;
        if(document.querySelector('.set__alert')){
            document.querySelector('.set__alert').remove();
        };
        // >>>>> -->>>>> ----- valorar el status del mensaje ----- <<<<<-- <<<<<
        if(status==='ok'){
            // newModal.style='border:solid 4px green';
            newIcon = 'fas fa-exclamation';
            modIcon = 'ok';
        }else if(status==='fail'){
            newModal.style='border:solid 4px red';
            newIcon = 'fas fa-exclamation-circle';
            modIcon = 'fail';
        }else if(status==='alert'){
            newModal.style='border:solid 4px orange';
            newIcon = 'fas fa-exclamation-triangle';
            modIcon = 'alert';
        };
        // >>>>> -->>>>> ----- crear cuadro de texto ----- <<<<<-- <<<<<
        let header = newModal.appendChild(document.createElement('h3'));
            header.setAttribute('class', 'title__alert');
            header.textContent="Atención :";
        let contIconAlert = newModal.appendChild(document.createElement('div'));
            contIconAlert.setAttribute('class', 'cont__icon__alert center');
        let iconAlert = contIconAlert.appendChild(document.createElement('i'));
            iconAlert.setAttribute('class', newIcon);
            iconAlert.classList.add(modIcon);
        let mensaje = newModal.appendChild(document.createElement('p'));
            mensaje.setAttribute('class', 'alert__content');
            mensaje.innerHTML = text;
        // >>>>> -->>>>> ----- contenedor para botones ----- <<<<<-- <<<<<
        let contBtns = newModal.appendChild(document.createElement('div'));
            contBtns.setAttribute('class','contenedor__btn set__alert center');
    };

    // >>>>> -->>>>> ----- crea botones para modal ----- <<<<<-- <<<<<

    btnClose(element,type){
        let newBtnClose = element.appendChild(document.createElement('div'));
            newBtnClose.setAttribute('class', `btn__close center`);
            newBtnClose.classList.add(type);
        let spanBtn = newBtnClose.appendChild(document.createElement('span'));
            spanBtn.setAttribute('class', 'text__btn');
        let iconclose = spanBtn.appendChild(document.createElement('i'));
            iconclose.setAttribute('class', 'fas fa-times');
    };

    // >>>>> -->>>>> ----- funcion para cerrar modal ----- <<<<<-- <<<<<

    closeModal(){
        let modal = document.querySelector('.modal'),
            btnClose = document.querySelector('.btn__close');

        btnClose.addEventListener('click', ()=> {
            modal.classList.remove('visible');
            setTimeout(() => {
                modal.remove();

            }, 300);
        });
    };
    
};

class Alert extends Modal{

    constructor(text, status, event){
        super();
        this._text=text,
        this._status=status,
        this._event=event;
    };

    // >>>>> -->>>>> ----- getter ----- <<<<<-- <<<<<

    get getAlert(){
        return this.alert();
    };

    // >>>>> -->>>>> ----- metodos ----- <<<<<-- <<<<<
    
    alert(){
        this.textBoxModal(this._text,  this._status);
        let contBtns = document.querySelector('.set__alert');
        // >>>>> -->>>>> ----- btoton cerrar ----- <<<<<-- <<<<<
        this.btnClose(contBtns,'btn');
        let newBtnClose = document.querySelector('.btn__close');
            newBtnClose.classList.add('alert', 'active');
            newBtnClose.querySelector('span').textContent='Leido';
        this.closeModal();
    };
    
};
// >>>>> -->>>>> ----- llamado de confirm ----- <<<<<-- <<<<<

// let newAlert = new Confirm("test","ok");
//     newAlert.confirm()

// >>>>> -->>>>> -----  ----- <<<<<-- <<<<<

class Confirm extends Modal{

    constructor(text, status, event){
        super();
        this._text=text,
        this._status=status,
        this._event=event;
    };

    confirm(){
        let promesa = new Promise( ( resolve, reject ) => {

            // >>>>> -->>>>> ----- cuadro de texto ----- <<<<<-- <<<<<
            this.textBoxModal(this._text, this._status,);
            let contBtns = document.querySelector('.set__alert');
            // >>>>> -->>>>> ----- btoton cancelar ----- <<<<<-- <<<<<
            this.btnClose(contBtns,'btn');
            let newBtnClose = document.querySelectorAll('.btn__close')[0];
                newBtnClose.setAttribute('id','cancel');
                newBtnClose.classList.add('alert','active');
                newBtnClose.querySelector('span').textContent='Cancelar';
            this.closeModal();
            // >>>>> -->>>>> ----- btoton aceptar ----- <<<<<-- <<<<<
            this.btnClose(contBtns,'btn');
            newBtnClose = document.querySelectorAll('.btn__close')[1];
                newBtnClose.setAttribute('id','acept');
                newBtnClose.classList.add('alert');
                newBtnClose.querySelector('span').textContent='Aceptar';
            // >>>>> -->>>>> ----- capturar opcion ----- <<<<<-- <<<<<
            document.querySelector('#cancel').addEventListener('click', ()=> {
                resolve( false );
            });

            document.querySelector('#acept').addEventListener('click', ()=> {
                document.querySelector('.modal').classList.remove('visible');
                resolve( true )
            });

        });
        return promesa;
    };

};
// >>>>> -->>>>> ----- llamado de confirm ----- <<<<<-- <<<<<

// let newConfirm = new Confirm("test","ok");
//     newConfirm.confirm()
//     .then(res=>{
//         if( res === true ){
//             console.log(res);
//         };
//     }).catch(error=>console.log("error : ", error));

// >>>>> -->>>>> -----  ----- <<<<<-- <<<<<

class ImgZoom{
    constructor(contenedor, image){
        this._contenedor=contenedor,
        this._image=image;
    };

    get getImage(){
        return this._image;
    };

    zoom(){
        this._image.addEventListener("mouseenter", e => {
           
            let contImg = document.querySelector(this._contenedor);
            let imgZoom = contImg.appendChild(document.createElement('img'));
            imgZoom.setAttribute('id', 'imgZoom');
            imgZoom.setAttribute('src', this._image.src);

            document.querySelector('#imgZoom').addEventListener("mousemove", e => {
                // console.log(e.target);
                let x, y, d;
                let width, height,
                imagen = document.querySelector('#imgZoom');

                width=this._image.offsetWidth;
                height=this._image.offsetHeight;
                // console.log("ancho : ", width, "alto : ",height);
                x=e.offsetX;
                y=e.offsetY;
                // console.log("x :", x, "y : ",y);
                d = 2;
                let left = ((x / width * 100) / d);
                let top = ((y / height * 100) / d);
                
                // console.log("left: ",left," top : ", top);
                imagen.style.display="inline";
                imagen.style.left = left + "%";
                imagen.style.top = top + "%";

            });
            
            document.querySelector('#imgZoom').addEventListener("mouseleave", () => {
                document.querySelector('#imgZoom').remove();
            }); 

        });
        
    };

};

// >>>>> -->>>>> ----- hacer zoom ----- <<<<<-- <<<<<

// document.querySelectorAll('.foto').forEach(foto=>{
//     let img = new ImgZoom('#contenedor__imgs__item', foto);
//         img.zoom();
// });

// >>>>> -->>>>> -----  ----- <<<<<-- <<<<<


class Calificaion{
    constructor(contenedor,element, puntuacion, votantes){
        this._contenedor = contenedor,
        this._element = element,
        this._puntuacion = puntuacion,
        this._votantes = votantes;
    };

    _makeStars(){
        for(let i = 0; i < 5; i++){

            let start = document.querySelector(this._contenedor).appendChild(document.createElement("i"));
                start.setAttribute("class",`far fa-star ${this._element}`);
                start.style.fontSize="20px";
                start.style.cursor="pointer";
        };
    };

    calificacion(){
        let star;
        this._makeStars();
        setTimeout(() => {
           
            star = document.querySelectorAll(`.${this._element}`);
            
            for(let i = 0; i < star.length; i++){
                star[i].addEventListener('click', () => {
                    resetStar(star);

                    console.log("--------------------------------------------");
                    console.log("indice",i);
                    
                    this._votantes++;
                    console.log("votantes",this._votantes);
            
                    let calificacion = i+1;
                    console.log("calificacion", calificacion);
                    this._puntuacion += calificacion;
                    console.log("puntuacion", this._puntuacion);
                    
                    let promedio = (this._puntuacion / this._votantes);
                    
                    let porcentaje = (promedio / 5) * 100;
                    console.log("porcentaje", porcentaje);
                    let porcentajeRedondeado = Math.round(porcentaje / 10) * 10;

                    console.log("redondeo", porcentajeRedondeado);
                    console.log("porcentaje R", Math.round(porcentaje));
            
                    let resultado = (porcentajeRedondeado / 2) / 10;
                    let puercos = Math.round(resultado);
                    console.log(this._element, puercos);
                    for(let i2 = 0; i2 < puercos; i2++){

                        setTimeout(() => {

                            star[i2].classList.add('select');
                            star[i2].classList.remove("far");
                            star[i2].classList.add("fas");
                            star[i2].style.color = "yellow";
                            star[i2].style.textShadow = "0 0 2px black";
                            star[i2].style.transform = "scale(1.3)";

                            setTimeout(() => {
                                star[i2].style.transform = "scale(1)";
                            }, 300);

                        }, 300 * i2);

                    };

                    return this._nuevaPuntuacion(this._puntuacion);

                });
            };

        }, 100);

        function resetStar(star){
            star.forEach(star=>{
                star.classList.remove("fas");
                star.classList.remove('select');
                star.classList.add("far");
                star.style.color = "";
                star.style.textShadow = "";
            });
        };
        
    };

    _nuevaPuntuacion(puntuacion){
        return puntuacion
    };

};
// >>>>> -->>>>> ----- sistema de calificaciones ----- <<<<<-- <<<<<

// const calificaion = new Calificaion("#calif-stars", "star", puntuacion, votantes);
//     calificaion.calificacion();

// >>>>> -->>>>> -----  ----- <<<<<-- <<<<<
