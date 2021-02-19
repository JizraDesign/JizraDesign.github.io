const menu = document.querySelector('.icono__menu'),
    nav = document.querySelector('.nav');

menu.addEventListener("mouseenter", () => {
    menu.classList.remove("fa-bars");
    menu.classList.add("fa-hamburger");
});
menu.addEventListener("mouseleave", () => {
    menu.classList.remove("fa-hamburger");
    menu.classList.add("fa-bars");
});
menu.addEventListener("click", e => {
    nav.classList.toggle("visible");
    if(nav.classList.contains("visible")){
        menu.classList.add("fa-times");
        window.addEventListener("click", e => {
            if(e.target !== menu){
                menu.classList.remove("fa-times");
                nav.classList.remove("visible");
            };
            
        });
        
    }else{
        menu.classList.remove("fa-times");
    };
    
});