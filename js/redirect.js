const izq = document.querySelector(".cont__izq"),
    der = document.querySelector(".cont__der");

setTimeout(() => {
    izq.classList.add("open");
    der.classList.add("open");
    setTimeout(() => {
        window.location.href="https://jizradesign.herokuapp.com/";
    }, 500);
}, 1000);