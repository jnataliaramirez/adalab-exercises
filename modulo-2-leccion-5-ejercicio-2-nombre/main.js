'use strict';

const saludo = document.querySelector('.saludo')
const btn = document.querySelector('.btn')

function cambiarTexto() {
    saludo.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!'
}

btn.addEventListener('click', cambiarTexto)