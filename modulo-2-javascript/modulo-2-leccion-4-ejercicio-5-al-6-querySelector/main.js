'use strict';

// ejercicio 5
function getEl(selector) {
    const elemento = document.querySelector(selector);
    return elemento;
}

const prueba1 = getEl('.container');
console.log(`prueba 1:`)
console.log(prueba1)

const prueba2 = getEl('.title')
console.log(`prueba 2:`)
console.log(prueba2)

const prueba3 = getEl('.img')
console.log(`prueba 3:`)
console.log(prueba3)

const text = prueba2.innerHTML
console.log(text)

// ejercicio 6

function getEl(selector) {
    const classHtml = document.querySelector(selector);

    if (!classHtml) {
        console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`)
    }

    return classHtml;
}


const prueba1 = getEl('.title');
console.log(`prueba 1:`)
console.log(prueba1)
