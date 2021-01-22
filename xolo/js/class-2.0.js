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

// >>>>> -->>>>> ----- base 64 files ----- <<<<<-- <<<<<

class Img64{
    constructor(imagen, contName, contPrev){
        this._imagen = imagen,
        this._contName = contName,
        this._contPrev = contPrev;
    };


    name(){

        if(this._imagen.files[0]){

            this._contName.textContent = this._imagen.files[0].name;

        }else{

            this._contName.textContent = "No ha seleccionado ninguna imagen";  

        }; 

    };
    preview(){

        if(this._imagen.files[0]){

            if(document.querySelector('.preview')){
                document.querySelector('.preview').remove();
            };
            let img = this._contPrev.appendChild(document.createElement('img'));
                img.setAttribute('class', 'preview');
                img.setAttribute('src', URL.createObjectURL(this._imagen.files[0]));
            this._img64();

        }else{

            if(document.querySelector('.preview')){
                document.querySelector('.preview').parentNode.removeAttribute('style');
                document.querySelector('.preview').remove();
            };  

        };
        
    };

    _img64(){
        let contPreview = this._contPrev;
        let reader = new FileReader();
        reader.onloadend = function (e){

            let canva = document.body.appendChild(document.createElement('canvas'));
                canva.setAttribute('id', 'tempCanvas');
                canva.style = "width:800px;height:800px;display:none";
            let canvas = document.getElementById("tempCanvas");
            let ctx = canvas.getContext("2d");
            let cw = canvas.width;
            let ch = canvas.height;
            let maxW = 800;
            let maxH = 800;
            let img = new Image;
            img.src = this.result;
            
            img.onload = function(){

                let iw = img.width;
                let ih = img.height;
                let scale = Math.min((maxW/iw), (maxH/ih));
                let iwScaled = iw * scale;
                let ihScaled = ih * scale;
                canvas.width = iwScaled;
                canvas.height = ihScaled;
                ctx.drawImage(img,0,0,iwScaled,ihScaled);
                let base64image = canvas.toDataURL("image/jpeg");
                contPreview.querySelector('.preview').src = base64image;
                contPreview.style = "height:200px;border:solid 3px green;";
                canvas.remove();

            };

        };
        reader.readAsDataURL(this._imagen.files[0]);
    };

};