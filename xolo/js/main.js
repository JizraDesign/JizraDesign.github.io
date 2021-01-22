const contConstancias = document.querySelector('.cont__constancias');

fetch('js/constancias.json')
.then(res => res.json())
.then(data => {
    // console.log(data);
    for(constancia of data.constancias){
        let contConstancia = contConstancias.appendChild(document.createElement("div"));
            contConstancia.setAttribute("class", "cont__constancia");
            contConstancia.setAttribute("id", urlAmigables(constancia.constancia));
        let contImg = contConstancia.appendChild(document.createElement("div"));
            contImg.setAttribute("class", "cont__img");
        let img = contImg.appendChild(document.createElement("img"));
            img.setAttribute("src", `constancias/img/${constancia.img}`);
            img.setAttribute("class", "img__constancia");
        let title= contConstancia.appendChild(document.createElement("h2"));
            title.setAttribute("class", "title__constancia");
        let contBtns = contConstancia.appendChild(document.createElement("div"));
            contBtns.setAttribute("class", "cont__btns center");
            title.textContent = constancia.constancia;
        let btn = contBtns.appendChild(document.createElement("a"));
            btn.setAttribute("class", "btn center");
            btn.setAttribute("href", `constancias/${constancia.pdf}`);
            btn.setAttribute("target", "_Blank");
            btn.setAttribute("title", constancia.constancia);
        let text = btn.appendChild(document.createElement("span"));
            text.setAttribute("class", "text__btn");
            text.textContent = "Ver";

        btn = contBtns.appendChild(document.createElement("a"));
            btn.setAttribute("class", "btn center");
            btn.setAttribute("href", `constancias/${constancia.pdf}`);
            btn.setAttribute("download", "");
            btn.setAttribute("title", constancia.constancia);
        text = btn.appendChild(document.createElement("span"));
            text.setAttribute("class", "text__btn");
            text.textContent = "Descargar PDF";

        btn = contBtns.appendChild(document.createElement("a"));
            btn.setAttribute("class", "btn center");
            btn.setAttribute("href", `constancias/img/${constancia.img}`);
            btn.setAttribute("download", "");
            btn.setAttribute("title", constancia.constancia);
        text = btn.appendChild(document.createElement("span"));
            text.setAttribute("class", "text__btn");
            text.textContent = "Descargar JPG";

    }
})
.catch(error => console.log('Error =>',error));

