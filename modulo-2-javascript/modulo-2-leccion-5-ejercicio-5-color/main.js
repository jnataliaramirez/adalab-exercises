'use strict';

const body = document.querySelector('.body');

function pulsarTecla(event) {
    console.log(event);
    if (event.key === "r") {
        body.classList.remove("purple");
        body.classList.add("red");
    } else if (event.key === "p") {
        body.classList.remove("red");
        body.classList.add("purple");
    }     
    document.removeEventListener("keydown", pulsarTecla);
}

body.addEventListener('keydown', pulsarTecla);