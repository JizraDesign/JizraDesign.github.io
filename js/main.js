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
menu.addEventListener("click", () => {
    nav.classList.toggle("visible");
    nav.classList.contains("visible") ? menu.classList.add("fa-times") : menu.classList.remove("fa-times");
    
});