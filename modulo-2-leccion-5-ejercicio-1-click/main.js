'use strict';

const nombre = document.querySelector('.nombre')
const btn = document.querySelector('.btn')

function msnConsola() {
    const nombreConsola = nombre.value
    console.log(`Hola ${nombreConsola}`)
}

btn.addEventListener('click', msnConsola)