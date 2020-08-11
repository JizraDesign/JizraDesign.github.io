preloader();
header();
footer();
function preloader(){
    let contPreloader = document.body.appendChild(document.createElement('section'));
        contPreloader.setAttribute('class','cont__pre-loader visible');
    let loader = contPreloader.appendChild(document.createElement('section'));
        loader.setAttribute('class', 'loader');
    let spanLoader = loader.appendChild(document.createElement('span'));
        spanLoader.setAttribute('class', 'loader__span');
    spanLoader = loader.appendChild(document.createElement('span'));
        spanLoader.setAttribute('class', 'loader__span');
    let imgJizra = loader.appendChild(document.createElement('section'));
        imgJizra.setAttribute('class', 'jizra__logo');
    let img = imgJizra.appendChild(document.createElement('img'));
        img.setAttribute('class', 'jizra__logo__img');
        img.setAttribute('src', 'https://jizradesign.github.io/img/jizraDesign-500.png');
        img.setAttribute('alt', 'Logo Jizra Design');
    let textoLoader = contPreloader.appendChild(document.createElement('section'));
        textoLoader.setAttribute('class', 'loader__texto');
        letras(textoLoader,'L');
        letras(textoLoader,'O');
        letras(textoLoader,'A');
        letras(textoLoader,'D');
        letras(textoLoader,'I');
        letras(textoLoader,'N');
        letras(textoLoader,'G');
        letras(textoLoader,'.');
        letras(textoLoader,'.');
        letras(textoLoader,'.');
    function letras(padre, letra){
        let letraItem = padre.appendChild(document.createElement('span'));
            letraItem.setAttribute('class', 'loader__texto__span');
            letraItem.textContent = letra;
    }
    let letra = document.querySelectorAll('.loader__texto__span');
    for(let i = 0; i < letra.length; i++){
        letra[i].style.animation = `texto 2s ease-in-out ${0.1 * i}s infinite`;
    };
    setTimeout(() => {
        document.querySelector('.cont__pre-loader').classList.remove('visible');
        setTimeout(() => {
            document.querySelector('.cont__pre-loader').remove();
        }, 500);
    }, 7000);
};
function header(){
    const url = window.location.href;
    const header = document.querySelector('#header');
    let contHeader = header.appendChild(document.createElement('div'));
        contHeader.setAttribute('class', 'cont_header');
    let p = contHeader.appendChild(document.createElement('div'));
    let iconShare = p.appendChild(document.createElement('i'));
        iconShare.setAttribute('class', 'fa fa-share');
        p.innerHTML += 'Comparte en tus redes';
    // >>>>> -->>>>> ----- btn facebook ----- <<<<<-- <<<<<
    let link = contHeader.appendChild(document.createElement('a'));
        link.setAttribute('class', '');
        link.setAttribute('target', '_blank');
        link.setAttribute('title', 'Comparte en facebook');
        link.setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u='+url);
    let iconLInk = link.appendChild(document.createElement('i'));
        iconLInk.setAttribute('class', 'compartir_btn compartir_btn_facebook fa fa-facebook');
    // >>>>> -->>>>> ----- btn twiter ----- <<<<<-- <<<<<
    link = contHeader.appendChild(document.createElement('a'));
        link.setAttribute('class', 'twitter-share-button');
        link.setAttribute('target', '_blank');
        link.setAttribute('title', 'Comparte en twitter');
        link.setAttribute('href', 'https://twitter.com/share');
        link.setAttribute('data-url', url);
        link.setAttribute('data-text', '');
        link.setAttribute('data-via', 'jizraDesign');
    iconLInk = link.appendChild(document.createElement('i'));
        iconLInk.setAttribute('class', 'compartir_btn compartir_btn_twitter fa fa-twitter');
    // >>>>> -->>>>> ----- btn whatsapp ----- <<<<<-- <<<<<
    link = contHeader.appendChild(document.createElement('a'));
        link.setAttribute('class', '');
        link.setAttribute('target', '_blank');
        link.setAttribute('title', 'Comparte en whatsapp');
        link.setAttribute('href', 'whatsapp://send?text=' + url);
    iconLInk = link.appendChild(document.createElement('i'));
        iconLInk.setAttribute('class', 'compartir_btn compartir_btn_whatsapp fa fa-whatsapp')
};
function footer(){
    const footer = document.querySelector('#footer');
    let contFooter = footer.appendChild(document.createElement('section'));
        contFooter.setAttribute('class', 'cont__foter');
    let p = contFooter.appendChild(document.createElement('p'));
        p.textContent=`Card diseñada por `;
    let link = p.appendChild(document.createElement('a'));
        link.setAttribute('href', 'https://jizradesign.github.io/');
        link.textContent = 'Jizra Design';
    let imagen = contFooter.appendChild(document.createElement('img'));
        imagen.setAttribute('class', 'img_lvjizra');
        imagen.setAttribute('src', 'https://jizradesign.github.io/img/logo-icon-180x180.png');
        imagen.setAttribute('alt', 'Logo jizra design');
};